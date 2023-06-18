import { useCallback,useState,useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./form-login.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from 'axios';

const FormLogin = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
  
    if (name === 'password') {
      setFormData((prevData) => ({
        ...prevData,
        password: value
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  
    // Pemanggilan fungsi handleChange yang pertama
    // dengan memanggil fungsi handleChange yang ada di useState
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Lakukan proses login seperti sebelumnya
      const response = await axios.post('/api/login', formData);
      console.log(response.data); // Log the response data
      // Handle the response as needed
  
      // Set isLoggedIn ke true dan simpan status login di session storage
      setIsLoggedIn(true);
      sessionStorage.setItem('isLoggedIn', 'true');
  
      // Redirect ke halaman landing page
      router.push('/');
    } catch (error) {
      console.error(error);
      // Handle the error
      setErrorMessage('Incorrect email or password. Please try again.');
    }
  };
  

  const onLupaKataSandiClick = useCallback(() => {
    router.push("/lupa-password");
  }, [router]);

  const onDaftarDiSiniClick = useCallback(() => {
    router.push("/register");
  }, [router]);

  const toggleShowPassword = useCallback(() => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  useEffect(() => {
    // Cek session storage saat komponen halaman login dimuat
    const isLoggedInSession = sessionStorage.getItem('isLoggedIn');
    if (isLoggedInSession === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = async () => {
    try {
      // Lakukan proses logout seperti sebelumnya

      // Hapus status login dari session storage
      sessionStorage.removeItem('isLoggedIn');

      // Redirect ke halaman login
      router.push('/login');
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div className={styles.frameParent}>
      <div className={styles.logoWrapper}>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      </div>
      <div className={styles.masuk}>
        <b className={styles.masuk1}>Masuk</b>
      </div>
      {isLoggedIn ? (
        <div>
          <p>You are logged in</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
      <form className={styles.inner} onSubmit={handleSubmit}>
      
      
        <div className={styles.input}>
          <div className={styles.emailnoTelepon}>Email/No Telepon</div>
          <div className={styles.pswParent}>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.psw}
              type="email"
              placeholder="Contoh: johndoe@gmail.com"
              required
            />
            <img className={styles.fisearchIcon} alt="" src="/fisearch.svg" />
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.textpassword}>
            <div className={styles.password}>Password</div>
            <button
              className={styles.lupaKataSandi}
              onClick={onLupaKataSandiClick}
            >
              Lupa Kata Sandi
            </button>
          </div>
          <div className={styles.forminput}>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.psw}
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan password"
              maxLength={12}
              require
            />
            <button
              className={styles.showPasswordButton}
              onClick={toggleShowPassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.button} type="submit">
            <div className={styles.terbitkan}>Masuk</div>
            <img className={styles.fiheartIcon} alt="" src="/fiheart.svg" />
          </button>
        </div>
        </form>
      
      )}
      <div className={styles.register}>
        <div className={styles.belumPunyaAkun}>Belum punya akun?</div>
        <button className={styles.daftarDiSini} onClick={onDaftarDiSiniClick}>
          Daftar di sini
        </button>
      </div>
    </div>
  );
};

export default FormLogin;
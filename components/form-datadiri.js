import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import styles from "./form-datadiri.module.css";
import axios from 'axios';

const FormRegister = () => {
  const router = useRouter();
 const [formData, setFormData] = useState({
  nama_lengkap: '',
  alamat: '',
  email: '',
  nomor_telepon: ''
});

  const onMasukDiSiniClick = useCallback(() => {
    router.push("/privacy");
  }, [router]);

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
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the register API endpoint
      const response = await axios.post('/api/datadiri', formData);
      console.log(response.data); // Log the response data
      // Handle the response as needed

      // Redirect to the histori page
      router.push('/historipembelian');
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };

  return (
    <div  className={styles.frameParent}>
      <div className={styles.card}>
      
      <div className={styles.masuk}>
        <b className={styles.daftar}>Isi Data Pemesan</b>
      </div>
      <form className={styles.inner} onSubmit={handleSubmit}>
      
        <div className={styles.input}>
          <div className={styles.username}>Nama Lengkap</div>
          <div className={styles.usernameWrapper}>
            <input
              name="nama_lengkap" 
              value={formData.nama_lengkap}
              onChange={handleChange}
              className={styles.username1}
              type="text"
              placeholder="Nama Lengkap"
              required
            />
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.masuk}>
            <div className={styles.buatPassword}>Alamat</div>
          </div>
          <div className={styles.alamatContainer}>
            <input
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              className={styles.username1}
              type="text"
              placeholder="Alamat . "
            />
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.masuk}>
            <div className={styles.buatPassword}>Email</div>
          </div>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.inputChild}
            type="email"
            placeholder="Contoh: johndee@gmail.com"
            required
          />
        </div>
        <div className={styles.input}>
          <div className={styles.masuk}>
            <div className={styles.buatPassword}>Nomor Telepon</div>
          </div>
          <div className={styles.alamatContainer}>
            <input
              name="nomor_telepon"
              value={formData.nomor_telepon}
              onChange={handleChange}
              className={styles.username1}
              type="tel"
              placeholder="+62 . "
              required
            />
          </div>
        </div>
        </form>
      
      </div>
    </div>
  );
};

export default FormRegister;
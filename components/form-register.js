import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import styles from "./form-register.module.css";
import axios from "axios";

const FormRegister = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [alamat, setAlamat] = useState("");
  const [email, setEmail] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Kirim data register ke API
      const response = await axios.post("/api/register", {
        username,
        password,
        nama_lengkap: namaLengkap,
        alamat,
        email,
        nomor_telepon: nomorTelepon,
      });

      setMessage(response.data.message);
      // Jika pendaftaran berhasil, arahkan ke halaman login
      if (response.data.message === "Pendaftaran berhasil") {
        setTimeout(() => {
          window.location.href = "/login"; // Ganti dengan alamat halaman login yang diinginkan
        }, 2000); // Redirect setelah 2 detik
      }
    } catch (error) {
      setMessage("Terjadi kesalahan pada server");
    }
  };

  const onMasukDiSiniClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  return (
    <div className={styles.formdaftar}>
      <div className={styles.masuk}>
        <b className={styles.daftar}>Daftar</b>
      </div>
      <form className={styles.inner} onSubmit={handleSubmit}>
        <div className={styles.input}>
          <div className={styles.username}>Username</div>
          <input
            className={styles.inputChild}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div className={styles.input}>
          <div className={styles.masuk}>
            <div className={styles.buatPassword}>Buat Password</div>
          </div>
          <input
            className={styles.inputItem}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Buat Password"
            required
          />
        </div>
        <div className={styles.input}>
          <div className={styles.username}>Nama Lengkap</div>
          <input
            className={styles.inputChild}
            type="text"
            value={namaLengkap}
            onChange={(e) => setNamaLengkap(e.target.value)}
            placeholder="Nama Lengkap"
            required
          />
        </div>
        <div className={styles.input}>
          <div className={styles.masuk}>
            <div className={styles.buatPassword}>Alamat</div>
          </div>
          <input
            className={styles.inputItem}
            type="text"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            placeholder="Alamat . "
            required
          />
        </div>
        <div className={styles.input}>
          <div className={styles.masuk}>
            <div className={styles.buatPassword}>Email</div>
          </div>
          <input
            className={styles.inputItem}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Contoh: johndee@gmail.com"
            required
          />
        </div>
        <div className={styles.input}>
          <div className={styles.masuk}>
            <div className={styles.buatPassword}>Nomor Telepon</div>
          </div>
          <input
            className={styles.inputItem}
            type="tel"
            value={nomorTelepon}
            onChange={(e) => setNomorTelepon(e.target.value)}
            placeholder="+62 . "
            required
          />
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.button}type="submit">
            <div className={styles.terbitkan}>Daftar</div>
          </button>
        </div>
      </form>
      {message && <p style={{ color: message.includes('gagal') ? 'red' : 'green' }}>{message}</p>}
      <div className={styles.register}>
        <div className={styles.sudahPunyaAkun}>Sudah punya akun?</div>
        <button className={styles.masukDiSini} onClick={onMasukDiSiniClick}>
          Masuk di sini
        </button>
      </div>
    </div>
  );
};

export default FormRegister;
import AkunContainer from "../../components/akun-container";
import ProfileContainer from "../../components/profile-container";
import styles from "./index.module.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from "next/router";

const Akun = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [namaLengkap, setNamaLengkap] = useState('');
  const [alamat, setAlamat] = useState('');
  const [nomorTelepon, setNomorTelepon] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Periksa apakah pengguna telah login dengan memeriksa keberadaan access token di cookie
    const accessToken = document.cookie.replace(
      /(?:(?:^|.*;\s*)accessToken\s*\=\s*([^;]*).*$)|^.*$/,
      '$1'
    );

    if (!accessToken) {
      // Jika tidak ada access token, tampilkan pesan "Login terlebih dahulu"
      setMessage('Login terlebih dahulu');
      router.push('/login');
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Mengirim data perubahan profil ke endpoint
      const response = await axios.put('/api/ubah-profil', {
        username,
        nama_lengkap: namaLengkap,
        alamat,
        nomor_telepon: nomorTelepon
      });

      // Menampilkan pesan sukses
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      // Menampilkan pesan error
      setMessage('Terjadi kesalahan saat memperbarui profil');
    }
  };

  // Menentukan kelas CSS berdasarkan pesan
  let messageClass = '';
  if (message === 'Update data successfully') {
    messageClass = styles.success;
  } else if (message === 'Login terlebih dahulu') {
    messageClass = styles.error;
  }

  // Jika belum login, tampilkan pesan "Login terlebih dahulu"
  if (message === 'Login terlebih dahulu') {
    return <p className={`${styles.message} ${messageClass}`}>{message}</p>;
  }

  return (
    <div className={styles.akun}>
      <AkunContainer />
      <div className={styles.akunParent}>
        <ProfileContainer />
        <div className={styles.sectionPemesan}>
          <div className={styles.card1}>
            <form className={styles.wrapperContainer} onSubmit={handleSubmit}>
              <div className={styles.info}>
                <b className={styles.ubahDataProfil}>{`Ubah Data Profil `}</b>
                <div className={styles.data}>
                  <div className={styles.listItem}>
                    <div className={styles.text}>
                      <div className={styles.label}>
                        <div className={styles.textPenumpang}>Data Diri</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.info1}>
                    <div className={styles.username}>
                      <div className={styles.wrapperContainer}>
                        <div className={styles.username1}>
                          <b className={styles.lastName}>Username</b>
                        </div>
                      </div>
                      <input
                        className={styles.inputField}
                        type="text"
                        placeholder="  Isi  Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div className={styles.username}>
                      <div className={styles.wrapperContainer}>
                        <div className={styles.username1}>
                          <b className={styles.lastName}>Nama Lengkap</b>
                        </div>
                      </div>
                      <input
                        className={styles.inputField}
                        type="text"
                        placeholder="  Isi Nama"
                        value={namaLengkap} onChange={(e) => setNamaLengkap(e.target.value)} 
                        required
                      />
                    </div>
                    <div className={styles.username}>
                      <div className={styles.wrapperContainer}>
                        <div className={styles.username1}>
                          <b className={styles.lastName}>Alamat</b>
                        </div>
                      </div>
                      <input
                        className={styles.inputField2}
                        type="tel"
                        placeholder="  Isi alamat"
                        value={alamat}
                        onChange={(e) => setAlamat(e.target.value)}
                        required
                      />
                    </div>
                    <div className={styles.username}>
                      <div className={styles.wrapperContainer}>
                        <div className={styles.username1}>
                          <b className={styles.lastName}>Nomor Telepon</b>
                        </div>
                      </div>
                      <input
                        className={styles.inputField2}
                        type="tel"
                        placeholder="+62"
                        value={nomorTelepon}
                        onChange={(e) => setNomorTelepon(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.button} type="submit" >
                <button className={styles.brandButton}>
                  <div className={styles.pilih}>Simpan</div>
                </button>
              </div>
              {message && <p className={`${styles.message} ${messageClass}`}>{message}</p>}
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Akun;

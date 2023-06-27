import styles from "./profile-container.module.css";
import axios from "axios";

const ProfileContainer = () => {
  const handleLogout = async () => {
    try {
      // Mengirim permintaan logout ke endpoint
      await axios.delete('/api/logout');
      sessionStorage.removeItem('isLoggedIn');

      // Menghapus cookie access token
      document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

      // Mengarahkan pengguna ke halaman login
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.akun}>
      <div className={styles.menu}>
        <button className={styles.ubahprofil}>
          <img className={styles.fiedit3Icon} alt="" src="/fiedit3.svg" />
          <div className={styles.ubahProfil}>Ubah Profil</div>
        </button>
        <div className={styles.divider} />
      </div>
      <div className={styles.menu1}>
        <button className={styles.settingakun}>
          <img className={styles.fiedit3Icon} alt="" src="/fisettings.svg" />
          <div className={styles.pengaturanAkun}>Pengaturan Akun</div>
        </button>
        <div className={styles.divider1} />
      </div>
      <div className={styles.menu1}>
        <button className={styles.filogOutParent} onClick={handleLogout}>
          <img className={styles.fiedit3Icon} alt="" src="/filogout.svg" />
          <div className={styles.keluar}>Keluar</div>
        </button>
        <div className={styles.divider1} />
      </div>
      <div className={styles.version110}>Version 1.1.0</div>
    </div>
  );
};

export default ProfileContainer;

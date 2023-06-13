import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./form-register.module.css";
const FormRegister = () => {
  const router = useRouter();

  const onMasukDiSiniClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.logoWrapper}>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      </div>
      <div className={styles.masuk}>
        <b className={styles.daftar}>Daftar</b>
      </div>
      <div className={styles.inner}>
        <div className={styles.input}>
          <div className={styles.nama}>Nama</div>
          <input
            className={styles.inputChild}
            type="text"
            placeholder="Nama Lengkap"
            required
          />
        </div>
        <div className={styles.input}>
          <div className={styles.masuk}>
            <div className={styles.email}>Email</div>
          </div>
          <input
            className={styles.inputItem}
            type="email"
            placeholder="Contoh: johndee@gmail.com"
            required
          />
        </div>
        <div className={styles.input}>
          <div className={styles.masuk}>
            <div className={styles.email}>Nomor Telepon</div>
          </div>
          <input
            className={styles.inputItem}
            type="tel"
            placeholder="+62 . "
            required
          />
        </div>
        <div className={styles.input}>
          <div className={styles.masuk}>
            <div className={styles.email}>Buat Password</div>
          </div>
          <input
            className={styles.inputItem}
            type="password"
            placeholder="Buat Password"
            required
          />
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>
            <div className={styles.terbitkan}>Daftar</div>
            <img className={styles.fiheartIcon} alt="" src="/fiheart.svg" />
          </button>
        </div>
      </div>
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

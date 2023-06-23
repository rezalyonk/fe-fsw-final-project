import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./form-login.module.css";
const FormLogin = () => {
  const router = useRouter();

  const onLupaKataSandiClick = useCallback(() => {
    router.push("/lupa-password");
  }, [router]);

  const onDaftarDiSiniClick = useCallback(() => {
    router.push("/register");
  }, [router]);

  return (
    <div className={styles.formlogin}>
      <div className={styles.masuk}>
        <b className={styles.masuk1}>Masuk</b>
      </div>
      <div className={styles.inner}>
        <div className={styles.input}>
          <div className={styles.emailnoTelepon}>Email/No Telepon</div>
          <input
            className={styles.inputChild}
            type="email"
            placeholder="Contoh: johndoe@gmail.com"
            maxLength
            minLength
            required
          />
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
          <input
            className={styles.forminput}
            type="password"
            placeholder="Masukkan password"
            maxLength
            minLength
            required
          />
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>
            <div className={styles.terbitkan}>Masuk</div>
            <img className={styles.fiheartIcon} alt="" src="/fiheart.svg" />
          </button>
        </div>
      </div>
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

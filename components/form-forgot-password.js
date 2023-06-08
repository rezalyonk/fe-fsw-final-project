import styles from "./form-forgot-password.module.css";
const FormForgotPassword = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.logoWrapper}>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      </div>
      <div className={styles.masuk}>
        <b className={styles.resetPassword}>Reset Password</b>
      </div>
      <div className={styles.inner}>
        <div className={styles.input}>
          <div className={styles.masukkanPasswordBaru}>
            Masukkan Password Baru
          </div>
          <input
            className={styles.inputChild}
            type="text"
            placeholder="Contoh: johndoe@gmail.com"
          />
        </div>
        <div className={styles.input}>
          <div className={styles.masuk}>
            <div className={styles.ulangiPasswordBaru}>
              Ulangi Password Baru
            </div>
          </div>
          <input
            className={styles.inputItem}
            type="password"
            placeholder="Masukkan password"
          />
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>
            <div className={styles.terbitkan}>Simpan</div>
            <img className={styles.fiheartIcon} alt="" src="/fiheart.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormForgotPassword;

import FormResetPassword from "../../../components/form-reset-password";
import styles from "./index.module.css";
const ResetPassword = () => {
  return (
    <div className={styles.resetPassword}>
      <div className={styles.wResetPassword}>
        <img
          className={styles.gambargradasiIcon}
          alt=""
          src="/gambargradasi@2x.png"
        />
        <div className={styles.forminput}>
          <div className={styles.inputtoken}>
            <b className={styles.resetPassword1}>Reset Password</b>
          </div>
          <FormResetPassword />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

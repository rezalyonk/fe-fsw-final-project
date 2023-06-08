import FormForgotPassword from "../../components/form-forgot-password";
import styles from "./index.module.css";
const ForgotPassword = () => {
  return (
    <div className={styles.forgotpassword}>
      <div className={styles.wLogin}>
        <img className={styles.frame23301} alt="" src="/frame-2330-1@2x.png" />
        <FormForgotPassword />
      </div>
    </div>
  );
};

export default ForgotPassword;

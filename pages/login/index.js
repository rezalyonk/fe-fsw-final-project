import FormLogin from "../../components/form-login";
import styles from "./index.module.css";
const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.wLogin}>
        <img
          className={styles.gambargradasiIcon}
          alt=""
          src="/gambargradasi@2x.png"
        />
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;

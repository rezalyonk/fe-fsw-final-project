import FormRegister from "../../components/form-register";
import styles from "./index.module.css";
const Register = () => {
  return (
    <div className={styles.register}>
      <div className={styles.wLogin}>
        <img
          className={styles.gambargradasiIcon}
          alt=""
          src="/gambargradasi@2x.png"
        />
        <FormRegister/>
      </div>
    </div>
  );
};

export default Register;

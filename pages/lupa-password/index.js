import FromLupaPassword from "../../components/form-lupa-password"
import styles from "./index.module.css";
const LupaPassword = () => {
  return (
    <div className={styles.lupaPassword}>
      <div className={styles.wLupaPassword}>
        <img
          className={styles.gambargradasiIcon}
          alt=""
          src="/gambargradasi@2x.png"
        />
        <FromLupaPassword />
      </div>
    </div>
  );
};

export default LupaPassword;

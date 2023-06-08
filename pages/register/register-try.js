import styles from "./register-try.module.css";
const RegisterTry = () => {
  return (
    <div className={styles.registertry}>
      <div className={styles.communityInner}>
        <div className={styles.join}>
          <div className={styles.register}>Create An Account</div>
          <div className={styles.createAnAccount}>
            Create an account with us to enjoy all our services and perks!
          </div>
        </div>
        <div className={styles.form}>
          <input
            className={styles.emailAddress}
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className={styles.form}>
          <input
            className={styles.emailAddress}
            type="password"
            placeholder="Password"
          />
        </div>
        <button className={styles.button}>
          <div className={styles.createAccount}>CREATE ACCOUNT</div>
        </button>
      </div>
    </div>
  );
};

export default RegisterTry;

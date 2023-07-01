import Detailpenerbangan from "../../components/detailpenerbangan";
import styles from "./index.module.css";
import {FcNext } from "react-icons/fc"

const Login = () => {
  return (
    <div className={styles.register}>
      <div className={styles.cont}>
        <div className={styles.proses}>
          <h1 className={styles.span2}>Data Diri</h1>
          <FcNext size={25} className={styles.icon}/>
          <h1 className={styles.span}>Detai Pesanan </h1>
          <FcNext size={25} className={styles.icon}/>
          <h1 className={styles.span2}>Pembayaran</h1>
        </div>
        <Detailpenerbangan />
      </div>
    </div>
  );
};

export default Login;

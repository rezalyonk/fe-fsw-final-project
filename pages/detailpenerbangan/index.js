import Navbar from "@/components/Navbar";
import Detailpenerbangan from "../../components/detailpenerbangan";
import styles from "./index.module.css";
import {AiFillForward } from "react-icons/ai"


const Login = () => {
  return (
    <div className={styles.register}>
      <Navbar/>
      <div className={styles.cont}>
        <div className={styles.proses}>
          <h1 className={styles.span2}>Data Diri</h1>
          <AiFillForward size={25} className={styles.icon}/>
          <h1 className={styles.span}>Detai Pesanan </h1>
          <AiFillForward size={25} className={styles.icon}/>
          <h1 className={styles.span2}>Pembayaran</h1>
        </div>
        <Detailpenerbangan />
      </div>
    </div>
  );
};

export default Login;

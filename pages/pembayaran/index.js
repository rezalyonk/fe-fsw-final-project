import Pembayaran from "../../components/Pembayaran"
import styles from "./index.module.css";
import {FcNext } from "react-icons/fc"

const Datadiri = () => {
  return (
    <div className={styles.register}>
      <div className={styles.proses}>
        <h1 className={styles.span2}>Data Diri</h1>
        <FcNext size={25} className={styles.icon}/>
        <h1 className={styles.span2}>Detai Pesanan </h1>
        <FcNext size={25} className={styles.icon}/>
        <h1 className={styles.span}>Pembayaran</h1>
      </div>
      <div className={styles.wLogin}>
        <Pembayaran/>
        
      </div>
    </div>
  );
};

export default Datadiri;

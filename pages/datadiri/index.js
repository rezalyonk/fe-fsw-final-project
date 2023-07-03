import FormDataPenumpang from "../../components/form-datapenumpang";
import styles from "./index.module.css";
import { AiFillForward } from "react-icons/ai";
import Navbar from "@/components/Navbar";
const Datadiri = () => {
  return (
    <div>
      <Navbar/>
    <div className={styles.register}>
      <div className={styles.proses}>
        <h1 className={styles.span}>Data Diri</h1>
        <AiFillForward size={25} className={styles.icon} />
        <h1 className={styles.span2}>Detail Pesanan </h1>
        <AiFillForward size={25} className={styles.icon} />
        <h1 className={styles.span2}>Pembayaran</h1>
      </div>
      <div className={styles.wLogin}>
        <FormDataPenumpang />
      </div>
    </div></div>
  );
};

export default Datadiri;

import FormDataPenumpang from "../../components/form-datapenumpang";
import styles from "./index.module.css";
import { FcNext } from "react-icons/fc";

const Datadiri = () => {
  return (
    <div className={styles.register}>
      <div className={styles.proses}>
        <h1 className={styles.span}>Data Diri</h1>
        <FcNext size={25} className={styles.icon} />
        <h1 className={styles.span2}>Detail Pesanan </h1>
        <FcNext size={25} className={styles.icon} />
        <h1 className={styles.span2}>Pembayaran</h1>
      </div>
      <div className={styles.wLogin}>
        <FormDataPenumpang />
      </div>
    </div>
  );
};

export default Datadiri;

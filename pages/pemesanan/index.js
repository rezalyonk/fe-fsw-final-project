import { useRouter } from "next/router";
import styles from './index.module.css'
import Navbar from "@/components/Navbar";

const Pemesanan = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    idPenerbanganPergi,
    idPenerbanganPulang,
    namaLengkap,
    namaKeluarga,
    nomorTelepon,
    email,
    kursi,
    jumlahPenumpang,
  } = router.query;

  const handleBayarClick = () => {
    router.push(`/pembayaran?id=${id}`);
  };

  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.container}>
      <div className={styles.card}>
      <h1 className={styles.judul}>Detail Pemesanan</h1>

        <table className={styles.table}>
          <tbody>
            <tr>
              <td>ID Penerbangan Pergi:</td>
              <td>{idPenerbanganPergi}</td>
            </tr>
            <tr>
              <td>ID Penerbangan Pulang:</td>
              <td> {idPenerbanganPulang}</td>
            </tr>
            <tr>
              <td>Nama Lengkap:</td>
              <td>{namaLengkap}</td>
            </tr>
            <tr>
              <td>Nama Keluarga:</td>
              <td>{namaKeluarga}</td>
            </tr>
            <tr>
              <td>Nomor Telepon: </td>
              <td>{nomorTelepon}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>Kursi:</td>
              <td>{kursi}</td>
            </tr>
            <tr>
              <td>Jumlah Penumpang:</td>
              <td>{jumlahPenumpang}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button  className={styles.button} onClick={handleBayarClick}>Bayar</button>
    </div>
    </div>
    
  );
};

export default Pemesanan;

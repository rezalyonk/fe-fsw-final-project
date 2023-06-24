import { useRouter } from 'next/router';
import styles from '../styles/detail.module.css';

const HalamanRincianPembelian = () => {
  const router = useRouter();
  const { id_penerbangan, nama_lengkap, nama_keluarga, nomor_telepon, email, kursi, jumlah_penumpang } = router.query;

  const handleLanjutkanPembayaran = () => {
    // Logika atau aksi yang ingin dilakukan saat tombol "Lanjutkan Pembayaran" ditekan
    // Misalnya, navigasi ke halaman pembayaran
    router.push('/pembayaran');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>ID Penerbangan:</td>
              <td>{id_penerbangan}</td>
            </tr>
            <tr>
              <td>Nama Lengkap:</td>
              <td>{nama_lengkap}</td>
            </tr>
            <tr>
              <td>Nama Keluarga:</td>
              <td>{nama_keluarga}</td>
            </tr>
            <tr>
              <td>Nomor Telepon:</td>
              <td>{nomor_telepon}</td>
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
              <td>{jumlah_penumpang}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className={styles.button} onClick={handleLanjutkanPembayaran}>Lanjutkan Pembayaran</button>
    </div>
  );
};

export default HalamanRincianPembelian;
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/pembayaran.module.css';

const HalamanPembayaran = () => {
  const [formData, setFormData] = useState({
    nama_kartu: '',
    nomor_kartu: '',
    tanggal_kadaluarsa: '',
    cvv: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data pembayaran
    console.log(formData);
    // Reset form setelah submit
    setFormData({
      nama_kartu: '',
      nomor_kartu: '',
      tanggal_kadaluarsa: '',
      cvv: '',
    });
    // Arahkan pengguna ke halaman pembayaran berhasil dan menu histori pesanan
    router.push('/pembayaran-berhasil');
    router.push('/history-pesanan');
  };

  return (
    <div className={styles.container}>
      <h1>Pembayaran</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.formlabel}>
          Nama pada Kartu:
          <input
            className={styles.forminput}
            type="text"
            name="nama_kartu"
            value={formData.nama_kartu}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className={styles.formlabel}>
          Nomor Kartu:
          <input
            className={styles.forminput}
            type="text"
            name="nomor_kartu"
            value={formData.nomor_kartu}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className={styles.formlabel}>
          Tanggal Kadaluarsa:
          <input
            className={styles.forminput}
            type="text"
            name="tanggal_kadaluarsa"
            value={formData.tanggal_kadaluarsa}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className={styles.formlabel}>
          CVV:
          <input
            className={styles.forminput}
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button className={styles.formbutton} type="submit">Bayar</button>
      </form>
    </div>
  );
};

export default HalamanPembayaran;

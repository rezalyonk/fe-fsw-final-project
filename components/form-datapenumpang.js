import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./form-datapenumpang.module.css";

export default function TiketPesawatForm() {
  const [formData, setFormData] = useState({
    id_penerbangan: '',
    nama_lengkap: '',
    nama_keluarga: '',
    nomor_telepon: '',
    email: '',
    kursi: '',
    jumlah_penumpang: 0,
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
    console.log(formData);
    router.push({
      pathname: '/detailpenerbangan',
      query: formData,
    });
  };

  return (
  <div className={styles.container}>

    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.masuk}>
        <b>Isi Data Penumpang</b>
      </div>
  
      <label className={styles.formlabel}>
        ID Penerbangan:
        <input className={styles.forminput}
          type="text"
          name="id_penerbangan"
          value={formData.id_penerbangan}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className={styles.formlabel}>
        Nama Lengkap:
        <input className={styles.forminput}
          type="text"
          name="nama_lengkap"
          value={formData.nama_lengkap}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className={styles.formlabel}>
        Nama Keluarga:
        <input className={styles.forminput}
          type="text"
          name="nama_keluarga"
          value={formData.nama_keluarga}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className={styles.formlabel}>
        Nomor Telepon:
        <input className={styles.forminput}
          type="text"
          name="nomor_telepon"
          value={formData.nomor_telepon}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className={styles.formlabel}>
        Email:
        <input className={styles.forminput}
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className={styles.formlabel}>
        Kursi:
        <input className={styles.forminput}
          type="text"
          name="kursi"
          value={formData.kursi}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className={styles.formlabel}>
        Jumlah Penumpang:
        <input className={styles.forminput}
          type="number"
          name="jumlah_penumpang"
          value={formData.jumlah_penumpang}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className={styles.formbutton} type="submit">Pesan Tiket</button>
    </form></div>
  );
}

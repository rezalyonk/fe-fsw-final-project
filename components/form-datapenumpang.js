import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "./form-datapenumpang.module.css";

export default function DataDiri() {
  const [formData, setFormData] = useState({
    id_penerbangan: "",
    nama_lengkap: "",
    nama_keluarga: "",
    nomor_telepon: "",
    email: "",
    kursi: "",
    jumlah_penumpang: 0,
  });
  const [message, setMessage] = useState("");
  const router = useRouter();//router

  useEffect(() => {
    // Periksa apakah pengguna telah login dengan memeriksa keberadaan access token di cookie
    const accessToken = document.cookie.replace(
      /(?:(?:^|.*;\s*)accessToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    if (!accessToken) {
      // Jika tidak ada access token, tampilkan pesan "Login terlebih dahulu"
      setMessage("Login terlebih dahulu");
      router.push("/login");
    }
  }, [router]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/datadiri", formData);
      console.log(response.data.data);
      const id = response.data.data.id; // Simpan ID yang diterima dari respons

      // Send the form data as query parameters when navigating to the detail page
      router.push(
        `/detailpenerbangan?id_penerbangan=${formData.id_penerbangan}&nama_lengkap=${formData.nama_lengkap}&nama_keluarga=${formData.nama_keluarga}&nomor_telepon=${formData.nomor_telepon}&email=${formData.email}&kursi=${formData.kursi}&jumlah_penumpang=${formData.jumlah_penumpang}&id=${id}` // Sertakan ID dalam URL
      );
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setMessage(`Order gagal: ${error.response.data.message}`);
      } else {
        setMessage("Order gagal");
      }
    }
  };

  let messageClass = "";
  if (message === "order berhasil") {
    messageClass = styles.success;
  } else if (message === "order gagal") {
    messageClass = styles.error;
  }

  if (message === "Login terlebih dahulu") {
    return <p className={`${styles.message} ${messageClass}`}>{message}</p>;
  }

  return (
    <div className={styles.container}>
      <h1>Form Data Diri</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.masuk}>
          <b>Isi Data Penumpang</b>
        </div>
        <label className={styles.formlabel}>
          ID Penerbangan:
          <input
            className={styles.forminput}
            type="text"
            name="id_penerbangan"
            value={formData.id_penerbangan}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className={styles.formlabel}>
          Nama Lengkap:
          <input
            className={styles.forminput}
            type="text"
            name="nama_lengkap"
            value={formData.nama_lengkap}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className={styles.formlabel}>
          Nama Keluarga:
          <input
            className={styles.forminput}
            type="text"
            name="nama_keluarga"
            value={formData.nama_keluarga}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className={styles.formlabel}>
          Nomor Telepon:
          <input
            className={styles.forminput}
            type="text"
            name="nomor_telepon"
            value={formData.nomor_telepon}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className={styles.formlabel}>
          Email:
          <input
            className={styles.forminput}
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className={styles.formlabel}>
          Kursi:
          <input
            className={styles.forminput}
            type="text"
            name="kursi"
            value={formData.kursi}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className={styles.formlabel}>
          Jumlah Penumpang:
          <input
            className={styles.forminput}
            type="number"
            name="jumlah_penumpang"
            value={formData.jumlah_penumpang}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className={styles.formbutton} type="submit">
          Submit
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

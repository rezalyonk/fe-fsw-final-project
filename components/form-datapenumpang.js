import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import styles from "./form-datapenumpang.module.css";
import axios from 'axios';

const FormRegister = () => {
  const router = useRouter();
 const [formData, setFormData] = useState({
  nama_lengkap: '',
  alamat: '',
  email: '',
  nomor_telepon: ''
});

  const onMasukDiSiniClick = useCallback(() => {
    router.push("/privacy");
  }, [router]);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'password') {
      setFormData((prevData) => ({
        ...prevData,
        password: value
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the register API endpoint
      const response = await axios.post('/api/datapenumpang', formData);
      console.log(response.data); // Log the response data
      // Handle the response as needed

      // Redirect to the histori page
      router.push('/rincian pembelian');
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };

  return (
    <div  className={styles.frameParent}>
      <div className={styles.card}>
      
      <div className={styles.masuk}>
        <b className={styles.daftar}>Isi Data Penumpang</b>
      </div>
      <form className={styles.inner} onSubmit={handleSubmit}>
      
        <div className={styles.input}>
          <div className={styles.username}>Nama Lengkap</div>
          <div className={styles.usernameWrapper}>
            <input
              name="nama_lengkap" 
              value={formData.nama_lengkap}
              onChange={handleChange}
              className={styles.username1}
              type="text"
              placeholder="Nama Lengkap"
              required
            />
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.masuk}>
            <div className={styles.buatPassword}>Tanggal Lahir</div>
          </div>
          <div className={styles.alamatContainer}>
            <input
              name="tanggal lahir"
              value={formData.tanggallahir}
              onChange={handleChange}
              className={styles.username1}
              type="date"
              placeholder="dd/mm/yy "
            />
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.masuk}>
            <div className={styles.buatPassword}>Kewarganegaraan</div>
          </div>
          <input
            name="Kewarganegaraan"
            value={formData.kewarganegaraan}
            onChange={handleChange}
            className={styles.inputChild}
            type="text"
            placeholder="Contoh: indonesia"
            required
          />
        </div>
        <div className={styles.input}>
          <div className={styles.masuk}>
            <div className={styles.buatPassword}>Alamat</div>
          </div>
          <div className={styles.alamatContainer}>
            <input
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              className={styles.username1}
              type="text"
              placeholder="Alamat . "
            />
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.masuk}>
            <div className={styles.buatPassword}>KTP Paspor</div>
          </div>
          <input
            name="KTP/Paspor"
            value={formData.KTPPaspor}
            onChange={handleChange}
            className={styles.inputChild}
            type="integer"
            placeholder="Contoh: 27397108938979"
            required
          />
        </div>
        <div className={styles.input}>
          <div className={styles.masuk}>
            <div className={styles.buatPassword}>Negara penerbit</div>
          </div>
          <input
            name="negarapenerbit"
            value={formData.negarapenerbit}
            onChange={handleChange}
            className={styles.inputChild}
            type="text"
            placeholder="Contoh: indonesia"
            required
          />
        </div>
        
        <div className={styles.input}>
          <div className={styles.masuk}>
            <div className={styles.buatPassword}>Masa berlaku</div>
          </div>
          <input
            name="masaberlaku"
            value={formData.masaberlaku}
            onChange={handleChange}
            className={styles.inputChild}
            type="date"
            placeholder="dd/mm/yyyy"
            required
          />
        </div>
       
        <div className={styles.buttonWrapper}>
          <button className={styles.button} type="submit">
            <div className={styles.terbitkan}>Simpan</div>
          </button>
        </div>
        </form>
      
      <div className={styles.register}>
        <p className={styles.sudahPunyaAkun}>Saya setuju dengan ketentuan yang berlaku : <span className={styles.masukDiSini} onClick={onMasukDiSiniClick}>privacy and policy</span></p>
      </div>
      </div>
    </div>

    
  );
};

export default FormRegister;
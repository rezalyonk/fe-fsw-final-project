import { useState } from "react";
import { useRouter } from "next/router";
import styles from './index.module.css'
import { MdFlightTakeoff,MdFlightLand } from "react-icons/md";
import Navbar from '@/components/Navbar';

const RoundTrip = () => {
  const router = useRouter();
  const [kotaAwal, setKotaAwal] = useState("");
  const [kotaTujuan, setKotaTujuan] = useState("");
  const [tanggalBerangkat, setTanggalBerangkat] = useState("");
  const [tanggalPulang, setTanggalPulang] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ubah format tanggal ke "dd-mm-yyyy"
    const formattedTanggalBerangkat = formatDate(tanggalBerangkat);
    const formattedTanggalPulang = formatDate(tanggalPulang);

    // Buat URL dengan parameter pencarian
    const url = `/berangkat?kotaAwal=${kotaAwal}&kotaTujuan=${kotaTujuan}&tanggalBerangkat=${formattedTanggalBerangkat}&tanggalPulang=${formattedTanggalPulang}`;

    // Navigasi ke halaman berangkat dengan parameter pencarian
    router.push(url);
  };

  // Mengatur format date
  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}-${month}-${year}`;
  };

  return (
    <div className={styles.container}>
       <Navbar/>
      <div className={styles.card}>
      <h1 className={styles.judul}>Pilih Jadwal Penerbangan RoundTrip spesial di <span className={styles.span}>FlyTicket</span> </h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.kota}>
        
          <label className={styles.kotaAwal}>
          <MdFlightTakeoff size={25} className={styles.icon}/>
            From:
            <input className={styles.input}
              type="text"
              value={kotaAwal}
              onChange={(e) => setKotaAwal(e.target.value)}
            />
          </label>
          <br />
          <label className={styles.kotaAwal}>
          <MdFlightLand size={25} className={styles.icon}/>
            To:
            <input  className={styles.input}
              type="text"
              value={kotaTujuan}
              onChange={(e) => setKotaTujuan(e.target.value)}
            />
          </label>
        </div>
        <br />
        <div className={styles.tanggal}>
        <label>
          Daparture:
          <input className={styles.input}
            type="date"
            value={tanggalBerangkat}
            onChange={(e) => setTanggalBerangkat(e.target.value)}
          />
        </label>
        <br />
        <label>
        Return:
          <input className={styles.input}
            type="date"
            value={tanggalPulang}
            onChange={(e) => setTanggalPulang(e.target.value)}
          />
        </label>
        </div>
        <br />
        <button className={styles.btn} type="submit">Cari Tiket</button>
      </form>
      </div>
    </div>
  );
};

export default RoundTrip;

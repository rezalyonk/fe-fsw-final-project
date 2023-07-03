import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from './index.module.css'
import Navbar from '@/components/Navbar';

const Berangkat = () => {
  const router = useRouter();
  const { kotaAwal, kotaTujuan, tanggalBerangkat, tanggalPulang } =
    router.query;
  const [listPenerbangan, setListPenerbangan] = useState([]);

  useEffect(() => {
    fetchPenerbanganBerangkat();
  }, []);

  const fetchPenerbanganBerangkat = async () => {
    try {
      const response = await fetch(
        `https://mang-eak-production.up.railway.app/v1/api/tiket-round-trip-fe?kotaAwal=${kotaAwal}&kotaTujuan=${kotaTujuan}&tanggalBerangkat=${tanggalBerangkat}&tanggalPulang=${tanggalPulang}`
      );
      const data = await response.json();

      if (response.ok) {
        setListPenerbangan(data.data);
      } else {
        console.error("Failed to fetch flight data:", data.error);
      }
    } catch (error) {
      console.error("Error fetching flight data:", error);
    }
  };

  const handleSelectPenerbangan = (idPenerbangan) => {
    // Navigate to the "pages/pulang" with the selected flight ID as a query parameter
    router.push(
      `/pulang?kotaAwal=${kotaTujuan}&kotaTujuan=${kotaAwal}&tanggalBerangkat=${tanggalPulang}&tanggalPulang=${tanggalPulang}&selectedPenerbangan=${idPenerbangan}`
    );
  };

  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.card}>
      <h1 className={styles.judul}>Pilih Tiket Penerbangan Berangkat</h1>
      <div className={styles.hasil}>
      {listPenerbangan.length > 0 ? (
        <ul >
          {listPenerbangan.map((penerbangan) => (
            <li className={styles.hasil2} key={penerbangan.id}>
              {penerbangan.maskapai.nama_maskapai} - {penerbangan.harga_tiket}
              <button className={styles.btn} onClick={() => handleSelectPenerbangan(penerbangan.id)}>
                Pilih
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Tidak ada penerbangan tersedia untuk tanggal tersebut.</p>
      )}
      </div>
      </div>
    </div>
  );
};

export default Berangkat;

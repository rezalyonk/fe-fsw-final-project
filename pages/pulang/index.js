import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import Navbar from "@/components/Navbar";

const Pulang = () => {
  const router = useRouter();
  const {
    kotaAwal,
    kotaTujuan,
    tanggalBerangkat,
    tanggalPulang,
    selectedPenerbangan,
  } = router.query;
  const [listPenerbangan, setListPenerbangan] = useState([]);
  const [idPenerbanganPergi, setIdPenerbanganPergi] = useState(null);

  useEffect(() => {
    if (selectedPenerbangan) {
      setIdPenerbanganPergi(selectedPenerbangan);
    }

    fetchPenerbanganPulang();
  }, [selectedPenerbangan]);

  const fetchPenerbanganPulang = async () => {
    try {
      const response = await fetch(
        `https://mang-eak-production.up.railway.app/v1/api/tiket-round-trip-fe?kotaAwal=${kotaAwal}&kotaTujuan=${kotaTujuan}&tanggalBerangkat=${tanggalPulang}&tanggalPulang=${tanggalPulang}`
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
    router.push(
      `/detailPilihPenerbangan?idPenerbanganPergi=${idPenerbanganPergi}&idPenerbanganPulang=${idPenerbangan}`
    );
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.card}>
        <h1 className={styles.judul}>Pilih Tiket Penerbangan Pulang</h1>
        <div className={styles.hasil}>
          {listPenerbangan.length > 0 ? (
            <ul>
              {listPenerbangan.map((penerbangan) => (
                <li className={styles.hasil2} key={penerbangan.id}>
                  {penerbangan.maskapai.nama_maskapai} -{" "}
                  {penerbangan.maskapai.harga_tiket}
                  <div>
                    {penerbangan.bandaraAwal.nama_bandara},{" "}
                    {penerbangan.bandaraAwal.kota}
                    {":"} {penerbangan.jam_berangkat}
                    {".00"}
                    {"WIB"} {"---"}
                    {"---"} {penerbangan.bandaraTujuan.nama_bandara},{" "}
                    {penerbangan.bandaraTujuan.kota}
                    {":"} {penerbangan.jam_kedatangan}
                    {".00"} {"WIB"}
                  </div>
                  <button
                    className={styles.btn}
                    onClick={() => handleSelectPenerbangan(penerbangan.id)}
                  >
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

export default Pulang;

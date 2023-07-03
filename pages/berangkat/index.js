import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
    <div>
      <h1>Pilih Tiket Penerbangan Berangkat</h1>
      {listPenerbangan.length > 0 ? (
        <ul>
          {listPenerbangan.map((penerbangan) => (
            <li key={penerbangan.id}>
              {penerbangan.maskapai.nama_maskapai} - {penerbangan.harga_tiket}
              <button onClick={() => handleSelectPenerbangan(penerbangan.id)}>
                Pilih
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Tidak ada penerbangan tersedia untuk tanggal tersebut.</p>
      )}
    </div>
  );
};

export default Berangkat;

import { useState } from "react";
import { useRouter } from "next/router";

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
    <div>
      <h1>Form Pencarian Penerbangan Pulang-Pergi</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Kota Awal:
          <input
            type="text"
            value={kotaAwal}
            onChange={(e) => setKotaAwal(e.target.value)}
          />
        </label>
        <br />
        <label>
          Kota Tujuan:
          <input
            type="text"
            value={kotaTujuan}
            onChange={(e) => setKotaTujuan(e.target.value)}
          />
        </label>
        <br />
        <label>
          Tanggal Berangkat:
          <input
            type="date"
            value={tanggalBerangkat}
            onChange={(e) => setTanggalBerangkat(e.target.value)}
          />
        </label>
        <br />
        <label>
          Tanggal Pulang:
          <input
            type="date"
            value={tanggalPulang}
            onChange={(e) => setTanggalPulang(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Cari</button>
      </form>
    </div>
  );
};

export default RoundTrip;

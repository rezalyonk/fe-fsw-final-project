// pages/roundTrip.js

import { useState } from "react";
import axios from "axios";

const RoundTripPage = () => {
  const [tanggalBerangkat, setTanggalBerangkat] = useState("");
  const [tanggalPulang, setTanggalPulang] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    // Ubah format tanggal ke "DD-MM-YYYY"
    const formattedTanggalBerangkat = tanggalBerangkat
      .split("-")
      .reverse()
      .join("-");
    const formattedTanggalPulang = tanggalPulang.split("-").reverse().join("-");

    try {
      // Lakukan permintaan ke endpoint di api/roundTrip.js dengan menggunakan formattedTanggalBerangkat dan formattedTanggalPulang sebagai query params
      const response = await axios.get(
        `https://mang-eak-production.up.railway.app/v1/api/tiket-round-trip`,
        {
          params: {
            tanggalBerangkat: formattedTanggalBerangkat,
            tanggalPulang: formattedTanggalPulang,
          },
        }
      );

      setSearchResults(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Round Trip Search</h1>
      <div>
        <label>Tanggal Berangkat:</label>
        <input
          type="date"
          value={tanggalBerangkat}
          onChange={(e) => setTanggalBerangkat(e.target.value)}
        />
      </div>
      <div>
        <label>Tanggal Pulang:</label>
        <input
          type="date"
          value={tanggalPulang}
          onChange={(e) => setTanggalPulang(e.target.value)}
        />
      </div>
      <button onClick={handleSearch}>Search</button>

      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                <p>Tanggal Berangkat: {result.tanggal_berangkat}</p>
                <p>Hari: {result.hari}</p>
                <p>
                  Bandara Asal: {result.bandaraAwal.kota} -{" "}
                  {result.bandaraAwal.nama_bandara}
                </p>
                <p>
                  Bandara Tujuan: {result.bandaraTujuan.kota} -{" "}
                  {result.bandaraTujuan.nama_bandara}
                </p>
                <p>Maskapai: {result.maskapai.nama_maskapai}</p>
                <p>Harga Tiket: {result.maskapai.harga_tiket}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RoundTripPage;

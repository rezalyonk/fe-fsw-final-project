// pages/roundTrip.js

import { useState } from "react";
import axios from "axios";

export default function RoundTrip() {
  const [kotaAwal, setKotaAwal] = useState("");
  const [kotaTujuan, setKotaTujuan] = useState("");
  const [tanggalBerangkat, setTanggalBerangkat] = useState("");
  const [tanggalPulang, setTanggalPulang] = useState("");
  const [departureFlights, setDepartureFlights] = useState(null);
  const [returnFlights, setReturnFlights] = useState(null);
  const [selectedDepartureFlight, setSelectedDepartureFlight] = useState(null);
  const [selectedReturnFlight, setSelectedReturnFlight] = useState(null);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    const formattedBerangkat = formatDate(new Date(tanggalBerangkat));
    const formattedPulang = formatDate(new Date(tanggalPulang));

    try {
      // Permintaan untuk departure flights
      const departureResponse = await axios.get(
        `https://mang-eak-production.up.railway.app/v1/api/tiket-round-trip-fe`,
        {
          params: {
            kotaAwal: kotaAwal,
            kotaTujuan: kotaTujuan,
            tanggalBerangkat: formattedBerangkat,
            tanggalPulang: formattedPulang,
          },
        }
      );
      const departureData = departureResponse.data.data;
      setDepartureFlights(departureData);

      // Permintaan untuk return flights
      const returnResponse = await axios.get(
        `https://mang-eak-production.up.railway.app/v1/api/tiket-round-trip-fe`,
        {
          params: {
            kotaAwal: kotaTujuan,
            kotaTujuan: kotaAwal,
            tanggalBerangkat: formattedBerangkat,
            tanggalPulang: formattedBerangkat,
          },
        }
      );
      const returnData = returnResponse.data.data;

      // Ubah kotaAwal dan kotaTujuan pada return flights menjadi kebalikan dari input pengguna
      const returnFlights = returnData.map((flight) => ({
        ...flight,
        bandaraAwal: {
          kota: kotaTujuan,
          nama_bandara: flight.bandaraTujuan.nama_bandara,
        },
        bandaraTujuan: {
          kota: kotaAwal,
          nama_bandara: flight.bandaraAwal.nama_bandara,
        },
      }));

      setReturnFlights(returnFlights);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectDepartureFlight = (flight) => {
    setSelectedDepartureFlight(flight);
  };

  const handleSelectReturnFlight = (flight) => {
    setSelectedReturnFlight(flight);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedDepartureFlight && selectedReturnFlight) {
      // Kirim data tiket ke halaman detailPilihPenerbangan
      // Dapat menggunakan router untuk melakukan navigasi dengan membawa data tiket yang dipilih
    } else {
      console.log("Silakan pilih tiket penerbangan");
    }
  };

  return (
    <div>
      <h1>Round Trip Flight Search</h1>

      <form onSubmit={handleSearch}>
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
        <button type="submit">Search</button>
      </form>

      {departureFlights && (
        <div>
          <h2>Departure Flights:</h2>
          <ul>
            {departureFlights.map((flight) => (
              <li key={flight.id}>
                {flight.bandaraAwal.nama_bandara} ({flight.bandaraAwal.kota}) -{" "}
                {flight.bandaraTujuan.nama_bandara} ({flight.bandaraTujuan.kota}
                ){" "}
                <button onClick={() => handleSelectDepartureFlight(flight)}>
                  Select
                </button>
              </li>
            ))}
          </ul>

          {returnFlights && (
            <div>
              <h2>Return Flights:</h2>
              {returnFlights.map((flight) => (
                <div key={flight.id}>
                  {flight.bandaraAwal.nama_bandara} ({flight.bandaraAwal.kota})
                  - {flight.bandaraTujuan.nama_bandara} (
                  {flight.bandaraTujuan.kota}){" "}
                  <button onClick={() => handleSelectReturnFlight(flight)}>
                    Select
                  </button>
                </div>
              ))}
            </div>
          )}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}

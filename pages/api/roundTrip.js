import axios from "axios";

export default async function roundTrip(req, res) {
  const { kotaAwal, kotaTujuan, tanggalBerangkat, tanggalPulang } = req.query;

  // Ubah format tanggal kembali ke format yang diminta oleh server
  const formattedBerangkat = formatDate(new Date(tanggalBerangkat));
  const formattedPulang = formatDate(new Date(tanggalPulang));

  try {
    const response = await axios.get(
      `https://mang-eak-production.up.railway.app/v1/api/tiket-round-trip-fe?kotaAwal=${kotaAwal}&kotaTujuan=${kotaTujuan}&tanggalBerangkat=${formattedBerangkat}&tanggalPulang=${formattedPulang}`
    );

    const data = response.data;

    // Ubah kotaAwal dan kotaTujuan pada return flights menjadi kebalikan dari input pengguna
    const returnFlights = data.data.map((flight) => ({
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

    res.status(200).json({ success: true, data: returnFlights });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching flight data" });
  }
}

// Fungsi untuk mengonversi format tanggal kembali ke format yang diminta oleh server
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}-${month}-${year}`;
}

import axios from "axios";

export default async function handler(req, res) {
  const {
    id_penerbangan,
    nama_lengkap,
    nama_keluarga,
    nomor_telepon,
    email,
    kursi,
    jumlah_penumpang,
  } = req.body;

  // Periksa apakah ada access token dalam cookie
  const accessToken = req.cookies.accessToken;
  if (!accessToken) {
    return res.status(401).json({ message: "Login terlebih dahulu" });
  }

  try {
    // Kirim permintaan POST ke endpoint
    const response = await axios.post(
      "https://mang-eak-production.up.railway.app/v1/api/order",
      {
        id_penerbangan,
        nama_lengkap,
        nama_keluarga,
        nomor_telepon,
        email,
        kursi,
        jumlah_penumpang,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return res.status(200).json(response.data.data);
  } catch (error) {
    // Gagal
    return res.status(500).json({ message: "order gagal" });
  }
}

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

    // Berhasil
    const responseData = {
      status: true,
      message: "Pemesanan Berhasil",
      data: {
        id: response.data.id,
        user_id: response.data.user_id,
        id_penerbangan: response.data.id_penerbangan,
        nama_lengkap: response.data.nama_lengkap,
        nama_keluarga: response.data.nama_keluarga,
        nomor_telepon: response.data.nomor_telepon,
        email: response.data.email,
        kursi: response.data.kursi,
        kursi_terisi: response.data.kursi_terisi,
        jumlah_penumpang: response.data.jumlah_penumpang,
        kode_booking: response.data.kode_booking,
        status_pembayaran: response.data.status_pembayaran,
        id_penerbangan_pulang: response.data.id_penerbangan_pulang,
      },
    };

    return res.status(200).json(response.data);
  } catch (error) {
    // Gagal
    return res.status(500).json({ message: "order gagal" });
  }
}

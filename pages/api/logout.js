// pages/api/logout.js
import axios from "axios";

export default async function handler(req, res) {
  try {
    // Mengirim permintaan logout ke endpoint
    await axios.delete(
      "https://mang-eak-production.up.railway.app/v1/api/logout"
    );

    // Mengirimkan respon sukses
    res.status(200).json({ message: "Logout berhasil" });
  } catch (error) {
    console.error(error);
    // Mengirimkan respon error
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat melakukan logout" });
  }
}

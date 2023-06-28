import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    try {
      const { username, nama_lengkap, alamat, nomor_telepon } = req.body;

      // Mendapatkan access token dari cookie
      const accessToken = req.cookies.accessToken;

      if (!accessToken) {
        return res.status(401).json({ message: "Login terlebih dahulu" });
      }

      // Mengatur header Authorization dengan access token
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      // Kirim data perubahan profil ke endpoint yang ditentukan
      const response = await axios.put(
        "https://mang-eak-production.up.railway.app/v1/api/editusers",
        {
          username,
          nama_lengkap,
          alamat,
          nomor_telepon,
        },
        config
      );

      // Tangkap dan kembalikan responsenya
      return res
        .status(response.status)
        .json({ message: "Update data successfully" });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Terjadi kesalahan saat memperbarui profil" });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).json({ message: `Metode ${req.method} tidak diizinkan` });
  }
}

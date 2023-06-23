import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { username, password, nama_lengkap, alamat, email, nomor_telepon } = req.body;

      // Kirim data ke endpoint register
      const response = await axios.post('https://be-fsw-final-project-production-55d6.up.railway.app/v1/api/register', {
        username,
        password,
        nama_lengkap,
        alamat,
        email,
        nomor_telepon
      });

      // Cek jika pendaftaran berhasil
      if (response.data.success) {
        res.status(200).json({ message: 'Pendaftaran berhasil' });
      } else {
        res.status(400).json({ message: 'Pendaftaran gagal' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Terjadi kesalahan pada server' });
    }
  } else {
    res.status(405).json({ message: 'Metode yang diperbolehkan hanya POST' });
  }
}
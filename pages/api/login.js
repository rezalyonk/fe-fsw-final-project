import axios from 'axios';
import { serialize } from 'cookie';

export default async function login(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { email, password } = req.body;

  try {
    const response = await axios.post('https://be-fsw-final-project-production-55d6.up.railway.app/v1/api/login', {
      email,
      password,
    });

    const { data } = response;
    console.log(data); // Periksa respon dari server
    
    if (data.success) {
      res.setHeader('Set-Cookie', serialize('accessToken', data.accessToken, {
        httpOnly: true,
        path: '/',
      }));
      res.json({ message: 'Login berhasil' });
    } else {
      if (data.message === 'Email tidak terdaftar') {
        res.status(400).json({ message: 'Email tidak terdaftar' });
      } else if (data.message === 'Password salah') {
        res.status(400).json({ message: 'Password salah' });
      } else {
        res.status(500).json({ message: 'Terjadi kesalahan saat login' });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan saat login' });
  }
}

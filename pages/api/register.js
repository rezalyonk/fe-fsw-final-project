import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { username, password, nama_lengkap, alamat, email, nomor_telepon } = req.body;
      // Validate the input if needed

      // Make a POST request to the registration endpoint
      const response = await axios.post('https://be-fsw-final-project-production-55d6.up.railway.app/v1/api/register', {
        username,
        password,
        nama_lengkap,
        alamat,
        email,
        nomor_telepon
      });

      // Handle the response from the endpoint
      console.log(response.data); // Log the response data
      res.status(200).json({ message: 'Registration successful!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Registration failed.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Make a POST request to the logout endpoint
      const response = await axios.post('https://be-fsw-final-project-production-55d6.up.railway.app/v1/api/logout');
      console.log(response.data); // Log the response data
      res.status(200).json({ message: 'Logout successful!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Logout failed.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

import axios from 'axios';
import Cookies from 'js-cookie';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post('https://be-fsw-final-project-production-55d6.up.railway.app/v1/api/login', req.body);
      
      // Set cookie with the access token
      Cookies.set('access_token', response.data.access_token);
      
      // Proses response dari server API
      // ...
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
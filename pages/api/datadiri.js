import axios from 'axios';
import Cookies from 'js-cookie';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    try {
      // Get the access token from the cookie
      const accessToken = Cookies.get('access_token');

      const response = await axios.delete('https://be-fsw-final-project-production-55d6.up.railway.app/v1/api/logout', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      // Clear the access token cookie
      Cookies.remove('access_token');

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
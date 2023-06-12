import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;
      // Validate the input if needed

      // Make a POST request to the login endpoint
      const response = await axios.post('https://be-fsw-final-project-production-55d6.up.railway.app/v1/api/login', {
        email,
        password
      });

      // Handle the response from the endpoint
      console.log(response.data); // Log the response data
      res.status(200).json({ message: 'Login successful!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Login failed.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

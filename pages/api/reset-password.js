import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { resetToken, newPassword } = req.body;

    try {
      // Make a POST request to the reset password API endpoint
      const response = await axios.post('https://be-fsw-final-project-production-55d6.up.railway.app/v1/api/reset-password', {
        resetToken,
        newPassword
      });

      // Handle the response as needed
      // ...

      // Return success response
      res.status(200).json({ message: 'Password successfully updated' });
    } catch (error) {
      console.error(error);
      // Handle error
      res.status(500).json({ message: 'An error occurred. Please try again later' });
    }
  } else {
    // Invalid request method
    res.status(405).json({ message: 'Method not allowed' });
  }
}
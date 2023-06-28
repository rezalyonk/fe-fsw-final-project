import axios from 'axios';

export default async (req, res) => {
  try {
    const response = await axios.get('https://mang-eak-production.up.railway.app/v1/api/notification');
    const data = response.data;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

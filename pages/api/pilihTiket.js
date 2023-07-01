// pages/api/pilihTiket.js
import axios from "axios";

export default async function handler(req, res) {
  const { id_tiket } = req.query;

  try {
    // Make the GET request to the endpoint with the selected ticket ID
    const response = await axios.get(
      `https://mang-eak-production.up.railway.app/v1/api/select-ticket/${id_tiket}`
    );
    // Handle the response here (you can send back the data to the client, or do something else)
    // For example:
    res.status(200).json(response.data.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}

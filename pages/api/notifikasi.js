import axios from "axios";

export default async (req, res) => {
  try {
    // Mendapatkan accessToken dari header Authorization
    const accessToken = req.headers.authorization.replace("Bearer ", "");

    // Mengirim permintaan ke endpoint dengan menyertakan accessToken sebagai header Authorization
    const response = await axios.get(
      "https://mang-eak-production.up.railway.app/v1/api/notification",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = response.data;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

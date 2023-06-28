import axios from "axios";

export default async (req, res) => {
  const { headers } = req;

  try {
    const response = await axios.get(
      "https://mang-eak-production.up.railway.app/v1/api/history-order",
      {
        headers: {
          Authorization: headers.authorization, // Mengirim akses token sebagai Authorization header
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

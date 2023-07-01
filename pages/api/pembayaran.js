import axios from "axios";

export default async function handler(req, res) {
  const { id, card_number, card_name, cvv, expiry_date } = req.body;

  // Periksa apakah ada access token dalam cookie
  const accessToken = req.cookies.accessToken;
  if (!accessToken) {
    return res.status(401).json({ message: "Login terlebih dahulu" });
  }

  try {
    // Kirim permintaan POST ke endpoint pembayaran
    const response = await axios.post(
      "https://mang-eak-production.up.railway.app/v1/api/payment",
      {
        id,
        card_number,
        card_name,
        cvv,
        expiry_date,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // Redirect ke laman selesai
    res.redirect("/pembayaran-selesai");
  } catch (error) {
    return res.status(500).json({ message: "Pembayaran gagal" });
  }
}

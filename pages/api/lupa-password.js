import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      // Make a POST request to the forgot password API endpoint
      const response = await axios.post(
        "https://mang-eak-production.up.railway.app/v1/api/forgotPassword",
        { email }
      );

      // Send the response from the API
      res.status(response.status).json(response.data);
    } catch (error) {
      // Handle error
      res.status(error.response.status).json(error.response.data);
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

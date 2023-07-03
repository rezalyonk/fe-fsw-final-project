// api/orderRoundTrips.js

import axios from "axios";

export async function getOrderRoundTrip(
  idPenerbanganPergi,
  idPenerbanganPulang
) {
  try {
    const response = await axios.get(
      `https://mang-eak-production.up.railway.app/v1/api/select-ticket-round-trip/${idPenerbanganPergi}/${idPenerbanganPulang}`
    );

    const data = response.data;
    if (data.success) {
      return data.data;
    } else {
      console.error("Failed to get round trip details:", data.message);
      return null;
    }
  } catch (error) {
    console.error("Error getting round trip details:", error);
    return null;
  }
}

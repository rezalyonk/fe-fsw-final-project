// pages/orderRoundTrip.js

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getOrderRoundTrip } from "../api/orderRoundTrips";
import axios from "axios";
import Cookies from "js-cookie";

const OrderRoundTrip = ({ accessToken }) => {
  const router = useRouter();
  const { idPenerbanganPergi, idPenerbanganPulang } = router.query;
  const [namaLengkap, setNamaLengkap] = useState("");
  const [namaKeluarga, setNamaKeluarga] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [email, setEmail] = useState("");
  const [kursi, setKursi] = useState("");
  const [jumlahPenumpang, setJumlahPenumpang] = useState("");
  const [loading, setLoading] = useState(false);
  const [roundTripDetails, setRoundTripDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const details = await getOrderRoundTrip(
        idPenerbanganPergi,
        idPenerbanganPulang
      );
      setRoundTripDetails(details);
    };

    fetchData();
  }, [idPenerbanganPergi, idPenerbanganPulang]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      // Place order logic
      const response = await axios.post(
        "https://mang-eak-production.up.railway.app/v1/api/order-round-trip",
        {
          id_penerbangan_berangkat: idPenerbanganPergi,
          id_penerbangan_pulang: idPenerbanganPulang,
          nama_lengkap: namaLengkap,
          nama_keluarga: namaKeluarga,
          nomor_telepon: nomorTelepon,
          email: email,
          kursi: kursi,
          jumlah_penumpang: jumlahPenumpang,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = response.data;
      if (data.message === "Pemesanan Berhasil") {
        // Handle success
        console.log(data);
      } else {
        console.error("Failed to place order:", data.message);
      }

      setLoading(false);

      // Get the order ID from the response
      const orderId = response.data.data.id;
      console.log(orderId);

      // Redirect to detail pemesanan page with order details
      router.push({
        pathname: "/pemesanan",
        query: {
          id: orderId,
          idPenerbanganPergi,
          idPenerbanganPulang,
          namaLengkap,
          namaKeluarga,
          nomorTelepon,
          email,
          kursi,
          jumlahPenumpang,
        },
      });
    } catch (error) {
      console.error("Error placing order:", error);
      setLoading(false);
    }
  };

  if (!roundTripDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Order Round Trip</h1>
      {/* Display round trip details */}
      <p>Departure:</p>
      <p>ID Penerbangan: {roundTripDetails.departure.id_penerbangan}</p>
      {/* Display other details */}
      {/* ... */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="idPenerbanganPergi">ID Penerbangan Pergi:</label>
          <input
            type="text"
            id="idPenerbanganPergi"
            value={idPenerbanganPergi}
            disabled
          />
        </div>
        <div>
          <label htmlFor="idPenerbanganPulang">ID Penerbangan Pulang:</label>
          <input
            type="text"
            id="idPenerbanganPulang"
            value={idPenerbanganPulang}
            disabled
          />
        </div>
        <label>
          Nama Lengkap:
          <input
            type="text"
            value={namaLengkap}
            onChange={(e) => setNamaLengkap(e.target.value)}
            required
          />
        </label>
        <label>
          Nama Keluarga:
          <input
            type="text"
            value={namaKeluarga}
            onChange={(e) => setNamaKeluarga(e.target.value)}
            required
          />
        </label>
        <label>
          Nomor Telepon:
          <input
            type="text"
            value={nomorTelepon}
            onChange={(e) => setNomorTelepon(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Kursi:
          <input
            type="text"
            value={kursi}
            onChange={(e) => setKursi(e.target.value)}
            required
          />
        </label>
        <label>
          Jumlah Penumpang:
          <input
            type="number"
            value={jumlahPenumpang}
            onChange={(e) => setJumlahPenumpang(e.target.value)}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </div>
  );
};

export async function getServerSideProps(context) {
  const accessToken = context.req.cookies.accessToken;

  return {
    props: {
      accessToken,
    },
  };
}
export default OrderRoundTrip;

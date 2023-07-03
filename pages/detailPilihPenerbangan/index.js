import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const DetailPilihPenerbangan = () => {
  const router = useRouter();
  const { idPenerbanganPergi, idPenerbanganPulang } = router.query;
  const [detailPenerbangan, setDetailPenerbangan] = useState(null);

  useEffect(() => {
    if (idPenerbanganPergi && idPenerbanganPulang) {
      fetchDetailPenerbangan();
    }
  }, [idPenerbanganPergi, idPenerbanganPulang]);

  const fetchDetailPenerbangan = async () => {
    try {
      const response = await axios.get(
        `https://mang-eak-production.up.railway.app/v1/api/select-ticket-round-trip/${idPenerbanganPergi}/${idPenerbanganPulang}`
      );
      const data = response.data;

      if (data.success) {
        setDetailPenerbangan(data.data);
      } else {
        console.error("Failed to fetch flight details:", data.message);
      }
    } catch (error) {
      console.error("Error fetching flight details:", error);
    }
  };

  const handleCheckout = () => {
    router.push({
      pathname: "/orderRoundTrip",
      query: { idPenerbanganPergi, idPenerbanganPulang },
    });
  };

  if (!detailPenerbangan) {
    return <p>Loading...</p>;
  }

  const { departure, return: returnFlight } = detailPenerbangan;

  return (
    <div>
      <h1>Detail Pilih Penerbangan</h1>
      <h2>Penerbangan Pergi</h2>
      <p>
        ID: {departure.id_penerbangan}
        <br />
        Tanggal Berangkat: {departure.tanggal_berangkat}
        <br />
        Tanggal Kedatangan: {departure.tanggal_kedatangan}
        <br />
        Bandara Asal: {departure.bandaraAwal.nama_bandara}
        <br />
        Bandara Tujuan: {departure.bandaraTujuan.nama_bandara}
        <br />
        Maskapai: {departure.maskapai.nama_maskapai}
        <br />
        Harga Tiket: {departure.maskapai.harga_tiket}
      </p>
      <h2>Penerbangan Pulang</h2>
      <p>
        ID: {returnFlight.id_penerbangan}
        <br />
        Tanggal Berangkat: {returnFlight.tanggal_berangkat}
        <br />
        Tanggal Kedatangan: {returnFlight.tanggal_kedatangan}
        <br />
        Bandara Asal: {returnFlight.bandaraAwal.nama_bandara}
        <br />
        Bandara Tujuan: {returnFlight.bandaraTujuan.nama_bandara}
        <br />
        Maskapai: {returnFlight.maskapai.nama_maskapai}
        <br />
        Harga Tiket: {returnFlight.maskapai.harga_tiket}
      </p>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default DetailPilihPenerbangan;

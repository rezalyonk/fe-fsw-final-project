import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PilihTiket = () => {
  const router = useRouter();
  const { id_tiket } = router.query;
  const [ticketData, setTicketData] = useState(null);

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const response = await axios.get(`/api/pilihTiket?id_tiket=${id_tiket}`);
        setTicketData(response.data);
      } catch (error) {
        console.error('Error fetching ticket data:', error);
      }
    };

    if (id_tiket) {
      fetchTicketData();
    }
  }, [id_tiket]);

  const handleCheckout = () => {
    router.push(`/datadiri?id_tiket=${id_tiket}`);
  };

  if (!ticketData) {
    return <div>Loading...</div>;
  }

  const {
    id_penerbangan,
    tanggal_berangkat,
    tanggal_kedatangan,
    id_bandara_asal,
    id_bandara_tujuan,
    jam_berangkat,
    jam_kedatangan,
    selisih_jam,
    selisih_menit,
    foto,
    bandaraAwal,
    bandaraTujuan,
    maskapai,
  } = ticketData;

  return (
    <div>
      <h1>Detail Penerbangan</h1>
      <h2>ID Penerbangan: {id_penerbangan}</h2>
      <p>Tanggal Berangkat: {tanggal_berangkat}</p>
      <p>Tanggal Kedatangan: {tanggal_kedatangan}</p>
      <p>Bandara Asal: {id_bandara_asal}</p>
      <p>Bandara Tujuan: {id_bandara_tujuan}</p>
      <p>Jam Berangkat: {jam_berangkat}</p>
      <p>Jam Kedatangan: {jam_kedatangan}</p>
      <p>Selisih Jam: {selisih_jam}</p>
      <p>Selisih Menit: {selisih_menit}</p>
      <img src={foto} alt="Flight" />
      <h2>Bandara Awal</h2>
      <p>Kota: {bandaraAwal.kota}</p>
      <p>Negara: {bandaraAwal.negara}</p>
      <p>Nama Bandara: {bandaraAwal.nama_bandara}</p>
      <h2>Bandara Tujuan</h2>
      <p>Kota: {bandaraTujuan.kota}</p>
      <p>Negara: {bandaraTujuan.negara}</p>
      <p>Nama Bandara: {bandaraTujuan.nama_bandara}</p>
      <h2>Maskapai</h2>
      <p>ID Maskapai: {maskapai.id_maskapai}</p>
      <p>Kode Maskapai: {maskapai.kode_maskapai}</p>
      <p>Nama Maskapai: {maskapai.nama_maskapai}</p>
      <p>Harga Tiket: {maskapai.harga_tiket}</p>

      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default PilihTiket;

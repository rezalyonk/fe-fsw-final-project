import { useRouter } from "next/router";

const Pemesanan = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    idPenerbanganPergi,
    idPenerbanganPulang,
    namaLengkap,
    namaKeluarga,
    nomorTelepon,
    email,
    kursi,
    jumlahPenumpang,
  } = router.query;

  const handleBayarClick = () => {
    router.push(`/pembayaran?id=${id}`);
  };

  return (
    <div>
      <h1>Detail Pemesanan</h1>
      <p>ID Penerbangan Pergi: {idPenerbanganPergi}</p>
      <p>ID Penerbangan Pulang: {idPenerbanganPulang}</p>
      <p>Nama Lengkap: {namaLengkap}</p>
      <p>Nama Keluarga: {namaKeluarga}</p>
      <p>Nomor Telepon: {nomorTelepon}</p>
      <p>Email: {email}</p>
      <p>Kursi: {kursi}</p>
      <p>Jumlah Penumpang: {jumlahPenumpang}</p>
      {/* Display other details */}
      {/* ... */}
      <button onClick={handleBayarClick}>Bayar</button>
      
    </div>
  );
};

export default Pemesanan;

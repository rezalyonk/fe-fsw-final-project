import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from './index.module.css'
import { MdFlightTakeoff,MdFlightLand } from "react-icons/md";
import Navbar from "@/components/Navbar";
import { TbArrowsRightLeft } from "react-icons/tb";

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
    <div className={styles.container}>
      <Navbar/>
      <h1 className={styles.judul}>Detail Pilih Penerbangan</h1>
      <div className={styles.con1}>
      <div className={styles.con2}>
      <div className={styles.card}>
      <h2 className={styles.h2}>Penerbangan Pergi</h2>
      <p>
        <div className={styles.maskapai}>
          ID: {departure.id_penerbangan}
          <br />
          Maskapai: {departure.maskapai.nama_maskapai}
          <br />
        </div>
        <div className={styles.cnt11}>
          <div className={styles.doble2}>
          <MdFlightTakeoff size={25} className={styles.icon}/>
            {departure.bandaraAwal.nama_bandara}
          <br />
            {departure.tanggal_berangkat}
          </div>
          <div className={styles.doble2}>
            <MdFlightLand size={25} className={styles.icon}/>
            {departure.bandaraTujuan.nama_bandara}
          <br />
            {departure.tanggal_kedatangan}
           <br />
          </div>

        </div>
        
        Harga Tiket: {departure.maskapai.harga_tiket}
      </p>
      </div></div>

      <div className={styles.icons}>
            <TbArrowsRightLeft size={30} className={styles.icon} />
      </div>


      <div className={styles.con2}>
      <div className={styles.card}>
      <h2 className={styles.h2}>Penerbangan Pulang</h2>
      <p>
        <div className={styles.maskapai}>
        ID: {returnFlight.id_penerbangan}
        <br/>
        Maskapai: {returnFlight.maskapai.nama_maskapai}
        <br /> 
        </div>
        <div className={styles.cnt11}>
          <div className={styles.doble2}>
          <MdFlightTakeoff size={25} className={styles.icon}/>
          {returnFlight.bandaraAwal.nama_bandara}
          <br />
          {returnFlight.tanggal_berangkat}
          </div>
          <div className={styles.doble2}>
            <MdFlightLand size={25} className={styles.icon}/>
          {returnFlight.bandaraTujuan.nama_bandara}
          <br />
          {returnFlight.tanggal_kedatangan}
           <br />
          </div>

        </div>
        
        Harga Tiket: {returnFlight.maskapai.harga_tiket}
      </p>
      </div></div>
      </div>
      <div className={styles.con2}>
      <button className={styles.btn} onClick={handleCheckout}>Checkout</button>
    </div></div>
  );
};

export default DetailPilihPenerbangan;

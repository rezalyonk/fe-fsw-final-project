import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './index.module.css'
import { MdFlightTakeoff,MdFlightLand } from "react-icons/md";
import Navbar from '@/components/Navbar';

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
    <div className={styles.container}>
      <Navbar/>
        <h1 className={styles.h1}>Detail Penerbangan</h1>
      <div className={styles.cnt1}>
        <img src={foto} alt="Flight" className={styles.foto} />
          <div className={styles.conmaskapai}>  
         <h2 className={styles.h2}>Maskapai</h2>
            <div className={styles.detail}>
              <p>Nama Maskapai: {maskapai.nama_maskapai}</p>
              <p>ID maskapai: {maskapai.id_maskapai}</p>
              <p>Kode maskapai: {maskapai.kode_maskapai}</p>
            </div>  
          </div>
          
          <div className={styles.conmaskapai}>
            <h2 className={styles.h2}>Keberangkatan</h2>
            <div className={styles.detail}>
              <p>ID Penerbangan: {id_penerbangan}</p>
                <div className={styles.doble}>
                  <p>Tanggal Berangkat <tb>{tanggal_berangkat}</tb></p>
                  <p>{id_bandara_asal}</p>
                </div>
            <div className={styles.doble}>
              <p>Tanggal Kedatangan {tanggal_kedatangan}</p>
               <p>{id_bandara_tujuan}</p>
            </div>
            </div>
          </div>
          <div className={styles.cnt11}>
            <div className={styles.doble2}>
              <MdFlightTakeoff className={styles.icon}/>
              <p>{jam_berangkat}.00</p>
              <div className={styles.bandara}>
              <p>{bandaraAwal.kota}</p>
              <p>{bandaraAwal.negara}</p>
              </div>
              <p>{bandaraAwal.nama_bandara}</p>
            </div>
            <div className={styles.doble2}>
              <MdFlightLand className={styles.icon}/>
              <p>{jam_kedatangan}.00</p>
              <div className={styles.bandara}>
                <p>{bandaraTujuan.kota}</p>
                <p>{bandaraTujuan.negara}</p>
              </div>
                <p>{bandaraTujuan.nama_bandara}</p>
            </div>
           
            
          </div>
 
       </div>
          <p className={styles.harga}>{maskapai.harga_tiket}</p>
        

         <button onClick={handleCheckout}className={styles.btn}>Checkout</button>
    </div>
  );
};

export default PilihTiket;

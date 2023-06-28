import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import styles from "./frame-card1.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const FrameCard1 = ({ monthYear }) => {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const accessToken = Cookies.get('accessToken');
        if (!accessToken) {
          window.location.href = '/login'; // Redirect to login page if user is not logged in
          return;
        }

        const response = await axios.get('/api/histori', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        setHistoryData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) {
    return <p>Mengambil data histori pemesanan...</p>;
  }

  const filteredHistory = historyData.filter(order => order.id.kode_booking);

  if (filteredHistory.length === 0) {
    return (
      <div className={styles.frameParent}>
        <div className={styles.illustrationCartShoppingLiParent}>
          <img
            className={styles.illustrationCartShoppingLi}
            alt=""
            src="/-illustration--cart-shopping-list--1@2x.png"
          />
          <div className={styles.oopsRiwayatPesananKosongWrapper}>
            <div className={styles.oopsRiwayatPesananContainer}>
              <p className={styles.oopsRiwayatPesanan}>
                Oops! Riwayat pesanan kosong!
              </p>
              <p className={styles.andaBelumMelakukan}>
                Anda belum melakukan pemesanan penerbangan
              </p>
            </div>
          </div>
        </div>
        <Button variant="success">Cari Penerbangan</Button>
      </div>
    );
  }

  return (
    <div>
      {filteredHistory.map((order, index) => (
        <div key={index} className={styles.framecard}>
          <div className={styles.month}>
            <div className={styles.title}>
              <b className={styles.monthYear}>{monthYear}</b>
            </div>
          </div>
          <div className={styles.card1}>
            <div className={styles.sectionContent}>
              <div className={styles.status}>
                <button className={styles.ticketStatus}>
                  <div className={styles.statusTiket}>{order.id.status_pembayaran}</div>
                </button>
              </div>
              <div className={styles.info}>
                <div className={styles.keberangkatan}>
                  <img
                    className={styles.iconWrapper}
                    alt=""
                    src="/icon-wrapper.svg"
                  />
                  <div className={styles.info1}>
                    <b className={styles.asal}>{order.tiket.bandaraAwal.kota}</b>
                    <div className={styles.tgl}>{order.tiket.tanggal_berangkat}</div>
                    <div className={styles.tgl}>{order.tiket.jam_berangkat}.00</div>
                  </div>
                </div>
                <div className={styles.estimasi}>
                  <div className={styles.durasiParent}>
                    <div className={styles.durasi}>
                      <div className={styles.tgl}>{order.tiket.selisih_jam} h</div>
                      <div className={styles.tgl}> {order.tiket.selisih_menit} m</div>
                    </div>
                    <img
                      className={styles.flighticon}
                      alt=""
                      src="/flighticon.svg"
                    />
                  </div>
                </div>
                <div className={styles.destination}>
                  <img
                    className={styles.iconWrapper}
                    alt=""
                    src="/icon-wrapper3.svg"
                  />
                  <div className={styles.info1}>
                    <b className={styles.tujuan}>{order.tiket.bandaraTujuan.kota}</b>
                    <div className={styles.tgl1}>
                      <p className={styles.p}>{order.tiket.tanggal_kedatangan}</p>
                      <p className={styles.p}>{order.tiket.jam_kedatangan}.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.info3}>
                <div className={styles.content}>
                  <div className={styles.label}>
                    <div className={styles.idNumber}>
                      <p className={styles.p}>
                        <b>{`Booking Code: `}</b>
                      </p>
                      <p className={styles.p}>{order.id.kode_booking}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.flight}>
                  <b className={styles.tujuan}>{order.totalHargaTiket}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FrameCard1;

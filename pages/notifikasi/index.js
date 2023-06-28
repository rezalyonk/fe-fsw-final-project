import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../components/header";
import styles from "./index.module.css";
import axios from 'axios';

const Notifikasi = () => {
  const router = useRouter();

  const onHomeButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        // Mengambil accessToken dari cookie
        const accessToken = document.cookie.replace(
          /(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/,
          '$1'
        );

        // Periksa apakah pengguna sudah login (accessToken ada)
        if (!accessToken) {
          // Jika pengguna belum login, arahkan ke laman login
          router.push('/login');
          return;
        }

        // Mengirim permintaan dengan menggunakan accessToken sebagai header Authorization
        const response = await axios.get('/api/notifikasi', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = response.data.data;
        setNotifications(data);
      } catch (error) {
        console.error('Failed to fetch notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className={styles.notifikasi}>
      <Header
        riwayatPemesanan="Notifikasi"
        prefixIcon="/prefix-icon.svg"
        onHomeButtonClick={onHomeButtonClick}
      />
      {notifications.map(notification => (
      <div className={styles.detailouter} key={notification.id}>
        <div className={styles.frameinnder}>
          <div className={styles.data}>
            <div className={styles.notif}>
              <div className={styles.konten}>
                <div className={styles.listNotif}>
                  <div className={styles.list}>
                    <div className={styles.divider} />
                    <div className={styles.notif1}>
                      <img
                        className={styles.materialSymbolscircleNotifiIcon}
                        alt=""
                        src="/materialsymbolscirclenotificationssharp.svg"
                      />
                      <div className={styles.text}>
                        <div className={styles.ket}>
                          <div className={styles.promosi}>{notification.judul}</div>
                          <div className={styles.maret1404}>
                          {notification.tanggal}, {notification.jam}
                          </div>
                          <div className={styles.ketChild} />
                        </div>
                        <div className={styles.terdapatPerubahanPada}>
                        {notification.pesan}
                        </div>
                        <div className={styles.syaratDanKetentuan}>
                        {notification.pesanTambahan && <p>{notification.pesanTambahan}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Notifikasi;

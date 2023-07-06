import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../components/header";
import styles from "./index.module.css";
import axios from "axios";
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
          "$1"
        );

        // Periksa apakah pengguna sudah login (accessToken ada)
        if (!accessToken) {
          // Jika pengguna belum login, arahkan ke laman login
          router.push("/login");
          return;
        }

        // Mengirim permintaan dengan menggunakan accessToken sebagai header Authorization
        const response = await axios.get("/api/notifikasi", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = response.data.data;
        setNotifications(data);
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
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
      {notifications.map((notification) => (
        <div className={styles.detailouter} key={notification.id}>
          <div className={styles.frameinnder}>
            <div className={styles.data}>
              <div className={styles.konten}>
                <div className={styles.divider} />
                <div className={styles.konten}>
                  <div className={styles.notifikasiheader}>
                    <div className={styles.iconnotifikasi}>
                      <div className={styles.materialSymbolscircleNotif}>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/vector1.svg"
                        />
                      </div>
                      <div className={styles.notifikasi1}>
                        {notification.judul}
                      </div>
                    </div>
                    <div className={styles.datenotifikasi}>
                      <div className={styles.notifikasi1}>
                        {notification.tanggal}, {notification.jam}
                      </div>
                      <div
                        className={`${styles.datenotifikasiChild} ${
                          notification.judul === "Pembayaran Berhasil"
                            ? styles.hijau
                            : notification.judul === "Pemesanan Berhasil"
                            ? styles.merah
                            : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.terdapatPerubahanPadaContainer}>
                      <p className={styles.terdapatPerubahanPada}>
                        {notification.pesan}
                      </p>
                      <p className={styles.terdapatPerubahanPada}>
                        Cek jadwal perjalanan Anda disini!
                      </p>
                    </div>
                    <div className={styles.syaratDanKetentuan}>
                      {notification.pesanTambahan && (
                        <p>{notification.pesanTambahan}</p>
                      )}
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
//comment

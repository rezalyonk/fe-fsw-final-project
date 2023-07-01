import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";
const PembayaranBerhasil = () => {
  const router = useRouter();

  const onBrandButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.pembayaranberhasil}>
      <div className={styles.header}>
        <div className={styles.selesai}>
          <b>
            <span className={styles.span}>{`>   `}</span>
            <span>Selesai</span>
          </b>
        </div>
      </div>
      <div className={styles.itemParent}>
        <div className={styles.item}>
          <div className={styles.label}>
            <div className={styles.detail}>
              Terimakasih atas pembayaran transaksi
            </div>
          </div>
        </div>
        <div className={styles.illustrationCartShoppingLiParent}>
          <img
            className={styles.illustrationCartShoppingLi}
            alt=""
            src="/-illustration--cart-shopping-list--1@2x.png"
          />
          <div className={styles.selamatTransaksiPembayaranWrapper}>
            <div className={styles.selamatTransaksiPembayaranContainer}>
              <p className={styles.selamat}>Selamat!</p>
              <p className={styles.transaksiPembayaranTiket}>
                Transaksi Pembayaran Tiket sukses!
              </p>
            </div>
          </div>
          <button className={styles.brandButton} onClick={onBrandButtonClick}>
            <div className={styles.ubahPencarian}>Cari Penerbangan Lain</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PembayaranBerhasil;

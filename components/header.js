import { useState, useRef, useCallback } from "react";
import ModalSearch from "./modal-search";
import PortalPopup from "./portal-popup";
import { useRouter } from "next/router";
import styles from "./header.module.css";
const Header = () => {
  const searchButtonRef = useRef(null);
  const [isModalSearchPopupOpen, setModalSearchPopupOpen] = useState(false);
  const router = useRouter();

  const openModalSearchPopup = useCallback(() => {
    setModalSearchPopupOpen(true);
  }, []);

  const closeModalSearchPopup = useCallback(() => {
    setModalSearchPopupOpen(false);
  }, []);

  const onHomeButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <>
      <div className={styles.riwayatPemesananParent}>
        <b className={styles.riwayatPemesanan}>Riwayat Pemesanan</b>
        <div className={styles.editSearch}>
          <div className={styles.listItem}>
            <button className={styles.homebutton} onClick={onHomeButtonClick}>
              <img
                className={styles.fiarrowLeftIcon}
                alt=""
                src="/fiarrowleft.svg"
              />
              <div className={styles.textContent}>
                <div className={styles.label}>
                  <div className={styles.detail}>Beranda</div>
                </div>
              </div>
            </button>
          </div>
          <div className={styles.listItem1}>
            <button className={styles.chip}>
              <div className={styles.label}>
                <div className={styles.prefixWrapper}>
                  <img
                    className={styles.prefixIcon}
                    alt=""
                    src="/prefix-icon.svg"
                  />
                </div>
                <div className={styles.chipValue}>
                  <div className={styles.filter}>Filter</div>
                </div>
              </div>
            </button>
            <button
              className={styles.searchbutton}
              ref={searchButtonRef}
              onClick={openModalSearchPopup}
            >
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </button>
          </div>
        </div>
      </div>
      {isModalSearchPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom right"
          relativeLayerRef={searchButtonRef}
          onOutsideClick={closeModalSearchPopup}
        >
          <ModalSearch onClose={closeModalSearchPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;

import styles from "./modal-search.module.css";
const ModalSearch = ({ onClose }) => {
  return (
    <div className={styles.modalsearch}>
      <div className={styles.header}>
        <div className={styles.searchField}>
          <input
            className={styles.searchInput}
            type="search"
            placeholder="Masukkan Nomor Penerbangan"
          />
        </div>
        <button className={styles.searchIcon}>
          <img className={styles.liveAreaIcon} alt="" src="/live-area.svg" />
        </button>
      </div>
      <div className={styles.sheetContent}>
        <div className={styles.placefull}>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.title}>Pencarian terkini</div>
              <button className={styles.buttonbrand}>
                <div className={styles.button}>
                  <div className={styles.delete}>Hapus</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSearch;

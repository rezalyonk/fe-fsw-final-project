import styles from "./akun-container.module.css";
import { useCallback } from "react";
import { useRouter } from "next/router";

const AkunContainer = () => {
  const router = useRouter();
  const onHomeButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.framenav}>
      <div className={styles.innernav}>
        <b className={styles.akun}>Akun</b>
        <div className={styles.list}>
          <div className={styles.editSearch}>
            <div className={styles.listItem}>
              <button className={styles.homrbutton}>
                <img
                  className={styles.fiarrowLeftIcon}
                  alt=""
                  src="/fiarrowleft.svg"
                />
                <div className={styles.textContent}>
                  <div className={styles.label}>
                    <div className={styles.detail} onClick={onHomeButtonClick}>
                      Beranda
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AkunContainer;

import AkunContainer from "../../components/akun-container";
import ProfileContainer from "../../components/profile-container";
import styles from "./index.module.css";
import { useState, useEffect } from "react";

const DataAkun = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const userDataSession = sessionStorage.getItem("userData");
    if (userDataSession) {
      setUserData(JSON.parse(userDataSession));
    }
  }, []);

  if (!userData) {
    return null;
  }
  return (
    <div className={styles.dataakun}>
      <AkunContainer />
      <div className={styles.akunParent}>
        <ProfileContainer
          ubahProfilBackgroundColor="transparent"
          settingAkunBackgroundColor="#bddcaf"
        />
        <div className={styles.sectionPemesan}>
          <div className={styles.card1}>
            <div className={styles.wrapperContainer}>
              <div className={styles.info}>
                <b className={styles.ubahDataProfil}>{`Data Profil `}</b>
                <div className={styles.data}>
                  <div className={styles.listItem}>
                    <div className={styles.text}>
                      <div className={styles.label}>
                        <div className={styles.textPenumpang}>Data Diri</div>
                      </div>
                    </div>
                  </div>
                  <form className={styles.info1}>
                    <div className={styles.username}>
                      <div className={styles.label1}>
                        <div className={styles.alamat}>
                          <b className={styles.nama}>{`Username :   `}</b>
                        </div>
                        <div className={styles.alamt}>
                          <b className={styles.username4}>
                            {userData.username}
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className={styles.username}>
                      <div className={styles.label1}>
                        <div className={styles.alamat}>
                          <b className={styles.nama}>{`Nama Lengkap : `}</b>
                        </div>
                        <div className={styles.alamt}>
                          <b className={styles.username4}>
                            {userData.nama_lengkap}
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className={styles.username}>
                      <div className={styles.label1}>
                        <div className={styles.alamat}>
                          <b className={styles.nama}>{`Alamat : `}</b>
                        </div>
                        <div className={styles.alamt}>
                          <b className={styles.username4}>{userData.alamat}</b>
                        </div>
                      </div>
                    </div>
                    <div className={styles.username}>
                      <div className={styles.label1}>
                        <div className={styles.alamat}>
                          <b className={styles.nama}>{`Telepon : `}</b>
                        </div>
                        <div className={styles.alamt}>
                          <b className={styles.username4}>
                            {userData.nomor_telepon}
                          </b>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAkun;

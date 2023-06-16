import styles from "../styles/404.module.css";
import Head from "next/head";

const NotFoundPage = () => {
  return (
    <div>
        <Head>
    <title>404 NotFoundPage</title>
    </Head>
    <div className={styles.container}>
        <div className={styles.mars}></div>
        <img src="https://assets.codepen.io/1538474/meteor.svg" className={styles.jet} />
        <img src="https://assets.codepen.io/1538474/404.svg" className={styles.logo404} />
     
        <h2 className={styles.title}>Oh tidak!!</h2>
        <p className={styles.subtitle}>Anda tersesat di negeri 404.</p>
        <p className={styles.subtitle}>Tolong kembalilah sebelum tikus komputer mengambil makan siang!.</p>
        <div className={styles.btnBackContainer}>
            <a className={styles.btnback} href="https://flyticket.netlify.app">Balik yuk!</a>
        </div>
        <img src="https://assets.codepen.io/1538474/astronaut.svg" className={styles.astronaut} />
        <img src="https://assets.codepen.io/1538474/spaceship.svg" className={styles.spaceship} />
    </div>
    </div>
    
  );
};

export default NotFoundPage;

import React from 'react';
import styles from './index.module.css'
import {FcClock} from 'react-icons/fc'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>About</h1>
      <p className={styles.p}>Selamat datang di situs kami, tempat terbaik untuk memesan tiket pesawat secara online! Kami adalah platform yang didedikasikan untuk menyediakan pengalaman pemesanan tiket pesawat yang cepat, mudah, dan handal.</p>
      <div className={styles.box}>
        <FcClock className={styles.icon}/>
        <p className={styles.p}>Kami memahami betapa berharganya waktu Anda dan pentingnya memperoleh tiket pesawat dengan harga terbaik. Oleh karena itu, kami bekerja sama dengan berbagai maskapai penerbangan terkemuka untuk menyediakan beragam pilihan penerbangan dan menawarkan harga yang kompetitif.</p>

      </div>
     
      <p className={styles.p}>Dengan menggunakan situs kami, Anda dapat mencari, membandingkan, dan memesan tiket pesawat dengan cepat dan efisien. Tim ahli kami selalu siap membantu Anda dalam memilih opsi penerbangan terbaik sesuai dengan kebutuhan dan preferensi Anda.</p>
      <p className={styles.p}>Kenyamanan dan kepuasan pelanggan adalah prioritas utama kami. Kami menyediakan layanan pelanggan yang responsif dan ramah, siap menjawab pertanyaan Anda dan membantu menyelesaikan masalah yang mungkin Anda hadapi selama proses pemesanan.</p>
      <p className={styles.p}>Terima kasih telah memilih kami sebagai mitra perjalanan Anda. Kami berharap Anda menikmati pengalaman pemesanan tiket pesawat yang menyenangkan dan lancar di situs kami. Nikmati perjalanan Anda!</p>
    </div>
  );
};

export default AboutPage;

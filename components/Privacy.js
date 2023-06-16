import React from 'react';
import Head from "next/head";
import  styles from '../styles/privacy.module.css';

const PolicyPage = () => {
  return (
    <div className={styles.container}>
    <Head>
    <title>Privacy and Police</title>
    </Head>
    <div>
      <h1 className={styles.judul}>Police and Privacy</h1>
      <h2 className= {styles.h2}>Kebijakan Privasi</h2>
      <p className={styles.paragraf}>Kami menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi yang Anda berikan saat menggunakan layanan kami. Kami menggunakan informasi ini hanya untuk keperluan transaksi dan untuk meningkatkan pengalaman pengguna Anda. Informasi pribadi Anda tidak akan dibagikan kepada pihak ketiga tanpa izin Anda.</p>
    </div>
    <div>
      <h2 className= {styles.h2}>Pengumpulan Informasi</h2>
      <p className={styles.paragraf}>Ketika Anda memesan tiket pesawat melalui platform kami, kami akan mengumpulkan informasi pribadi seperti nama, alamat email, nomor telepon, dan informasi pembayaran. Informasi ini digunakan untuk memproses pesanan Anda dan mengirimkan tiket pesawat yang dipesan.</p>
    </div>
    <div>
      <h2 className= {styles.h2}>Penggunaan Informasi</h2>
      <p className={styles.paragraf}>Informasi pribadi yang Anda berikan akan digunakan untuk:        
      Memproses dan mengonfirmasi pesanan tiket pesawat yang Anda lakukan.
      Mengirimkan tiket pesawat ke alamat email yang Anda berikan.
      Menghubungi Anda jika ada perubahan atau pembaruan terkait penerbangan yang Anda pesan.
      Menyediakan layanan pelanggan yang efektif dan respon terhadap pertanyaan atau masalah yang mungkin Anda miliki.
      Mengumpulkan umpan balik dan memperbaiki layanan kami.</p>
    </div>
    <div>
      <h2 className= {styles.h2}>Keamanan Informasi</h2>
      <p className={styles.paragraf}>Kami menggunakan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi informasi pribadi Anda dari akses yang tidak sah, pengungkapan, perubahan, atau penghancuran. Kami menyimpan informasi pribadi Anda hanya selama diperlukan untuk memenuhi tujuan yang dijelaskan di atas.</p>
    </div>
    <div>
      <h2 className= {styles.h2}>Pihak Ketiga</h2>
      <p className={styles.paragraf}>Kami dapat menggunakan pihak ketiga dalam rangka memproses pembayaran, mengirimkan tiket pesawat, atau menyediakan dukungan teknis. Namun, kami memastikan bahwa pihak ketiga tersebut mematuhi standar keamanan dan privasi yang tinggi.</p>
    </div>
    <div>
      <h2 className= {styles.h2}>Persetujuan</h2>
      <p className={styles.paragraf}>Dengan menggunakan layanan kami dan memberikan informasi pribadi Anda, Anda secara otomatis menyetujui kebijakan privasi yang kami terapkan.</p>
    </div>
    </div>
  );
};

export default PolicyPage;

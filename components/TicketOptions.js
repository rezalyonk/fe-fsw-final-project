import data from "../public/data.json";
import styles from "../styles/pilih.module.css";
import React, { useCallback, useState } from 'react';


const Destinations = () => {
  
  return (
    <div className={styles.destinationcontainer}>
      <div className={styles.destinationgrid}>
        {data.data.map(destination => (
          <div key={destination.id} className={styles.destinationcard}>
            <img src={destination.foto} alt={destination.bandaraTujuan.nama_bandara} />
            <div className={styles.destinationinfo}>
              <h2>{destination.bandaraAwal.nama_bandara} - {destination.bandaraTujuan.nama_bandara}</h2>
              <p>Tanggal Berangkat: {destination.tanggal_berangkat}</p>
              <p>Tanggal Kedatangan: {destination.tanggal_kedatangan}</p>
              <p>Harga Tiket: {destination.maskapai.harga_tiket}</p>
              <button className={styles.button} type="submit">Select</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;

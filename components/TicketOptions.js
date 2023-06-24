import styles from "../styles/pilih.module.css";
import React, { useCallback, useState, useEffect } from 'react';
import axios from 'axios';


const Destinations = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://be-fsw-final-project-production-55d6.up.railway.app/v1/api/home`
        );
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  });
  return (
    <div className={styles.destinationcontainer}>
      <div className={styles.destinationgrid}>
        {data.map(destination => (
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

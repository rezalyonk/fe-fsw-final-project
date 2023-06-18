import React from 'react';
import styles from '../styles/detail.module.css';

const FlightCard = ({ origin,maskapai, destination, flightNumber, departureTime, arrivalTime, passengerName }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.label}>Flight Number : </span>
        <span className={styles.flightNumber}>{flightNumber}</span>
      </div>
      <div className={styles.info}>
      <div>
          <span className={styles.label}>Nama Pemesan : </span>
          <span className={styles.text}>{passengerName}</span>
        </div>
        <div>
          <span className={styles.label}>Bandara Asal : </span>
          <span className={styles.text}>{origin}</span>
        </div>
        <div>
          <span className={styles.label}>Bandara Tujuan : </span>
          <span className={styles.text}>{destination}</span>
        </div>
        <div>
          <span className={styles.label}>Maskapai : </span>
          <span className={styles.text}>{maskapai}</span>
        </div>
        <div>
          <span className={styles.label}>Keberangkatan : </span>
          <span className={styles.text}>{departureTime}</span>
        </div>
        <div>
          <span className={styles.label}>Kedatangan : </span>
          <span className={styles.text}>{arrivalTime}</span>
        </div>
        
      </div>
    </div>
  );
};

export default FlightCard;

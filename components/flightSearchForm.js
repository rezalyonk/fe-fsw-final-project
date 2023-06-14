import React, { useState } from 'react';
import { MdFlightTakeoff } from "react-icons/md";
import { TbArrowsRightLeft } from "react-icons/tb";
import { MdOutlineDateRange } from "react-icons/md";
import { RiWheelchairFill } from "react-icons/ri";
import styles from '../pages/booking/index.module.css';
import classNames from 'classnames';

const FlightSearchForm = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passenger, setPassenger] = useState('');
  const [seatClass, setSeatClass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lakukan sesuatu dengan data pencarian
    console.log('From:', from);
    console.log('To:', to);
    console.log('Departure Date:', departureDate);
    console.log('Return Date:', returnDate);
    console.log('Passenger:', passenger);
    console.log('Seat Class:', seatClass);

    // Reset form setelah submit
    setFrom('');
    setTo('');
    setDepartureDate('');
    setReturnDate('');
    setPassenger('');
    setSeatClass('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.flightsearchform}>
      <h1 className={styles.pilih}>Pilih Jadwal Penerbangan spesial di <span className='text-green-600'>Tiketku!</span></h1>
      <div className={styles.tx}>
      <div className={styles.formgrouptextkr}>
      <MdFlightTakeoff className={styles.iconpl1}/>
      <div className={styles.f}>
        <label htmlFor="from">From: </label>
        <input className={styles.inputfrom}
          type="text"
          id="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        </div>
      </div>
      <div >
      <TbArrowsRightLeft className={styles.iconrl}/>
      </div>
      <div className={styles.formgrouptextkn}>
      <MdFlightTakeoff className={styles.iconpl2}/>
      <div className={styles.t}>
        <label htmlFor="to">To: </label>
        <input className={styles.inputto}
          type="text"
          id="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        </div>
      </div>
      </div>
      <div className={styles.dtpl}>
      <div className={styles.dt}>
      <MdOutlineDateRange className={styles.icondate}/>
      <label htmlFor="date" className={styles.d}>Date:</label>
      <div className={styles.formdtkr}>
        <label htmlFor="departureDate">Departure</label>
        <input
          type="date"
          id="departureDate"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </div>
      <div className={styles.formdtkn}>
        <label htmlFor="returnDate">Return</label>
        <input
          type="date"
          id="returnDate"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
      </div>
      </div>
      <div className={styles.pl}>
      <RiWheelchairFill className={styles.iconps}/>
      <label htmlFor="to">To:</label>
      <div className={styles.formpassenger}>
        <label htmlFor="passenger">Passenger:</label>
        <input
          type="number"
          id="passenger"
          value={passenger}
          onChange={(e) => setPassenger(e.target.value)}
        />
      </div>
      <div className={styles.formseatclass}>
        <label htmlFor="seatClass">Seat Class:</label>
        <select
          id="seatClass"
          value={seatClass}
          onChange={(e) => setSeatClass(e.target.value)}
        >
          <option value="">Select Seat Class</option>
          <option value="Economy">Economy</option>
          <option value="Economy">Premium Economy</option>
          <option value="Business">Business</option>
          <option value="First Class">First Class</option>
        </select>
      </div>
      </div>
      </div>
      <button type="submit" className={styles.btn}>Cari Penerbangan</button>
    </form>
  );
};

export default FlightSearchForm;
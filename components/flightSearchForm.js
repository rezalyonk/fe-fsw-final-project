import React, { use, useCallback, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { MdFlightTakeoff } from "react-icons/md";
import { TbArrowsRightLeft } from "react-icons/tb";
import { MdOutlineDateRange } from "react-icons/md";
import { RiWheelchairFill } from "react-icons/ri";
import styles from "../pages/booking/index.module.css";
import classNames from "classnames";
import axios from "axios";
import { CiCircleChevDown } from "react-icons/ci";
import { RiSuitcase2Line } from "react-icons/ri";
import style from "./flightSearchForm.module.css";

const FlightSearchForm = () => {
  const router = useRouter();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passenger, setPassenger] = useState("");
  const [seatClass, setSeatClass] = useState("");
  const [responseData, setResponseData] = useState("");
  const [selectedTicketId, setSelectedTicketId] = useState("");

  const onpilihTiket = useCallback(() => {
    // router.push("/pilihtiket");
  }, [router]);

  const handleSelectTicket = useCallback(
    (ticketId) => {
      setSelectedTicketId(ticketId);
      router.push(`/pilihTiket?id_tiket=${ticketId}`);
    },
    [router]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formatDate = (inputDate) => {
      const dateObj = new Date(inputDate);
      const day = String(dateObj.getDate()).padStart(2, "0");
      const month = String(dateObj.getMonth() + 1).padStart(2, "0");
      const year = String(dateObj.getFullYear());
      return `${day}-${month}-${year}`;
    };

    const capitalizeSecondWord = (string) => {
      const words = string.split(" ");
      if (words.length >= 2) {
        const capitalizedWords = words.map((word, index) => {
          if (index === 1) {
            return word.charAt(0).toUpperCase() + word.slice(1);
          }
          return word;
        });
        return capitalizedWords.join(" ");
      }
      return string;
    };

    const addPercent20ToSpaces = (string) => {
      return string.replace(/ /g, "%20");
    };

    const formattedFrom = capitalizeSecondWord(from);
    const formattedTo = capitalizeSecondWord(to);

    const formattedFromWithPercent20 = addPercent20ToSpaces(formattedFrom);
    const formattedToWithPercent20 = addPercent20ToSpaces(formattedTo);

    // Lakukan sesuatu dengan data pencarian
    console.log("From:", formattedFromWithPercent20);
    console.log("To:", formattedToWithPercent20);
    console.log("Departure Date:", formatDate(departureDate));
    console.log("Return Date:", returnDate);
    console.log("Passenger:", passenger);
    console.log("Seat Class:", seatClass);

    try {
      const response = await axios.get(
        `https://mang-eak-production.up.railway.app/v1/api/tiket/${formatDate(
          departureDate
        )}/${formattedFromWithPercent20}/${formattedToWithPercent20}/harga-terendah`
      );
      // console.log('API response:', response.data);
      setResponseData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    // Reset form setelah submit
    setFrom("");
    setTo("");
    setDepartureDate("");
    setReturnDate("");
    setPassenger("");
    setSeatClass("");

    console.log(responseData);
  };

  useEffect(() => {
    // Auto capitalize first letter of 'from' input
    if (from) {
      setFrom(from.charAt(0).toUpperCase() + from.slice(1));
    }
  }, [from]);

  useEffect(() => {
    // Auto capitalize first letter of 'to' input
    if (to) {
      setTo(to.charAt(0).toUpperCase() + to.slice(1));
    }
  }, [to]);

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.flightsearchform}>
        <h1 className={styles.pilih}>
          Pilih Jadwal Penerbangan spesial di{" "}
          <span className="text-green-600">Tiketku!</span>
        </h1>
        <div className={styles.tx}>
          <div className={styles.formgrouptextkr}>
            <MdFlightTakeoff className={styles.iconpl1} />
            <div className={styles.f}>
              <label htmlFor="from">From: </label>
              <input
                className={styles.inputfrom}
                type="text"
                id="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
          </div>
          <div>
            <TbArrowsRightLeft className={styles.iconrl} />
          </div>
          <div className={styles.formgrouptextkn}>
            <MdFlightTakeoff className={styles.iconpl2} />
            <div className={styles.t}>
              <label htmlFor="to">To: </label>
              <input
                className={styles.inputto}
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
            <MdOutlineDateRange className={styles.icondate} />
            <label htmlFor="date" className={styles.d}>
              Date:
            </label>
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
            <div className={styles.box}>
              <input className={styles.check} type="checkbox" id="switch" />
              <label className={styles.lb} htmlFor="switch"></label>
            </div>
          </div>
          <div className={styles.pl}>
            <RiWheelchairFill className={styles.iconps} />
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
        <button type="submit" className={styles.btn} onClick={onpilihTiket}>
          Cari Penerbangan
        </button>
      </form>
      {responseData.success && (
        <div className={style.frm}>
          {responseData.data.map((flight, index) => (
            <div key={index}>
              <div className={style.airline}>
                <img
                  className={style.iconthumbnail}
                  src="/Thumbnail.png"
                  alt="Thumbnail"
                />
                <h1 className={style.testh1}>
                  {flight.airline.nama_maskapai} -{" "}
                  {flight.airline.tipe_maskapai}
                </h1>
                <CiCircleChevDown className={style.ccld} />
              </div>
              <div className={style.info}>
                <div className={style.br}>
                  <p className={style.p1}>{flight.jam_berangkat}</p>
                  <p className={style.p2}>{flight.bandaraAwal.kota}</p>
                </div>
                <div className={style.br}>
                  <p className={style.p1}>1H 30m</p>
                  <p className={style.p2}>Direct</p>
                </div>
                <div className={style.br}>
                  <p className={style.p1}>{flight.jam_kedatangan}</p>
                  <p className={style.p2}>{flight.bandaraTujuan.kota}</p>
                </div>
                <RiSuitcase2Line className={style.kpr} />
                <div className={style.hrg}>
                  <p className={style.idr}>Rp. {flight.airline.harga_tiket}</p>
                  <button
                    type="button"
                    className={style.plh}
                    onClick={() => handleSelectTicket(flight.id)} // Pass the ticket ID to the handleSelectTicket function
                  >
                    Pilih
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlightSearchForm;

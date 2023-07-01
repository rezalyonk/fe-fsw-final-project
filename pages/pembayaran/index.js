import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import axios from "axios";

const Pembayaran = () => {
  const router = useRouter();
  const [Id, setId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Periksa apakah ada ID yang diberikan di URL
    if (!router.query.id) {
      router.push("/datadiri");
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Lakukan validasi input
    if (!cardNumber || !cardName || !cvv || !expiryDate) {
      setErrorMessage("Mohon lengkapi semua field");
      return;
    }

    // Kirim data pembayaran ke server
    const id = router.query.id; // Mengambil nilai id dari URL
    const data = {
      id,
      card_number: cardNumber,
      card_name: cardName,
      cvv,
      expiry_date: expiryDate,
    };

    try {
      // Ganti `YOUR_API_ENDPOINT` dengan URL endpoint `/api/pembayaran`
      const response = await fetch("/api/pembayaran", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.redirected) {
        // Jika berhasil, akan diarahkan ke laman selesai
        router.push("/pembayaran-selesai");
      } else {
        // Jika gagal, periksa query parameter error dan tampilkan pesan error
        const queryParams = new URLSearchParams(window.location.search);
        if (queryParams.get("error")) {
          setErrorMessage("Pembayaran gagal");
        }
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Terjadi kesalahan");
    }
  };
  return (
    <div className={styles.pembayaran}>
      <div className={styles.header}>
        <b className={styles.isiDataDiriContainer}>
          <span>{`Isi Data Diri   `}</span>
          <span className={styles.span}>{`>   `}</span>
          <span>Bayar</span>
          <span className={styles.span}>{`    >   Selesai`}</span>
        </b>
      </div>
      <form className={styles.dataWrapper} onSubmit={handleSubmit}>
        <div className={styles.data}>
          <main className={styles.info}>
            <b
              className={styles.isiDataDiriContainer}
            >{`Isi Data Pembayaran `}</b>
            <div className={styles.framecard}>
              <Accordion className={styles.accordionitemb}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Credit Card</Accordion.Header>
                  <Accordion.Body>
                    <div className={styles.cardDetails}>
                      <div className={styles.paymentOptions}>
                        <img
                          className={styles.mastercardLogoIcon}
                          alt=""
                          src="/mastercard-logo.svg"
                        />
                        <img
                          className={styles.visaLogoIcon}
                          alt=""
                          src="/visa-logo.svg"
                        />
                        <img
                          className={styles.amexLogoIcon}
                          alt=""
                          src="/amex-logo.svg"
                        />
                        <img
                          className={styles.amexLogoIcon}
                          alt=""
                          src="/paypal-logo.svg"
                        />
                      </div>
                      <div className={styles.inputnumberParent}>
                        <div className={styles.inputnumber}>
                          <div className={styles.cardNumber}>Card number</div>
                          <div className={styles.framecardnumber}>
                            <input
                              className={styles.framecardnumberChild}
                              type="text"
                              placeholder="4480 0000 0000 0000"
                              value={cardNumber}
                              onChange={(e) => setCardNumber(e.target.value)}
                              required
                            />
                            <div className={styles.framecardnumberItem} />
                          </div>
                        </div>
                        <div className={styles.inputnumber}>
                          <div className={styles.cardNumber}>
                            Card holder name
                          </div>
                          <input
                            className={styles.inputcardname}
                            type="text"
                            placeholder="John Doe"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            required
                          />
                          <div className={styles.framecardnumberItem} />
                        </div>
                        <div className={styles.inputdate}>
                          <div className={styles.cvvParent}>
                            <div className={styles.cardNumber}>CVV</div>
                            <div className={styles.framecardnumber}>
                              <input
                                className={styles.inputcvv}
                                type="text"
                                placeholder="000"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                required
                              />
                              <div className={styles.framecardnumberItem} />
                            </div>
                          </div>
                          <div className={styles.cvvParent}>
                            <div className={styles.cardNumber}>Expiry date</div>
                            <div className={styles.framecardnumber}>
                              <input
                                className={styles.inputcvv}
                                type="text"
                                placeholder="07/24"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                                required
                              />
                              <div className={styles.framecardnumberItem} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <button className={styles.buttonbayar} type="submit">
                <div className={styles.pilih}>Bayar</div>
              </button>
              {errorMessage && (
                <p className={styles.errorMessage}>{errorMessage}</p>
              )}
            </div>
          </main>
        </div>
      </form>
    </div>
  );
};

export default Pembayaran;

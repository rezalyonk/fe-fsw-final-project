import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../../components/header";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Dropdown, DropdownButton, Form } from "react-bootstrap";
import { useRef } from "react";

const HistoryPage1 = () => {
  const router = useRouter();

  const onHomeButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [ticketStatus, setTicketStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Tambahkan ref ke elemen deskripsi
  const deskripsiRef = useRef(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const accessToken = Cookies.get("accessToken");
        if (!accessToken) {
          window.location.href = "/login"; // Redirect to login page if user is not logged in
          return;
        }

        const response = await axios.get("/api/histori", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setHistoryData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) {
    return <p>Mengambil data histori pemesanan...</p>;
  }

  const filteredHistory = historyData.filter((order) => {
    if (ticketStatus === "all") {
      return order.order.kode_booking.includes(searchQuery); // Tambahkan kondisi pencarian berdasarkan kode_booking
    } else {
      return (
        order.order.status_pembayaran === ticketStatus &&
        order.order.kode_booking.includes(searchQuery) // Tambahkan kondisi pencarian berdasarkan kode_booking
      );
    }
  });
  // Function to handle search query change
  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (filteredHistory.length === 0) {
    return (
      <div>
        <>
          <div className={styles.riwayatPemesananParent}>
            <b className={styles.riwayatPemesanan}>Riwayat Pemesanan</b>
            <div className={styles.editSearch}>
              <div className={styles.listItemHeader}>
                <button
                  className={styles.homebutton}
                  onClick={onHomeButtonClick}
                >
                  <img
                    className={styles.fiarrowLeftIcon}
                    alt=""
                    src="/fiarrowleft.svg"
                  />
                  <div className={styles.textContentHeader}>
                    <div className={styles.labelHeader}>
                      <div className={styles.detailHeader}>Beranda</div>
                    </div>
                  </div>
                </button>
              </div>
              <div className={styles.listItem1}>
                <Form.Group
                  controlId="searchForm"
                  className={styles.searchForm}
                >
                  <Form.Control
                    type="text"
                    placeholder="Cari kode"
                    value={searchQuery}
                    onChange={handleSearchQueryChange}
                  />
                </Form.Group>
              </div>
            </div>
          </div>
        </>

        <div className={styles.frameParent}>
          <div className={styles.illustrationCartShoppingLiParent}>
            <img
              className={styles.illustrationCartShoppingLi}
              alt=""
              src="/-illustration--cart-shopping-list--1@2x.png"
            />
            <div className={styles.oopsRiwayatPesananKosongWrapper}>
              <div className={styles.oopsRiwayatPesananContainer}>
                <p className={styles.oopsRiwayatPesanan}>
                  Oops! Riwayat pesanan kosong!
                </p>
                <p className={styles.andaBelumMelakukan}>
                  Anda belum melakukan pemesanan penerbangan
                </p>
              </div>
            </div>
          </div>
          <Button variant="success">Cari Penerbangan</Button>
        </div>
      </div>
    );
  }

  const handleTicketClick = (order) => {
    setSelectedOrder(order);
    // Arahkan scroll ke elemen deskripsi
    deskripsiRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Function to handle the "Bayar" button click
  const handleBayarClick = () => {
    // Check if the selectedOrder exists and its ticketStatus is "unpaid"
    if (selectedOrder && selectedOrder.order.status_pembayaran === "unpaid") {
      // Redirect to the "/pembayaran" page with the ID from the server response
      router.push(`/pembayaran?id=${selectedOrder.order.id}`);
    }
  };

  // Function to handle ticket status change
  const handleTicketStatusChange = (status) => {
    setTicketStatus(status);
  };

  return (
    <div className={styles.historyPage}>
      <>
        <div className={styles.riwayatPemesananParent}>
          <b className={styles.riwayatPemesanan}>Riwayat Pemesanan</b>
          <div className={styles.editSearch}>
            <div className={styles.listItemHeader}>
              <button className={styles.homebutton} onClick={onHomeButtonClick}>
                <img
                  className={styles.fiarrowLeftIcon}
                  alt=""
                  src="/fiarrowleft.svg"
                />
                <div className={styles.textContentHeader}>
                  <div className={styles.labelHeader}>
                    <div className={styles.detailHeader}>Beranda</div>
                  </div>
                </div>
              </button>
            </div>
            <div className={styles.listItem1}>
              <Form.Group controlId="searchForm" className={styles.searchForm}>
                <Form.Control
                  type="text"
                  placeholder="Cari kode"
                  value={searchQuery}
                  onChange={handleSearchQueryChange}
                />
              </Form.Group>
            </div>
          </div>
        </div>
      </>
      <DropdownButton
        title={`Filter: ${ticketStatus}`}
        onSelect={handleTicketStatusChange}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
        <Dropdown.Item eventKey="all">Semua</Dropdown.Item>
        <Dropdown.Item eventKey="unpaid">Belum Dibayar</Dropdown.Item>
        <Dropdown.Item eventKey="paid">Sudah Dibayar</Dropdown.Item>
      </DropdownButton>

      <div className={styles.detailouter}>
        <div className={styles.frameinnder}>
          <div>
            {filteredHistory.map((order, index) => (
              <div
                key={index}
                className={`${styles.framecard} ${
                  selectedOrder === order ? styles.selectedCard : ""
                }`}
                onClick={() => handleTicketClick(order)}
              >
                <div className={styles.month}></div>
                <div className={styles.card1}>
                  <div className={styles.sectionContent}>
                    <div className={styles.status}>
                      <button
                        className={`${styles.ticketStatus} ${
                          order.order.status_pembayaran === "unpaid"
                            ? styles.unpaidStatus
                            : order.order.status_pembayaran === "paid"
                            ? styles.paidStatus
                            : styles.canceledStatus
                        }`}
                      >
                        <div className={styles.statusTiket}>
                          {order.order.status_pembayaran}
                        </div>
                      </button>
                    </div>
                    <div className={styles.info}>
                      <div className={styles.keberangkatan}>
                        <img
                          className={styles.iconWrapper}
                          alt=""
                          src="/icon-wrapper.svg"
                        />
                        <div className={styles.info1}>
                          <b className={styles.asal}>
                            {order.tiketBerangkat.bandaraAwal.kota}
                          </b>
                          <div className={styles.tgl}>
                            {order.tiketBerangkat.tanggal_berangkat}
                          </div>
                          <div className={styles.tgl}>
                            {order.tiketBerangkat.jam_berangkat}.00
                          </div>
                        </div>
                      </div>
                      <div className={styles.estimasi}>
                        <div className={styles.durasiParent}>
                          <div className={styles.durasi}>
                            <div className={styles.tgl}>
                              {order.tiketBerangkat.selisih_jam} h
                            </div>
                            <div className={styles.tgl}>
                              {" "}
                              {order.tiketBerangkat.selisih_menit} m
                            </div>
                          </div>
                          <img
                            className={styles.flighticon}
                            alt=""
                            src="/flighticon.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.destination}>
                        <img
                          className={styles.iconWrapper}
                          alt=""
                          src="/icon-wrapper3.svg"
                        />
                        <div className={styles.info1}>
                          <b className={styles.tujuan}>
                            {order.tiketBerangkat.bandaraTujuan.kota}
                          </b>
                          <div className={styles.tgl1}>
                            <p className={styles.p}>
                              {order.tiketBerangkat.tanggal_kedatangan}
                            </p>
                            <p className={styles.p}>
                              {order.tiketBerangkat.jam_kedatangan}.00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.info3}>
                      <div className={styles.content}>
                        <div className={styles.label}>
                          <div className={styles.idNumber}>
                            <p className={styles.p}>
                              <b>{`Booking Code: `}</b>
                            </p>
                            <p className={styles.p}>
                              {order.order.kode_booking}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.flight}>
                        <b className={styles.tujuan}>{order.totalHargaTiket}</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.deskripsi}>
            <div ref={deskripsiRef}>
              {selectedOrder && (
                <div className={styles.sectionContent3}>
                  <div className={styles.detail}>
                    <div className={styles.detailStatus}>
                      <b className={styles.detil}>Detail Pesanan</b>
                      <div className={styles.ticketStatus3}>
                        <div
                          className={`${styles.ticketStatus} ${
                            selectedOrder.order.status_pembayaran === "unpaid"
                              ? styles.unpaidStatus
                              : selectedOrder.order.status_pembayaran === "paid"
                              ? styles.paidStatus
                              : styles.canceledStatus
                          }`}
                        >
                          {selectedOrder.order.status_pembayaran}
                        </div>
                      </div>
                    </div>
                    <div className={styles.code}>
                      <div className={styles.code1}>
                        <span>
                          <span>Booking Code:</span>
                          <b className={styles.b}>{` `}</b>
                        </span>
                        <b className={styles.b}>
                          <span>{selectedOrder.order.kode_booking}</span>
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className={styles.info12}>
                    <div className={styles.jadwal}>
                      <div className={styles.jam6}>
                        <p className={styles.p}>
                          <b className={styles.b1}>
                            {selectedOrder.order.jam_berangkat}
                          </b>
                        </p>
                        <p className={styles.maret20233}>
                          {selectedOrder.order.tanggal_berangkat}
                        </p>
                      </div>
                      <div className={styles.plane}>
                        <p className={styles.p}>
                          {
                            selectedOrder.tiketBerangkat.bandaraAwal
                              .nama_bandara
                          }
                        </p>
                      </div>
                    </div>
                    <div className={styles.status3}>
                      <b className={styles.berangkat}>Keberangkatan</b>
                    </div>
                  </div>
                  <img
                    className={styles.dividerIcon}
                    alt=""
                    src="/divider.svg"
                  />
                  <div className={styles.airline}>
                    <div className={styles.listItem}>
                      <div className={styles.thumbnail}>
                        <div className={styles.image}>
                          <div className={styles.row}>
                            <div className={styles.scaleUnitHorizontal}>
                              <div className={styles.top}>
                                <img
                                  className={styles.aspectRatioIcon}
                                  alt=""
                                />
                              </div>
                              <div className={styles.top}>
                                <img
                                  className={styles.aspectRatioIcon}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.scaleUnitHorizontal1}>
                              <div className={styles.top}>
                                <img
                                  className={styles.aspectRatioIcon}
                                  alt=""
                                />
                              </div>
                              <div className={styles.top}>
                                <img
                                  className={styles.aspectRatioIcon}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.row}>
                            <div className={styles.scaleUnitHorizontal}>
                              <div className={styles.top}>
                                <img
                                  className={styles.aspectRatioIcon}
                                  alt=""
                                />
                              </div>
                              <div className={styles.top}>
                                <img
                                  className={styles.aspectRatioIcon}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.scaleUnitHorizontal1}>
                              <div className={styles.top}>
                                <img
                                  className={styles.aspectRatioIcon}
                                  alt=""
                                />
                              </div>
                              <div className={styles.top}>
                                <img
                                  className={styles.aspectRatioIcon}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.textContent}>
                        <div className={styles.label}>
                          <div className={styles.info13}>
                            <p className={styles.p}>
                              <span className={styles.jetAirEconomy1}>
                                <b>
                                  {
                                    selectedOrder.penerbanganBerangkat.maskapai
                                      .nama_maskapai
                                  }
                                </b>
                              </span>
                            </p>
                            <p className={styles.blankLine}>
                              <span className={styles.jetAirEconomy1}>
                                <span className={styles.blankLine2}>
                                  &nbsp;
                                </span>
                              </span>
                            </p>
                            <p className={styles.p}>
                              <span>
                                <span className={styles.jetAirEconomy1}>
                                  <b>Informasi:</b>
                                </span>
                              </span>
                            </p>
                            <p className={styles.penumpang1MrHarryPotter}>
                              <span>
                                <span className={styles.penumpang1Mr}>
                                  Nama Lengkap :{" "}
                                  {selectedOrder.order.nama_lengkap}
                                </span>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.dividerIcon}
                    alt=""
                    src="/divider.svg"
                  />
                  <div className={styles.info14}>
                    <div className={styles.jadwal1}>
                      <div className={styles.plane1}>
                        {
                          selectedOrder.tiketBerangkat.bandaraTujuan
                            .nama_bandara
                        }
                      </div>
                      <div className={styles.tujuan}>
                        <p className={styles.p}>
                          <b>{selectedOrder.order.jam_kedatangan}</b>
                        </p>
                        <p className={styles.p}>
                          {selectedOrder.order.tanggal_kedatangan}
                        </p>
                      </div>
                    </div>
                    <div className={styles.status3}>
                      <b className={styles.berangkat}>Kedatangan</b>
                    </div>
                  </div>
                  <img
                    className={styles.dividerIcon}
                    alt=""
                    src="/divider.svg"
                  />
                  <div className={styles.harga}>
                    <div className={styles.label}>
                      <div className={styles.label3}>
                        <b className={styles.rincianBayar}>Rincian Harga</b>
                      </div>
                    </div>
                    <div className={styles.listItem2}>
                      <div className={styles.label4}>
                        <div className={styles.rincianBayar}>Harga Tiket</div>
                      </div>
                      <div className={styles.suffix}>
                        <div className={styles.tujuan}>
                          {
                            selectedOrder.penerbanganBerangkat.maskapai
                              .harga_tiket
                          }
                        </div>
                      </div>
                    </div>
                    <div className={styles.listItem2}>
                      <div className={styles.content}>
                        <div className={styles.label5}>
                          <div className={styles.rincianBayar}>
                            Jumlah Penumpang
                          </div>
                        </div>
                      </div>
                      <div className={styles.suffix}>
                        <div className={styles.tujuan}>
                          {selectedOrder.order.jumlah_penumpang}
                        </div>
                      </div>
                    </div>
                    <div className={styles.total}>
                      <div className={styles.listItem4}>
                        <div className={styles.label6}>
                          <b className={styles.label7}>Total</b>
                        </div>
                        <div className={styles.total1}>
                          <b className={styles.harga3}>
                            {selectedOrder.totalHargaTiket}
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                  {selectedOrder.order.status_pembayaran === "unpaid" && (
                    <div className={styles.bayarButtonWrapper}>
                      <Button variant="success" onClick={handleBayarClick}>
                        Bayar
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage1;

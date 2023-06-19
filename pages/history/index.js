import Header from "../../components/header";
import styles from "./index.module.css";
const HistoryPage = () => {
  return (
    <div className={styles.historypage}>
      <Header />
      <div className={styles.detailouter}>
        <div className={styles.frameinnder}>
          <div className={styles.framecard}>
            <div className={styles.month}>
              <div className={styles.title}>
                <b className={styles.monthYear}>Maret 2023</b>
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.sectionContent}>
                <div className={styles.status}>
                  <div className={styles.ticketStatus}>
                    <div className={styles.statusTiket}>Issued</div>
                  </div>
                </div>
                <div className={styles.infoestimasi}>
                  <div className={styles.keberangkatan}>
                    <img
                      className={styles.iconWrapper}
                      alt=""
                      src="../../icon-wrapper.svg"
                    />
                    <div className={styles.info}>
                      <b className={styles.asal}>{`Jakarta `}</b>
                      <div className={styles.tgl}>5 Maret 2023</div>
                      <div className={styles.tgl}>19:10</div>
                    </div>
                  </div>
                  <div className={styles.estimasi}>
                    <div className={styles.durasi}>4h 0m</div>
                    <img
                      className={styles.flighticon}
                      alt=""
                      src="/flighticon.svg"
                    />
                  </div>
                  <div className={styles.destination}>
                    <img
                      className={styles.iconWrapper}
                      alt=""
                      src="/icon-wrapper1.svg"
                    />
                    <div className={styles.info}>
                      <b className={styles.statusTiket}>Melbourne</b>
                      <div className={styles.tgl1}>
                        <p className={styles.p}>5 Maret 2023</p>
                        <p className={styles.p}>21:10</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.info2}>
                  <div className={styles.content}>
                    <div className={styles.label}>
                      <div className={styles.idNumber}>
                        <p className={styles.p}>
                          <b>{`Booking Code: `}</b>
                        </p>
                        <p className={styles.p}>6723y2GHK</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.class}>
                    <p className={styles.p}>
                      <b>Class:</b>
                    </p>
                    <p className={styles.p}>Economy</p>
                  </div>
                  <div className={styles.flight}>
                    <b className={styles.statusTiket}>IDR 9.850.000</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card2}>
              <div className={styles.sectionContent}>
                <div className={styles.status}>
                  <div className={styles.ticketStatus}>
                    <div className={styles.statusTiket}>Issued</div>
                  </div>
                </div>
                <div className={styles.infoestimasi}>
                  <div className={styles.keberangkatan}>
                    <img
                      className={styles.iconWrapper}
                      alt=""
                      src="/icon-wrapper.svg"
                    />
                    <div className={styles.info}>
                      <b className={styles.asal}>{`Jakarta `}</b>
                      <div className={styles.tgl}>5 Maret 2023</div>
                      <div className={styles.tgl}>19:10</div>
                    </div>
                  </div>
                  <div className={styles.estimasi}>
                    <div className={styles.durasi}>4h 0m</div>
                    <img
                      className={styles.flighticon}
                      alt=""
                      src="/flighticon.svg"
                    />
                  </div>
                  <div className={styles.destination}>
                    <img
                      className={styles.iconWrapper}
                      alt=""
                      src="/icon-wrapper1.svg"
                    />
                    <div className={styles.info}>
                      <b className={styles.statusTiket}>Melbourne</b>
                      <div className={styles.tgl1}>
                        <p className={styles.p}>5 Maret 2023</p>
                        <p className={styles.p}>21:10</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.info2}>
                  <div className={styles.content}>
                    <div className={styles.label}>
                      <div className={styles.idNumber}>
                        <p className={styles.p}>
                          <b>{`Booking Code: `}</b>
                        </p>
                        <p className={styles.p}>6723y2GHK</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.class}>
                    <p className={styles.p}>
                      <b>Class:</b>
                    </p>
                    <p className={styles.p}>Economy</p>
                  </div>
                  <div className={styles.flight}>
                    <b className={styles.statusTiket}>IDR 9.850.000</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card2}>
              <div className={styles.sectionContent}>
                <div className={styles.status2}>
                  <div className={styles.ticketStatus2}>
                    <div className={styles.statusTiket}>Unpaid</div>
                  </div>
                </div>
                <div className={styles.infoestimasi}>
                  <div className={styles.keberangkatan}>
                    <img
                      className={styles.iconWrapper}
                      alt=""
                      src="/icon-wrapper.svg"
                    />
                    <div className={styles.info}>
                      <b className={styles.asal}>{`Jakarta `}</b>
                      <div className={styles.tgl}>5 Maret 2023</div>
                      <div className={styles.tgl}>19:10</div>
                    </div>
                  </div>
                  <div className={styles.estimasi}>
                    <div className={styles.durasi}>4h 0m</div>
                    <img
                      className={styles.flighticon}
                      alt=""
                      src="/flighticon.svg"
                    />
                  </div>
                  <div className={styles.destination}>
                    <img
                      className={styles.iconWrapper}
                      alt=""
                      src="/icon-wrapper1.svg"
                    />
                    <div className={styles.info}>
                      <b className={styles.statusTiket}>Melbourne</b>
                      <div className={styles.tgl1}>
                        <p className={styles.p}>5 Maret 2023</p>
                        <p className={styles.p}>21:10</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.info2}>
                  <div className={styles.content}>
                    <div className={styles.label}>
                      <div className={styles.idNumber}>
                        <p className={styles.p}>
                          <b>{`Booking Code: `}</b>
                        </p>
                        <p className={styles.p}>6756232OG</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.class}>
                    <p className={styles.p}>
                      <b>Class:</b>
                    </p>
                    <p className={styles.p}>Business</p>
                  </div>
                  <div className={styles.flight}>
                    <b className={styles.statusTiket}>IDR 9.850.000</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.month1}>
              <div className={styles.title}>
                <b className={styles.monthYear}>Februari 2023</b>
              </div>
            </div>
            <div className={styles.card2}>
              <div className={styles.sectionContent}>
                <div className={styles.status2}>
                  <div className={styles.ticketStatus3}>
                    <div className={styles.statusTiket}>Cancelled</div>
                  </div>
                </div>
                <div className={styles.infoestimasi}>
                  <div className={styles.keberangkatan}>
                    <img
                      className={styles.iconWrapper}
                      alt=""
                      src="/icon-wrapper.svg"
                    />
                    <div className={styles.info}>
                      <b className={styles.asal}>{`Jakarta `}</b>
                      <div className={styles.tgl}>5 Maret 2023</div>
                      <div className={styles.tgl}>19:10</div>
                    </div>
                  </div>
                  <div className={styles.estimasi}>
                    <div className={styles.durasi}>4h 0m</div>
                    <img
                      className={styles.flighticon}
                      alt=""
                      src="/flighticon.svg"
                    />
                  </div>
                  <div className={styles.destination}>
                    <img
                      className={styles.iconWrapper}
                      alt=""
                      src="/icon-wrapper1.svg"
                    />
                    <div className={styles.info}>
                      <b className={styles.statusTiket}>Melbourne</b>
                      <div className={styles.tgl1}>
                        <p className={styles.p}>5 Maret 2023</p>
                        <p className={styles.p}>21:10</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.info2}>
                  <div className={styles.content}>
                    <div className={styles.label}>
                      <div className={styles.idNumber}>
                        <p className={styles.p}>
                          <b>{`Booking Code: `}</b>
                        </p>
                        <p className={styles.p}>6OIU965667G</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.class}>
                    <p className={styles.p}>
                      <b>Class:</b>
                    </p>
                    <p className={styles.p}>Economy</p>
                  </div>
                  <div className={styles.flight}>
                    <b className={styles.statusTiket}>IDR 9.850.000</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;

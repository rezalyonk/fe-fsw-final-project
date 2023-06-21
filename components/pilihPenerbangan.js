import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function pilihPenerbangan() {
    return (
        <div className='container-fluid'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <h6>Filter</h6>
                        {/* Accordion */}
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                        Transit
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <form>
                                            <div className="mb-3 form-check">
                                                <a style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <label className="form-check-label" htmlFor="exampleCheck1">Langsung</label>
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                </a>
                                            </div>
                                        </form>
                                        <form>
                                            <div className="mb-3 form-check">
                                                <a style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <label className="form-check-label" htmlFor="exampleCheck1">Transit</label>
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                        aria-controls="flush-collapseTwo">
                                        Waktu
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <form>
                                            <div className="mb-3 form-check">
                                                <a style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <label className="form-check-label" htmlFor="exampleCheck1">Pagi</label>
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                </a>
                                            </div>
                                        </form>
                                        <form>
                                            <div className="mb-3 form-check">
                                                <a style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <label className="form-check-label" htmlFor="exampleCheck1">Siang</label>
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                </a>
                                            </div>
                                        </form>
                                        <form>
                                            <div className="mb-3 form-check">
                                                <a style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <label className="form-check-label" htmlFor="exampleCheck1">Sore</label>
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                </a>
                                            </div>
                                        </form>
                                        <form>
                                            <div className="mb-3 form-check">
                                                <a style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <label className="form-check-label" htmlFor="exampleCheck1">Malam</label>
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                        #3
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Accordion */}
                    </div>


                    <div className="col-8">
                        {/* Tampilan Pilihan Tiket */}
                        <div className="card">
                            <div className="card-body">
                                <img src="/public/assets/logoMaskapai/logo-garudaIndonesia.png" style={{ width: '40px', height: '40px' }} alt="" />
                                <h6 className="card-title">Garuda Indonesia</h6>
                                <div>
                                    <p>Dari: Jakarta</p>
                                    <p>Ke: Bali</p>
                                    <p>Jam Keberangkatan: 10:00</p>
                                    <p>Harga: Rp 1.500.000</p>
                                </div>
                                <div className="position-relative">
                                    <a href="#" className="btn btn-success position-absolute bottom-0 end-0">Pilih</a>
                                </div>
                                <a>Detail Harga</a>
                                <a>Kebijakan &amp; Ketentuan</a>
                            </div>
                        </div>
                        {/* End Tampilan Pilihan Tiket */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default pilihPenerbangan
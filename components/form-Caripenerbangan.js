import React from 'react'
import { CiCircleChevDown } from "react-icons/ci";
import { RiSuitcase2Line } from "react-icons/ri";
import style from '../pages/pilihpenerbangan/index.module.css';
import { useState } from "react";

const berandaCariPenerbangan = () => {
    return (
        <div>
        <div className={style.frm}>
            <div className={style.airline}>
            <img className={style.iconthumbnail} src="/Thumbnail.png" alt="Thumbnail" />
            <h1 className={style.testh1}>Jet Air - Economy</h1>
            <CiCircleChevDown className={style.ccld} />
            </div>

            <div className={style.info}>
                <div className={style.br}>
                    <p className={style.p1}>07:00</p>
                    <p className={style.p2}>JKT</p>
                </div>
                <div className={style.if}>
                    <p className={style.p3}>4h 0m</p>
                    <img className={style.arw} src="/Arrow.png" alt="Thumbnail" />
                    <p className={style.p3}>Direct</p>
                </div>
                <div className={style.br2}>
                    <p className={style.p1}>11:00</p>
                    <p className={style.p2}>MLB</p>
                </div>
                <RiSuitcase2Line className={style.kpr}/>
                <div className={style.hrg}>
                    <p className={style.idr}>IDR 4.950.000</p>
                    <button type="submit" className={style.plh}>Pilih</button>
                </div>
            </div>
        </div>
        
        <div className={style.frm}>
        <div className={style.airline}>
            <img className={style.iconthumbnail} src="/Thumbnail.png" alt="Thumbnail" />
            <h1 className={style.testh1}>Jet Air - Economy</h1>
            <CiCircleChevDown className={style.ccld}/>
        </div>

        <div className={style.info}>
                <div className={style.br}>
                    <p className={style.p1}>08:00</p>
                    <p className={style.p2}>JKT</p>
                </div>
                <div className={style.if}>
                    <p className={style.p3}>4h 0m</p>
                    <img className={style.arw} src="/Arrow.png" alt="Thumbnail" />
                    <p className={style.p3}>Direct</p>
                </div>
                <div className={style.br2}>
                    <p className={style.p1}>12:00</p>
                    <p className={style.p2}>MLB</p>
                </div>
                <RiSuitcase2Line className={style.kpr}/>
                <div className={style.hrg}>
                    <p className={style.idr}>IDR 5.950.000</p>
                    <button type="submit" className={style.plh}>Pilih</button>
                </div>
            </div>
        </div>
        
        <div className={style.frm}>
        <div className={style.airline}>
            <img className={style.iconthumbnail} src="/Thumbnail.png" alt="Thumbnail" />
            <h1 className={style.testh1}>Jet Air - Economy</h1>
            <CiCircleChevDown className={style.ccld}/>
        </div>
        
        <div className={style.info}>
                <div className={style.br}>
                    <p className={style.p1}>13:15</p>
                    <p className={style.p2}>JKT</p>
                </div>
                <div className={style.if}>
                    <p className={style.p3}>4h 0m</p>
                    <img className={style.arw} src="/Arrow.png" alt="Thumbnail" />
                    <p className={style.p3}>Direct</p>
                </div>
                <div className={style.br2}>
                    <p className={style.p1}>17:15</p>
                    <p className={style.p2}>MLB</p>
                </div>
                <RiSuitcase2Line className={style.kpr}/>
                <div className={style.hrg}>
                    <p className={style.idr}>IDR 7.225.000</p>
                    <button type="submit" className={style.plh}>Pilih</button>
                </div>
            </div>
        </div>
        
        <div className={style.frm}>
        <div className={style.airline}>
            <img className={style.iconthumbnail} src="/Thumbnail.png" alt="Thumbnail" />
            <h1 className={style.testh1}>Jet Air - Economy</h1>
            <CiCircleChevDown className={style.ccld}/>
        </div>

        <div className={style.info}>
                <div className={style.br}>
                    <p className={style.p1}>20:15</p>
                    <p className={style.p2}>JKT</p>
                </div>
                <div className={style.if}>
                    <p className={style.p3}>4h 0m</p>
                    <img className={style.arw} src="/Arrow.png" alt="Thumbnail" />
                    <p className={style.p3}>Direct</p>
                </div>
                <div className={style.br2}>
                    <p className={style.p1}>23:30</p>
                    <p className={style.p2}>MLB</p>
                </div>
                <RiSuitcase2Line className={style.kpr}/>
                <div className={style.hrg}>
                    <p className={style.idr}>IDR 8.010.000</p>
                    <button type="submit" className={style.plh}>Pilih</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default berandaCariPenerbangan
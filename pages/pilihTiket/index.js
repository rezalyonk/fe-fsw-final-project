import React from 'react'
import Navbar from '@/components/Navbar';
import PilihPenerbangan from '@/components/pilihPenerbangan';
import Style from "./index.module.css";

const pilihTiket = () => {
    return (
        <div>
            <Navbar />
            <div className={Style.PilihPenerbangan}>
                <PilihPenerbangan />
            </div>
        </div>
    )
}

export default pilihTiket
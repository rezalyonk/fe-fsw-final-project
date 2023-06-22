import React from 'react'
import FormcariPenerbangan from "@/components/form-Caripenerbangan";
import Navbar from '@/components/Navbar';
import styles from "./index.module.css";

const index = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.FormcariPenerbangan}>
                <FormcariPenerbangan />
            </div>
        </div>
    )
}

export default index
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { BsFacebook } from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import { BsTwitter } from "react-icons/bs"
import {IoLogoWhatsapp } from "react-icons/io"



const Hero = () => {
  return (
    <div className='bg-[url("/bg.jpg")] h-screen bg-cover bg-no-repeat bg-center bg-fixed flex item-center relative'>
        <div className='absolute inset-0 bg-black/60'></div>
        <div className='container mt-[150px] mx-auto px-4 z-10'>
            <div className=' text-center text-white flex flex-col gap-[20px] md:gap-[40px]'>
                
                <div>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold'>Ingin Bepergian?</h1>
                </div>
                <div>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold'>Tapi Bingung Cari <span className='text-green-600'>Ticket</span></h1>
                </div>
                <div className='mx-auto bg-green-700 h-[2px] w-[250px]'></div>
                <div>
                    <p className='text-sm md:text-xl text-gray-300 tracking-widest'> Tenang kami menyediakan dengan Harga terjangkau Serta keamanan yang terjamin</p>
                    </div>
                    <div>
                        <Button link="#" text="Get Ticket"/>    
                    </div>
                    
                
            </div>
        </div>
        <div className='hidden absolute right-20 top-32 z-10 md:flex flex-col gap-5 item-center'>
            <Link href="https://web.facebook.com/?_rdc=1&_rdr" target='_blank'><BsFacebook size={25} className='text-green-600 hover:-translate-x-1.5 duration-300' /></Link>
           <Link href="https://web.facebook.com/?_rdc=1&_rdr" target='_blank'><AiFillInstagram size={25} className='text-green-600 hover:-translate-x-1.5 duration-300'/></Link>
             <Link href="https://web.facebook.com/?_rdc=1&_rdr" target='_blank'><BsTwitter size={25} className='text-green-600 hover:-translate-x-1.5 duration-300'/></Link> 
            <Link href="https://web.facebook.com/?_rdc=1&_rdr" target='_blank'><IoLogoWhatsapp size={25} className='text-green-600 hover:-translate-x-1.5 duration-300'/></Link> 
        </div>
    </div> 
  )
}

export default Hero
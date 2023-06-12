import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { MdFlightTakeoff } from "react-icons/md";
import {AiFillInstagram} from "react-icons/ai"
import {IoLogoWhatsapp } from "react-icons/io"
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mx-auto my-10">
      <div className="bg-[#f8fafe] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10 px-10 py-10 rounded-3xl items-start justify-center ">
        <div className="flex flex-col items-center gap-5">
        <div className='flex gap-1 items-center text-xl md:text-2xl font-bold'>
          <span className='italic'>Fly</span>
          <MdFlightTakeoff/>
          <span className='italic text-green-600'>Ticket</span>
          
        </div>
        <p className="text-center">Infini Space, Jl. Kabupaten, Nusupan, Trihanggo, Gamping, Sleman Regency, Special Region of Yogyakarta 55291</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <p className="text-xl font-medium">Company</p>
          <Link href="#"><p className="text-base">About</p></Link>
          <Link href="#"><p className="text-base">Contact</p></Link>
        </div>
        <div className="flex flex-col items-center gap-5">
          <p className="text-xl font-medium">Product</p>
          <Link href="#"><p className="text-base">Maskapai</p></Link> 
          <Link href="#"><p className="text-base">Ticket</p></Link>
          <Link href="#"><p className="text-base">Pricing</p></Link>
          
          
        

        </div>
        <div className="flex flex-col items-center gap-5">
          <p className="text-xl font-medium">Legal</p>
          <Link href="#"><p className="text-base">Terms & Conditions</p></Link>
          <Link href="#"><p className="text-base">Privacy policy</p></Link>
          
          
        </div>
        <div className="flex mx-auto gap-5 item-center">
            <Link href="https://web.facebook.com/?_rdc=1&_rdr" target='_blank'><BsFacebook size={25} className='text-green-600 hover:-translate-y-1 duration-300' /></Link>
            <Link href="https://web.facebook.com/?_rdc=1&_rdr" target='_blank'><AiFillInstagram size={25} className='text-green-600 hover:-translate-y-1 duration-300'/></Link>
            <Link href="https://web.facebook.com/?_rdc=1&_rdr" target='_blank'><BsTwitter size={25} className='text-green-600 hover:-translate-y-1 duration-300'/></Link> 
           <Link href="https://web.facebook.com/?_rdc=1&_rdr" target='_blank'><IoLogoWhatsapp size={25} className='text-green-600 hover:-translate-y-1 duration-300'/></Link> 
        </div>
      </div>
    </div>
  );
};

export default Footer;

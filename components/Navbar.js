import Link from 'next/link'
import React, { useState } from 'react'
import { MdFlightTakeoff } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from "react-icons/ai"
import { BsTwitter } from "react-icons/bs"
import {IoLogoWhatsapp } from "react-icons/io"



const Navbar = () => {
    const [toggle,setToggle] = useState (false)


  return (
    <div className='fixed bg-white top-0 w-[100%] z-20 shadow-md'>
      <div className='container mx-auto flex justify-between item-center px-4'>
        <div className='flex gap-1 items-center text-xl md:text-2xl font-bold'>
          <span className='italic'>Fly</span>
          <MdFlightTakeoff/>
          <span className='italic text-green-600'>Ticket</span>
        </div>
    
        <div className='hidden p-4 md:flex gap-10 tracking-wider text-gray-600'>
            <Link href="/"className='hover:text-green-700'>Home</Link>
            <Link href="http://localhost:3000/login"className='hover:text-green-700'>Booking</Link>
            <Link href="/"className='hover:text-green-700'>About</Link>
            <Link href="/"className='hover:text-green-700'>Service</Link>

        </div>
        <div className='p-4 flex gap-5'>
        <Link href="/login"><button className='hidden md:block border border-green-600 px-4 py-1 rounded-md text-green-600 hover:bg-green-600 hover:text-white '>Login</button></Link>
        <Link href="#"><button className='hidden md:block border border-green-600 px-4 py-1 rounded-md text-green-600 hover:bg-green-600 hover:text-white '><AiOutlineShoppingCart/></button></Link>
            
        </div>
        {toggle ?(
              <AiOutlineClose onClick={()=>setToggle
                (!toggle)} size={30} className='md:hidden block'/>
        ):(
            <FiMenu onClick={()=>setToggle
                (!toggle)}  size={30} className='md:hidden block'/>
        )}

      </div>
      {/* resposif menu */}
      <div className={` duration-300 md:hidden flex flex-col w-[70%] h-screen fixed bg-black/70 text-white top-[33px] ${toggle ? `left-[0]` : `left-[100%]`}`}>
            <Link href="/"className='hover:text-green-700 p-4'>Home</Link>
            <Link href="/"className='hover:text-green-700 p-4'>Boxing</Link>
            <Link href="/"className='hover:text-green-700 p-4'>About</Link>
            <Link href="/"className='hover:text-green-700 p-4'>Service</Link>
            
            <div className='flex mx-auto gap-5 item-center'>
              <Link href="https://web.facebook.com/?_rdc=1&_rdr" target='_blank'><BsFacebook size={25} className='text-green-600 hover:-translate-y-1 duration-300' /></Link>
            <Link href="https://web.facebook.com/?_rdc=1&_rdr" target='_blank'><AiFillInstagram size={25} className='text-green-600 hover:-translate-y-1 duration-300'/></Link>
              <Link href="https://web.facebook.com/?_rdc=1&_rdr" target='_blank'><BsTwitter size={25} className='text-green-600 hover:-translate-y-1 duration-300'/></Link> 
              <Link href="https://web.facebook.com/?_rdc=1&_rdr" target='_blank'><IoLogoWhatsapp size={25} className='text-green-600 hover:-translate-y-1 duration-300'/></Link> 
           </div>
           <div className='flex flex-col mx-auto gap-5 mt-5 item-center'>
              <div className='bg-green-600 w-[170px] h-[1px]'></div>
            </div>
            <div className='p-4 mx-auto flex gap-5'>
            <button className='md:hidden flex flex-col  border border-green-600 px-4 py-1 rounded-md text-green-600 bg-green-600 text-white bg-green-600 text-white hover:bg-white hover:border-white hover:text-green-600'>Login</button>
            <button className='duration-300 md:hidden flex flex-col  border border-green-600 px-6 py-1 rounded-md text-green-600 bg-green-600 text-white hover:bg-white hover:border-white hover:text-green-600'>cart</button>
            </div>

    
      </div>


    </div>
  )
}

export default Navbar
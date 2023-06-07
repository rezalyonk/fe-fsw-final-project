import Link from 'next/link'
import React, { useState } from 'react'
import { MdFlightTakeoff } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"
import { AiOutlineShoppingCart } from "react-icons/ai"

const Navbar = () => {
    const [toggle,setToggle] = useState (false)


  return (
    <div className='fixed bg-white top-0 w-[100%] z-20'>
      <div className='container mx-auto flex justify-between item-center px-4'>
        <div className='flex gap-1 items-center text-xl md:text-2xl font-bold'>
          <span className='italic'>Fly</span>
          <MdFlightTakeoff/>
          <span className='italic text-green-700'>Ticket</span>
        </div>
    
        <div className='hidden p-4 md:flex gap-10 tracking-wider text-gray-600'>
            <Link href="/"className='hover:text-green-700'>Home</Link>
            <Link href="/"className='hover:text-green-700'>Boxing</Link>
            <Link href="/"className='hover:text-green-700'>About</Link>
            <Link href="/"className='hover:text-green-700'>Service</Link>

        </div>
        <div className='p-4 flex gap-5'>
            <button className='hidden md:block border border-green-700 px-4 py-1 rounded-md text-green-700 hover:bg-green-700 hover:text-white '>Login</button>
            <button className='hidden md:block border border-green-700 px-4 py-1 rounded-md text-green-700 hover:bg-green-700 hover:text-white '><AiOutlineShoppingCart/></button>
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
      <div className={` duration-300 md:hidden flex flex-col w-[70%] h-screen fixed bg-black/70 text-white top-[60px] ${toggle ? `left-[0]` : `left-[100%]`}`}>
            <Link href="/"className='hover:text-green-700 p-4'>Home</Link>
            <Link href="/"className='hover:text-green-700 p-4'>Boxing</Link>
            <Link href="/"className='hover:text-green-700 p-4'>About</Link>
            <Link href="/"className='hover:text-green-700 p-4'>Service</Link>
            <div className='p-4 mx-auto flex gap-5'>
            <button className='md:hidden flex flex-col  border border-green-700 px-4 py-1 rounded-md text-green-700 bg-green-700 text-white bg-green-700 text-white hover:bg-white hover:border-white hover:text-green-700'>Login</button>
            <button className='duration-300 md:hidden flex flex-col  border border-green-700 px-6 py-1 rounded-md text-green-700 bg-green-700 text-white hover:bg-white hover:border-white hover:text-green-700'>cart</button>
            </div>

    
      </div>


    </div>
  )
}

export default Navbar
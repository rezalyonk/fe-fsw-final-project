import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className='bg-[url("/bg-hero-1.jpg")] h-screen bg-cover bg-no-repeat bg-center bg-fixed flex item-center relative'>
        <div className='absolute inset-0 bg-black/50'></div>
        <div className='container mx-auto px-4 z-10'>
            <div className=' text-white flex flex-col gap-[40px]'>
                
                <div>
                    <h1 className='text-5xl font-semibold'>Ingin Bepergian?</h1>
                </div>
                <div>
                    <h1 className='text-5xl font-semibold'>Tapi Bingung Cari <span className='text-green-600'>Ticket</span></h1>
                </div>
                <div className='bg-green-700 h-[2px] w-[250px]'></div>
                <div>
                    <p className='text-xl text-gray-300 tracking-widest'> Tenang kami menyediakan dengan Harga terjangkau Serta keamanan yang terjamin</p>
                    </div>
                    <div>
                        <Button link="#" text="Get Ticket"/>    
                    </div>
                    
                
            </div>
        </div>
    </div>
  )
}

export default Hero
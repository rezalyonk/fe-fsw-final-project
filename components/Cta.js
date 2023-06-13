import React from 'react'

const Cta = () => {
  return (
    <div className='container mx-auto flex flex-col gap-5 items-center justify-center py-20'>
            <p className=' text-xl md:text-2xl lg:text-4xl font-medium text-center'>Masih Ragu?</p>
            <p className='text-base sm:text-lg lg:text-2xl font-medium text-center'>Silahkan ajukan Pertanyaan anda</p>
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 items-center mt-5">
                <input type="text" className='px-5 py-5 rounded-full w-72 lg:w-96 outline-none bg-[#f8fafe]' placeholder='input your email' />
                <input type="text" className='px-5 py-5 rounded-full w-72 lg:w-96 outline-none bg-[#f8fafe]' placeholder='input your Questions' />
                <button className='btn btn-sm lg:btn-lg bg-green-600 btn-lg rounded-full border-none'>Send</button>
            </div>
    </div>
  )
}

export default Cta
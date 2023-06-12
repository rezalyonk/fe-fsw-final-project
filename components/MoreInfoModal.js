import React from 'react'
import { Disclosure } from '@headlessui/react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
const MoreInfoModal = () => {
  const info=[
    {
      title:'Bagaimana cara membeli tiket pesawat secara online?',
      des:'Untuk membeli tiket pesawat secara online, Anda perlu mengakses situs web atau aplikasi dari maskapai penerbangan atau agen perjalanan online. Pilih tujuan, tanggal keberangkatan, dan jumlah penumpang yang sesuai dengan kebutuhan Anda. Setelah itu, pilih penerbangan yang Anda inginkan dan ikuti langkah-langkah pembayaran untuk menyelesaikan transaksi.'
    },
    {
      title:'Apa yang harus saya persiapkan sebelum membeli tiket pesawat online?',
      des:'Sebelum membeli tiket pesawat online, pastikan Anda memiliki informasi yang diperlukan seperti tanggal keberangkatan, tujuan, jumlah penumpang, dan preferensi penerbangan. Selain itu, pastikan juga Anda memiliki akses yang stabil ke internet dan metode pembayaran yang valid, seperti kartu kredit atau debit.'
    },
    {
      title:'Apakah saya perlu membuat akun agar dapat membeli tiket pesawat online?',
      des:'Ya, Anda perlu membuat akun pengguna sebelum dapat membeli tiket pesawat secara online. Dengan membuat akun, Anda dapat menyimpan data pribadi, memanfaatkan fitur pengelolaan pemesanan, mendapatkan informasi terkini tentang penawaran khusus, dan mempermudah proses pembelian tiket di masa mendatang.'
    },
    {
      title:'Apakah saya bisa memilih kursi pesawat saat membeli tiket online?',
      des:'Ya, dalam sebagian besar kasus, Anda dapat memilih kursi pesawat saat membeli tiket online. Biasanya, ada opsi untuk memilih kursi saat melakukan pemesanan atau melalui pengelolaan pemesanan setelah pembelian tiket.'
    },
    {
      title:'Bagaimana saya mendapatkan tiket setelah melakukan pembelian online?',
      des:'Setelah Anda menyelesaikan pembelian tiket pesawat online, biasanya Anda akan menerima tiket elektronik atau e-tiket melalui email. E-tiket ini berisi informasi perjalanan Anda, termasuk nomor penerbangan, tanggal, dan jam keberangkatan, serta kode pemesanan yang perlu ditunjukkan saat check-in di bandara.'
    },
    {
      title:'Apakah saya bisa mengganti atau membatalkan tiket pesawat yang telah dibeli secara online?',
      des:'Kebijakan penggantian atau pembatalan tiket pesawat dapat berbeda-beda tergantung pada maskapai penerbangan dan jenis tarif tiket yang Anda beli. Sebagian besar maskapai menyediakan opsi untuk mengganti jadwal atau membatalkan tiket dengan biaya tertentu, tergantung pada aturan tarif yang berlaku. Pastikan untuk membaca syarat dan ketentuan serta kebijakan pembatalan sebelum membeli tiket.'
    },
  ]
  return (
    <div className="container mx-auto py-20">
            <p className="text-gray-500 text-2xl text-center font-medium uppercase my-3">
          INFO LEBIH LANJUT
      </p>
      <p className="text-gray-800 text-center text-4xl font-medium capitalize mb-10">
      Common questions
      </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
      {info.map((inf,i)=>{
        return(
      
    <Disclosure key={i} >
        {({ open }) => (
          <div className='group'>
            <Disclosure.Button className="flex flex-col group-hover:bg-green-600 group-focus:bg-green-600 w-full justify-between rounded-lg lg:rounded-xl border border-gray-200 px-8 py-10 text-left text-sm font-medium  focus:outline-none hover:duration-300 ">
              <div className="flex justify-between items-center w-full">
              <span className='group-hover:text-white  group-focus:text-white'>{inf.title}</span>
              <BsFillPlusCircleFill
                className={`${
                  open ? 'rotate-180 transform' : ''
                }  text-green-600 text-2xl group-hover:text-white  group-focus:text-white `}
              />
              </div>
           
                   <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 group-focus:text-white group-hover:text-white">
              {inf.des}
            </Disclosure.Panel>
            </Disclosure.Button>
       
          </div>
        )}
      </Disclosure>
       
        )
      })}
  
 
    </div>
  </div>
  )
}

export default MoreInfoModal
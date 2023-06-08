import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import "swiper/css/navigation";
import "swiper/css";
import Image from 'next/image';
import Button from './Button';
import Kursi from "../public/assets/Kursi Bisnis.jpg";
import Makanan from "../public/assets/Makanan.jpg";
import Pramugari from "../public/assets/pramugari1.jpg";
import Pilot from "../public/assets/Pilot.jpeg";

const categories = [
  {
    name: "Kursi",
    description: "Rasakan Pengalaman Penerbangan yang Luar Biasa dengan Kursi Bisnis Pesawat Kami!",
    image: Kursi,
    btnText: "Explore",
  },
  {
    name: "Makanan",
    description: "Menyatu dengan Keindahan Kuliner, Cicipi Keunikan Setiap Destinasi dengan Pelayanan Makanan Pesawat yang Menghadirkan Makanan Lokal yang Otentik!",
    image: Makanan,
    btnText: "Explore",
  },
  {
    name: "Pramugari",
    description: "Momen Tak Terlupakan dalam Udara, Percayakan Pelayanan Anda kepada Pramugari Kami yang Ahli dan Rasakan Kenyamanan yang Luar Biasa di Seluruh Penerbangan!",
    image: Pramugari,
    btnText: "Explore",
  },
  {
    name: "Pilot",
    description: "Di Tangan Ahli: Kami Menyajikan Pilot Berpengalaman dengan Jam Terbang Tinggi untuk Menjamin Keamanan dan Kenyamanan Perjalanan Anda!",
    image: Pilot,
    btnText: "Explore",
  },
];

const CategorieSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      module={Navigation}
      breakpoints={{
        700: {
          slidesPerView: 1,
        },
      }}
      className='categorieSlider min-h-[660px]'>
      {categories.map((categorie, index) => {
        return (
          <SwiperSlide className='bg-slate-300 shadow-md min-h-[480px] rounded-md py-16 px-8 mt-10' key={index}>
            <div className='flex flex-col gap-y-5 md:flex-row md:gap-x-16'>
              <Image src={categorie.image} height={900} width={1300} />
              <div className='flex flex-col gap-y-5 '>
                    <div className='text-2xl font-medium flex gap-x-2 items-center'>
                        {categorie.name}
                  </div>
                    <div className='text-[20px] text-gray-700 '>{categorie.description}
                    <div className='mt-5'>
                        <Button link="#" text={categorie.btnText}/>
                       </div>
                    </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CategorieSlider;

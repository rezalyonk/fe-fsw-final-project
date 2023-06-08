import React from 'react'
import Headline from './Headline'
import Card from './Card'

const Product = () => {
  return (
    <section className='max-w-[1640px] mx-auto p-4 py-12 '>
        <Headline title="Maskapai"/>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-20 py-12'>
          <Card image="/assets/lion.jpeg" title="Lion Air"/>
          <Card image="/assets/Batik.jpg" title="Batik Air"/>
          <Card image="/assets/Melindo-air.jpg" title="Melindo Air"/>
          <Card image="/assets/Garuda.jpg" title="Garuda Air"/>
          <Card image="/assets/Air-asia.jpg" title="Air Asia"/>
          <Card image="/assets/Adam-air.jpeg" title="Adam Air"/>
        </div>
    </section>
       
  )
}

export default Product
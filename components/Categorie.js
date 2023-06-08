import React from 'react'
import Headline from './Headline'
import CategorieSlider from './CategorieSlider'

const Categorie = () => {
  return (
    <section id='Categorie' className='bg-slate-200 min-h-[600px] py-16'>   
        <div className='container mx-auto h-[680px]'>
            <Headline title="Pelayanan"/>
            <CategorieSlider/>
        </div>
    </section>
  )
}

export default Categorie
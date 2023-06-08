import Head from 'next/head'
import Hero from '../components/Hero'
import Product from '../components/Product'
import Categorie from '../components/Categorie'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'

export default function Home (){
  return (
    <div>
      <Head>
        <title>Fly Ticket</title>
      </Head>
      <Hero/>
      <Product/>
      <Categorie/>
      <Cta/>
      <Footer/>
    </div>
  )
}


import Head from 'next/head'
import Hero from '../components/Hero'
import Product from '../components/Product'
import Categorie from '../components/Categorie'
import Footer from '@/components/Footer'
import MoreInfoModal from '@/components/MoreInfoModal'
import Cta from '@/components/Cta'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fly Ticket</title>
      </Head>
      <Navbar />
      <Hero />
      <Product />
      <Categorie />
      <MoreInfoModal />
      <Cta />
      <Footer />
    </div>
  )
}


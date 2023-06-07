import Navbar from '../components/Navbar'
import '@/styles/globals.css'

function App({ Component, pageProps }) {
  return (
  <>
    <Navbar/>
    <Component {...pageProps} />
    </>
  )
  
}

export default App

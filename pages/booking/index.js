import Navbar from '@/components/Navbar';
import FlightSearchForm from '../../components/flightSearchForm';
import Footer from '@/components/Footer';
import styles from '@/pages/booking/index.module.css'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <FlightSearchForm />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;

import Navbar from '../Header/Navbar';
import SearchBar from '../Header/SearchBar';
import Hero from '../Hero/Hero';
import Categories from '../Categories/Categories'; 
import Offers from '../Offers/Offers';
import Deals from '../Deals/Deals';
import Footer from '../Footer/Footer'
const MainHome = () => {
  return (
    <>
      <SearchBar />
      <Navbar />
      <Hero />
      <Categories />
      <Offers/>
      <Deals/>
      <Footer/>
    </>
  );
};

export default MainHome;

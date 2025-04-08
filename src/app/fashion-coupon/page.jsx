import FashionCoupon from "../../components/FashionCoupon/FashionCoupon"
import SearchBar from '../../components/Header/SearchBar';
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
export default function page(){
    return (
        <>
         <SearchBar />
         <Navbar />
        <FashionCoupon/>
        <Footer/>
       </>
    )
}
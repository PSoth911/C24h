import Navbar from '../../components/userComponent/HomepageComponent/Navbar'
import Menu from '../../components/userComponent/HomepageComponent/Menu'
import ShowSection from '../../components/userComponent/HomepageComponent/ShowSection'
import Search from '../../components/userComponent/HomepageComponent/Search'
import ExclusiveFood from '../../components/userComponent/HomepageComponent/ExclusiveFood'
import ExploreCuisines from '../../components/userComponent/HomepageComponent/ExploreCuisines'
import BrowAllfood from '../../components/userComponent/HomepageComponent/BrowAllfood'
import Tredingfood from '../../components/userComponent/HomepageComponent/Tredingfood'
import FeaturedRestaurants from '../../components/userComponent/HomepageComponent/FeaturedRestaurants'
import TopRestaurants from '../../components/userComponent/HomepageComponent/TopRestaurants'
import SuperfastDelivery from '../../components/userComponent/HomepageComponent/SuperfastDelivery'
import NewMenu from '../../components/userComponent/HomepageComponent/NewMenu'
import GetApp from '../../components/userComponent/HomepageComponent/GetApp'
import Footer from '../../components/userComponent/HomepageComponent/Footer'
import { useEffect, useState } from "react";
import axios from "axios";
const HomePage = ()=>{
    const [user, setUser] = useState(null);
    useEffect(() => {
        const token = sessionStorage.getItem("token");

        axios.get("http://localhost:5000/api/users/me", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        })
        .then((res) => {
        setUser(res.data);
        })
        .catch((err) => {
        console.error(err);
        });
    }, []);
    return(
    <div>
        <div className='px-15 py-5'>
            
            <Navbar />
            <div className='font-bold text-3xl px-2 text-[#004953] py-5'>Good morning Hello Ha Kak!!</div>
            <ShowSection />
            <Search />
            <Menu />
            <ExclusiveFood/>
            <ExploreCuisines/>
            <BrowAllfood/>
            <Tredingfood/>
            <FeaturedRestaurants/>
            <TopRestaurants/>
            <SuperfastDelivery/>
            <NewMenu/>

        </div>
            <GetApp/>
            <Footer/>
 </div>
    )
}
export default HomePage
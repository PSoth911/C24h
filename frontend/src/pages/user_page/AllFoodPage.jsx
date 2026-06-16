import Navbar from "../../components/userComponent/HomepageComponent/Navbar"
import Footer from "../../components/userComponent/HomepageComponent/Footer"
import LeftSectionFilter from "../../components/userComponent/AllFoodComponent/LeftSectionFilter";
import RightSectionFood from "../../components/userComponent/AllFoodComponent/RightSectionFood";


const AllFoodPage = () => {
    

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="py-2 px-20">
                    <h2 className="font-bold text-[#004953] text-2xl">ALL FOOD</h2>
                    <p className="text-[#004953]">Discover 1,248 delicious dishes near you</p>
                </div>
            <div className="px-15 py-4 gap-15 grid grid-cols-7 items-start"> 
                <LeftSectionFilter />
                <RightSectionFood/>
            </div>
            <Footer/>


        </div>
    )
}

export default AllFoodPage

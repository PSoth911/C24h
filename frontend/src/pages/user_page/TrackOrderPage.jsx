import Navbar from "../../components/userComponent/HomepageComponent/Navbar"
import Footer from "../../components/userComponent/HomepageComponent/Footer"
import Map from "../../components/userComponent/TrackOrderComponent/Map"
import Orderstatus from "../../components/userComponent/TrackOrderComponent/Orderstatus"
import LeftSection from "../../components/userComponent/TrackOrderComponent/LeftSection"
import RightSection from "../../components/userComponent/TrackOrderComponent/RightSection"

const TrackOrderPage = () => {
  return (
    <div>
      <Navbar/>
      <div className="px-30 py-3">
        <Map/>
        <Orderstatus/>
        <div className="grid gap-5 mt-2 grid-cols-2">
            <LeftSection/>
            <RightSection/>
  </div>
      </div>
      <div className="mt-10">
        <Footer/>
      </div>
    </div>
  )
}

export default TrackOrderPage

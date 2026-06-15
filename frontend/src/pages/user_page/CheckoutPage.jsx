import Navbar from "../../components/userComponent/HomepageComponent/Navbar"
import Footer from "../../components/userComponent/HomepageComponent/Footer"
import LeftSection from "../../components/userComponent/CheckoutComponent/Leftsection"
import RightSection from "../../components/userComponent/CheckoutComponent/Rightsection"
const CheckoutPage = () => {
  return (
    <div>
        <Navbar/>
        <div className="py-10 px-30">
          <h2 className="font-bold text-3xl">Your Card</h2>
          <div className="grid grid-cols-5 gap-10">
            <LeftSection/>
            <RightSection/>
          </div>
        </div>

        <Footer/>
    </div>
  )
}

export default CheckoutPage

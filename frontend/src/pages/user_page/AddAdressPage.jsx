import ProcessStep from "../../components/userComponent/CheckoutComponent/ProcessStep";
import DeliveryDetails from "../../components/userComponent/CheckoutComponent/DeliveryDetails";
import Navbar from "../../components/userComponent/HomepageComponent/Navbar";
import Footer from "../../components/userComponent/HomepageComponent/Footer";

const AddAdressPage = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="mx-auto max-w-2xl">
          <ProcessStep />
        </div>
        <div className="mt-10">
          <DeliveryDetails />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AddAdressPage;
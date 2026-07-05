import { useEffect, useState } from "react";

import ProcessStep from "../../components/userComponent/CheckoutComponent/ProcessStep";
import DeliveryDetails from "../../components/userComponent/CheckoutComponent/DeliveryDetails";
import Navbar from "../../components/userComponent/HomepageComponent/Navbar";
import Footer from "../../components/userComponent/HomepageComponent/Footer";

import Loading from "../user_page/LoadingPage";

import { getProfile } from "../../service/profileService";
import { getCart } from "../../service/cartService";

const DELIVERY_FEE = 1.5;
const SERVICE_FEE = 0.99;

const AddAdressPage = () => {
  const [loading, setLoading] = useState(true);

  const [customer, setCustomer] = useState(null);

  const [summary, setSummary] = useState({
    subtotal: 0,
    deliveryFee: DELIVERY_FEE,
    serviceFee: SERVICE_FEE,
    total: 0,
  });

  const loadData = async () => {
    try {
      const [profileRes, cartRes] = await Promise.all([
        getProfile(),
        getCart(),
      ]);

      setCustomer(profileRes);

      const subtotal = Number(cartRes.data.total || 0);

      setSummary({
        subtotal,
        deliveryFee: DELIVERY_FEE,
        serviceFee: SERVICE_FEE,
        total: subtotal + DELIVERY_FEE + SERVICE_FEE,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="mx-auto max-w-2xl">
          <ProcessStep />
        </div>

        <div className="mt-10">
          <DeliveryDetails
            customer={customer}
            summary={summary}
            reload={loadData}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AddAdressPage;
import { useState } from "react";

import Navbar from "../../components/userComponent/HomepageComponent/Navbar";
import Footer from "../../components/userComponent/HomepageComponent/Footer";
import ProcessStep from "../../components/userComponent/CheckoutComponent/ProcessStep";

import LeftSection from "../../components/userComponent/PaymentComponent/LeftSection";
import RightSection from "../../components/userComponent/PaymentComponent/RightSection";

import CardPayment from "../../components/userComponent/PaymentComponent/CardPayment";
import KHQRPayment from "../../components/userComponent/PaymentComponent/KHQRPayment";
import CashPayment from "../../components/userComponent/PaymentComponent/CashPayment";
import WalletPayment from "../../components/userComponent/PaymentComponent/WalletPayment";

const paymentMethods = [
  {
    id: "card",
    label: "Card",
    component: CardPayment,
  },
  {
    id: "khqr",
    label: "KHQR Pay",
    component: KHQRPayment,
  },
  {
    id: "cash",
    label: "Cash",
    component: CashPayment,
  },
  {
    id: "wallet",
    label: "Wallet",
    component: WalletPayment,
  },
];

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");

  const selectedPayment = paymentMethods.find(
    (item) => item.id === selectedMethod
  );

  const PaymentComponent = selectedPayment?.component;

  return (
    <div>
      <Navbar />
      <div className="px-30 py-5">
        <div className="mx-auto mt-5 max-w-2xl">
          <ProcessStep currentStep={2} />
        </div>

        <div className="mt-5 grid grid-cols-6 gap-5">
          <div className="col-span-4">
            <LeftSection
                methods={paymentMethods}
                selected={selectedMethod}
                onChange={setSelectedMethod}
            />
            <div className="shadow-2xl bg-gray-100 mt-2 w-full">
                {PaymentComponent && <PaymentComponent />}
            </div>
          </div>
          <RightSection />
        </div>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Payment;
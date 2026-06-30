import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../path";
import { getCart } from "../../../service/cartService";
import Loading from "../../../pages/user_page/LoadingPage";

const Rightsection = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [subtotal, setSubtotal] = useState(0);

  const deliveryFee = 1.5;
  const serviceFee = 0.99;

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const res = await getCart();

      setSubtotal(Number(res.data.total) || 0);
    } catch (err) {
      console.log(err);

      if (err.response?.status === 404) {
        setSubtotal(0);
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  const total = subtotal + deliveryFee + serviceFee;

  return (
    <div className="col-span-2 bg-white rounded-3xl shadow-xl border p-6 h-fit sticky top-5">

      <h2 className="text-2xl font-bold text-[#004953] mb-6">
        Order Summary
      </h2>

      {/* Price */}
      <div className="space-y-3 text-gray-700">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Service Fee</span>
          <span>${serviceFee.toFixed(2)}</span>
        </div>

      </div>

      <hr className="my-6" />

      {/* Promo */}
      <div>
        <label className="font-semibold text-[#004953]">
          Promo Code
        </label>

        <div className="flex gap-3 mt-3">

          <input
            type="text"
            placeholder="Enter promo code"
            className="flex-1 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#004953]"
          />

          <button className="bg-[#004953] text-white px-5 rounded-xl hover:bg-[#00353d]">
            Apply
          </button>

        </div>
      </div>

      <hr className="my-6" />

      {/* Total */}

      <div className="flex justify-between text-xl font-bold">

        <span>Total</span>

        <span className="text-[#004953]">
          ${total.toFixed(2)}
        </span>

      </div>

      {/* ETA */}

      <div className="mt-6 bg-green-100 text-green-700 rounded-xl py-3 text-center font-medium">
        🚚 Estimated Arrival: 20–25 mins
      </div>

      {/* Checkout */}

      <button
        disabled={subtotal === 0}
        onClick={() => navigate(PATH.USER.AddAdress)}
        className={`w-full mt-6 py-4 rounded-2xl font-semibold transition-all
          ${
            subtotal === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#004953] text-white hover:scale-[1.02]"
          }`}
      >
        Continue to Address
      </button>

    </div>
  );
};

export default Rightsection;
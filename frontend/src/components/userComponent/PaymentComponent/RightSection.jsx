import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReceipt,
  faTruck,
  faTag,
  faLock,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";


const RightSection = ({ cart ,onPlaceOrder, loading }) => {
  const DELIVERY_FEE = 0;
  const SERVICE_FEE = 0;
  const items = cart?.CartItems || [];
  const subtotal = items.reduce((sum, item) => {
    return sum + Number(item.subtotal);
  }, 0);

  return (
    <div className="col-span-2 h-fit rounded-3xl bg-gray-100 shadow-xl p-7 sticky top-28">
      <div className="flex items-center gap-3 mb-7">
        <div className="bg-emerald-50 text-[#004953] w-11 h-11 rounded-2xl flex items-center justify-center">
          <FontAwesomeIcon icon={faReceipt} />
        </div>
        <h2 className="text-2xl font-bold text-[#004953]">Order Summary</h2>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-3 text-gray-600">
            <span className="bg-emerald-50 text-[#004953] w-8 h-8 rounded-lg flex items-center justify-center">
              <FontAwesomeIcon icon={faTruck} className="text-sm" />
            </span>
            Delivery Fee
          </span>
          <span className="font-bold text-gray-800">
            ${DELIVERY_FEE.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-3 text-gray-600">
            <span className="bg-amber-50 text-amber-500 w-8 h-8 rounded-lg flex items-center justify-center">
              <FontAwesomeIcon icon={faTag} className="text-sm" />
            </span>
            Service Fee
          </span>
          <span className="font-bold text-gray-800">
            ${SERVICE_FEE.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="my-5 border-t border-dashed border-gray-300" />

      {/* Total */}
      <div className="flex justify-between items-center bg-emerald-50 rounded-2xl p-5">
        <span className="text-xl font-bold text-[#004953]">Total</span>
        <span className="text-2xl font-bold text-[#004953]">
          ${subtotal.toFixed(2)}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={onPlaceOrder}
        disabled={loading}
        className="w-full mt-6 bg-[#004953] text-white py-4 rounded-2xl text-lg font-semibold hover:bg-black transition flex items-center justify-center gap-3 disabled:opacity-60 disabled:hover:bg-[#004953]"
      >
        {loading ? (
          "Processing..."
        ) : (
          <>
            Complete Payment
            <FontAwesomeIcon icon={faChevronRight} />
          </>
        )}
      </button>

      <p className="mt-4 text-center text-gray-500 flex items-center justify-center gap-2 text-sm">
        <FontAwesomeIcon icon={faLock} />
        Secure Encrypted Transaction
      </p>

    </div>
  );
};

export default RightSection;
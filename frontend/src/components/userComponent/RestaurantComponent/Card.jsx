import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom";
import {PATH} from '../../../path.js';

const Card = ({cartitems,setcartitems}) => {
  const navigate=useNavigate()

  const subtotal = cartitems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryFee = 1.5;
  const serviceFee = 0.99;
  const total = subtotal + deliveryFee + serviceFee;

  const increaseQuantity = (id) => {
    setcartitems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };
  const decreaseQuantity = (id) => {
    setcartitems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-5 w-full max-w-md h-90 overflow-y-auto scroll-smooth ">
      <div className="bg-[#004953] rounded-2xl p-1 justify-center flex border border-[#004953]/10">
        <h3 className="font-bold text-white text-lg">
          Your Items
        </h3>

        <p className="text-gray-500 text-sm mt-1">
        </p>
      </div>

      <div className="mt-2 space-y-2 ">
        {cartitems.map((item) => (
          <div
            key={item.id}
            className="pb-2 border-b border-gray-100"
          >
            <div className="flex justify-between items-center gap-4">

              <div className="flex gap-4 flex-1 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />

                <div>
                  <h4 className="font-semibold text-lg">
                    {item.name}
                  </h4>

                  {item.option && (
                    <p className="text-gray-500 text-sm mt-1">
                      {item.option}
                    </p>
                  )}

                  <p className="font-bold text-[#004953] mt-3">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="flex items-center bg-gray-100 rounded-full p-1">
                <button onClick={()=>decreaseQuantity(item.id)}  className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <FontAwesomeIcon icon={faMinus} size={12} />
                </button>

                <span className="px-4 font-semibold">
                  {item.quantity}
                </span>

                <button onClick={()=>increaseQuantity(item.id)} className="w-9 h-9 rounded-full bg-[#004953] text-white flex items-center justify-center">
                  <FontAwesomeIcon icon={faPlus} size={12} />
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 space-y-1">

        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Delivery Fee</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Service Fee</span>
          <span>${serviceFee.toFixed(2)}</span>
        </div>

        <div className="border-t pt-4 flex justify-between">
          <span className="font-bold text-lg">
            Total
          </span>

          <span className="font-bold text-2xl text-[#004953]">
            ${total.toFixed(2)}
          </span>
        </div>

      </div>

      <button
        disabled={cartitems.length === 0}
        className={`w-full mt-6 py-4 rounded-2xl font-semibold transition-all duration-200
          ${
            cartitems.length === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#004953] hover:bg-[#00363d] hover:scale-[1.05] cursor-pointer text-white"
          }
        `}
        onClick={()=>navigate(PATH.USER.Checkout)}
      >
  Proceed to Checkout
</button>

    </div>
  );
};

export default Card;
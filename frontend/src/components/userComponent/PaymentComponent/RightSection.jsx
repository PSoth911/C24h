import { useNavigate } from "react-router-dom"
import {PATH} from "../../../path.js";
const RightSection = () => {
     const navigate = useNavigate()
    const order = {
    items: [
      {
        id: 1,
        name: "Truffle Burger",
        quantity: 1,
        price: 18.5,
      },
      {
        id: 2,
        name: "Pink Lemonade",
        quantity: 2,
        price: 5.5,
      },
      {
        id: 3,
        name: "Fries",
        quantity: 1,
        price: 4.5,
      },
    ],
    subtotal: 34,
    deliveryFee: 2.5,
    tax: 1.75,
    total: 38.25,
  };
  return (
    <div className="col-span-2 h-100 rounded-2xl p-5 shadow-2xl bg-gray-100">
      <h2 className="text-2xl py-2 font-bold">Order Summary</h2>
      <div>
        {order.items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between mt-1"
          >
            <p>
              {item.name} x {item.quantity}
            </p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
      <div className="border-y mt-4">
        <div className="flex justify-between">
          <p>Sub Total</p>
          <p>${order.subtotal}</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery Fee</p>
          <p>${order.deliveryFee}</p>
        </div>
        <div className="flex justify-between">
          <p>Tax</p>
          <p>${order.tax}</p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <p className="font-bold text-xl">Total</p>
        <p>${order.total}</p>
      </div>
      <div>
        <button onClick={()=>navigate(PATH.USER.SucessPayment)} className="p-2 border-2 bg-[#004953] text-white duration-200 hover:cursor-pointer rounded-2xl w-full mt-5 border-[#004953]">
          Complete Payment
        </button>
      </div>
      <p className="mt-5 text-center text-gray-500">Secure Encrypted Transaction</p>
    </div>
  );
};

export default RightSection;
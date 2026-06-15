import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBurger,
  faGlassWater,
} from "@fortawesome/free-solid-svg-icons";

const order = {
  restaurant: "Burger Blossom",
  orderId: "CRV-2025-9421",
  arrivingIn: "12:42",
  items: [
    {
      id: 1,
      name: "Double Truffle Burger",
      quantity: 2,
      note: "Extra cheese, No onions",
      icon: faBurger,
    },
    {
      id: 2,
      name: "Pink Lemonade Refresher",
      quantity: 1,
      note: "Regular size, Ice",
      icon: faGlassWater,
    },
  ],
};

const LeftSection = () => {
  return (
    <div className="w-full rounded-3xl border border-teal-700 bg-[#f6f5fb] p-2">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-medium text-gray-700">
            {order.restaurant}
          </h3>
          <p className="text-teal-700">
            Order #{order.orderId}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm tracking-widest text-teal-700">
            ARRIVING IN
          </p>

          <p className="text-xl font-bold text-teal-900">
            {order.arrivingIn}
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-2 overflow-y-auto scroll-smooth h-35">
        {order.items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 rounded-2xl bg-white p-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
              <FontAwesomeIcon
                icon={item.icon}
                className="text-teal-700"
              />
            </div>

            <div>
              <h4 className="font-medium text-gray-700">
                {item.name}
                {item.quantity > 1 && ` x${item.quantity}`}
              </h4>

              <p className="text-sm font-medium text-teal-700">
                {item.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSection;
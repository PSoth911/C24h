import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const Orders = ({ setactiveMenu }) => {
  const orders = [
    {
      id: 1,
      name: "Bella Napoli Pizzeria",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300",
      orderId: "#CRV-9283",
      NumberItem: 2,
      price: 34.5,
      status: "On its way",
      orderDate: "Estimated delivery: 12 mins",
      button: "Track Order",
    },
    {
      id: 2,
      name: "Burger Culture",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
      orderId: "#CRV-8142",
      NumberItem: 3,
      price: 42.2,
      status: "Delivered",
      orderDate: "Delivered on 14 Jan, 2025",
      button: "Reorder",
    },
  ];
  const Frestaurants =
    [
            {
              name: "Miku Japanese",
              image:
                "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400",
              rating: "4.9",
              reviews: "(1.2k+)",
              time: "25 min",
            },
            {
              name: "Green Leaf Salad",
              image:
                "https://exchangesquare.com.kh/wp-content/uploads/2024/07/brown.jpg",
              rating: "4.7",
              reviews: "(800+)",
              time: "15 min",
            },
            {
              name: "El Taco Loco",
              image:
                "https://kampot-cambodia.com/wp-content/uploads/2024/12/02-IMG20241111122730-1024x891.jpg",
              rating: "4.5",
              reviews: "(2.5k+)",
              time: "20 min",
            },
          ]

  const [select, setSelect] = useState("All");

  const filters = ["All", "Active", "Past"];
  const filteredOrders = orders.filter((order) => {
  if (select === "All") return true;

  if (select === "Active") {
    return order.status === "On its way";
  }
  if (select === "Past") {
    return order.status === "Delivered";
  }
  return true;
});

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-[#004953]">
          My Orders
        </h2>

        <div className="flex border border-[#004953] rounded-full p-1 w-72 bg-white">
          {filters.map((filter) => (
            <div
              key={filter}
              onClick={() => setSelect(filter)}
              className={`flex-1 text-center py-0.5 rounded-full cursor-pointer transition-all duration-300
              ${
                select === filter
                  ? "bg-[#004953] text-white"
                  : "text-gray-600"
              }`}
            >
              {filter}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white border border-[#004953] rounded-3xl p-1.5 flex justify-between hover:shadow-xl hover:scale-[1.01] transition-all duration-300 items-center"
          >
            <div className="flex items-center gap-5">
              <img
                src={order.image}
                alt={order.name}
                className="w-20 h-20 rounded-full object-cover"
              />

              <div>
                <h3 className="text-2xl font-bold text-[#004953]">
                  {order.name}
                </h3>

                <p className="text-[#004953]">
                  Order {order.orderId} • {order.NumberItem} items • $
                  {order.price}
                </p>

                <p className="text-sm text-[#004953] mt-3">
                  {order.orderDate}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-4">
              <span
                className={`px-4 py-1 rounded-full text-xs font-semibold
                ${
                  order.status === "Delivered"
                    ? "bg-purple-100 text-purple-700"
                    : "bg-pink-100 text-[#004953]"
                }`}
              >
                ● {order.status}
              </span>

              <button
                className={`px-8 py-2 rounded-full font-medium transition-all hover:cursor-pointer
                ${
                  order.status === "Delivered"
                    ? "bg-[#004953] text-white"
                    : "border border-[#004953] text-[#004953] bg-white"
                }`}
              >
                {order.button}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold text-[#004953] ">
            Favorite Restaurants
          </h2>
          <button onClick={() => setactiveMenu("Favourite")} className="text-[#004953] hover:underline hover:cursor-pointer  font-medium">
            View all
          </button>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {Frestaurants.map((restaurant, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-pink-200 shadow-sm hover:scale-[1.05] transition-all duration-300 hover:cursor-pointer"
            >
              <div className="relative">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-40 object-cover "
                />

                <button className="absolute top-3 right-3 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                  <FontAwesomeIcon icon={faHeart} className="text-red-600"/>
                </button>
              </div>

              <div className="p-2">
                <h3 className="font-bold text-2xl text-[#22223B]">
                  {restaurant.name}
                </h3>

                <div className="flex justify-between mt-3 text-sm text-[#004953]">
                  <span>
                     {restaurant.rating} {restaurant.reviews}
                  </span>

                  <span>{restaurant.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
import { useState } from "react";
import image14 from "../../../assets/image copy 14.png";
import image15 from "../../../assets/image copy 15.png";
import image16 from "../../../assets/image copy 16.png";
import image17 from "../../../assets/image copy 17.png";
import image18 from "../../../assets/image copy 18.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const BrowAllfood = () => {
  const [select, setselect] = useState("Nearby");
  const [loves, setLoves] = useState([false, false, false, false]);

  const toggleLove = (index) => {
    const updated = [...loves];
    updated[index] = !updated[index];
    setLoves(updated);
  };

  const filter = ["Nearby", "Popular", "Lowest Price"];

  const foods = [
    {
      image: image14,
      title: "Artisan Pepperoni",
      price: "14.50$",
      rating: "4.8 (120+ ratings)",
      time: "20-30 min",
    },
    {
      image: image15,
      title: "Classic Burger",
      price: "12.50$",
      rating: "4.7 (100+ ratings)",
      time: "15-25 min",
    },
    {
      image: image16,
      title: "Chicken Pizza",
      price: "16.50$",
      rating: "4.9 (150+ ratings)",
      time: "25-35 min",
    },
    {
      image: image17,
      title: "Seafood Pasta",
      price: "18.50$",
      rating: "4.8 (90+ ratings)",
      time: "20-30 min",
    },
    {
      image: image17,
      title: "Seafood Pasta",
      price: "18.50$",
      rating: "4.8 (90+ ratings)",
      time: "20-30 min",
    },
    {
      image: image17,
      title: "Seafood Pasta",
      price: "18.50$",
      rating: "4.8 (90+ ratings)",
      time: "20-30 min",
    },
  ];

  return (
    <div className="py-20 px-15 rounded-2xl bg-gray-300">
      <div className="flex justify-between p-5">
        <h1 className="font-bold text-[#004953] text-2xl">
          Browse all food
        </h1>

        <div className="flex gap-2 bg-white rounded-2xl text-black">
          {filter.map((item) => (
            <button
              key={item}
              onClick={() => setselect(item)}
              className={`transition-all ${
                select === item
                  ? "bg-[#004953] text-white rounded-2xl px-3 py-2"
                  : "bg-transparent rounded-3xl px-3 py-2"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="flex overflow-x-auto scrollbar-hide gap-4 p-4 relative ">
        {foods.map((food, index) => (
          <div
            key={index}
            className="bg-white shrink-0 overflow-hidden gap-2 p-5 rounded-4xl transition-all relative hover:scale-[1.03] hover:shadow-2xl"
          >
            <img
              src={food.image}
              className="w-66 h-49 object-cover rounded-t-2xl"
              alt={food.title}
            />

            <div className="absolute top-6 left-6 bg-transparent rounded-full">
              <FontAwesomeIcon
                icon={faHeart}
                onClick={() => toggleLove(index)}
                className={`cursor-pointer text-xl ${
                  loves[index]
                    ? "text-red-500"
                    : "text-slate-500"
                }`}
              />
            </div>

            <div className="flex items-center justify-between">
              <p className="font-bold text-lg">
                {food.title}
              </p>
              <p className="text-[#004953] font-bold">
                {food.price}
              </p>
            </div>

            <div className="flex gap-1.5 py-2 items-center justify-between">
              <img
                src={image18}
                className="w-5 h-5"
                alt=""
              />
              <p>{food.rating}</p>
              <p>. {food.time}</p>
            </div>

            <button className="w-full p-3.5 border border-[#004953] rounded-2xl transition-all hover:bg-[#004953] hover:cursor-pointer hover:text-white">
              ADD to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowAllfood;
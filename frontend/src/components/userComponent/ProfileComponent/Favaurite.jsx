
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const Favaurite = () => {
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
  return (
    <div>
      <div className="">
          <h1 className="text-2xl font-bold">Favourite Restaurants</h1>
          <p className="text-gray-400 text-sm">You have 12 saved restaurants in your list</p>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-2">
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
  )
}

export default Favaurite

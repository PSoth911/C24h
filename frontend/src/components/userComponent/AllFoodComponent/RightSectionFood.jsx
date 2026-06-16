import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {PATH} from "../../../path.js";
const RightSectionFood = () => {
    const [loves, setLoves] = useState([]);
    
      const toggleLove = (index) => {
        const updated = [...loves];
        updated[index] = !updated[index];
        setLoves(updated);
      };
    const restaurants = [
        {
            name: "Damnak Mahob Khmer",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/bc/21/19/damnak-mahob-khmer-restaurant.jpg?w=900&h=500&s=1",
            rating: 4.5,
            cuisine: "Cambodian",
            distance: "2.5 km away",
        },
        {
            name: "Bakong Restaurant & Cafe",
            image: "https://www.areacambodia.com/wp-content/uploads/2023/09/Bakong-Restaurant-Cafe-Simply-Delicious-Cambodian-Siem-Reap.jpg",
            rating: 4.8,
            cuisine: "Cambodian",
            distance: "3.2 km away",
        },
        {
            name: "Starbucks",
            image: "https://about.starbucks.com/wp-content/uploads/2019/01/oQXDSBzJ-5000-2813.jpg",
            rating: 4.6,
            cuisine: "Cafe",
            distance: "1.8 km away",
        },
        {
            name: "Browns Restaurant",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/c4/aa/92/caption.jpg?w=900&h=500&s=1",
            rating: 4.7,
            cuisine: "Cafe",
            distance: "2.1 km away",
        },
        {
            name: "Browns Restaurant",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/c4/aa/92/caption.jpg?w=900&h=500&s=1",
            rating: 4.7,
            cuisine: "Cafe",
            distance: "2.1 km away",
        },
        {
            name: "Browns Restaurant",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/c4/aa/92/caption.jpg?w=900&h=500&s=1",
            rating: 4.7,
            cuisine: "Cafe",
            distance: "2.1 km away",
        },
        {
            name: "Browns Restaurant",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/c4/aa/92/caption.jpg?w=900&h=500&s=1",
            rating: 4.7,
            cuisine: "Cafe",
            distance: "2.1 km away",
        },
        {
            name: "Browns Restaurant",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/c4/aa/92/caption.jpg?w=900&h=500&s=1",
            rating: 4.7,
            cuisine: "Cafe",
            distance: "2.1 km away",
        },
        {
            name: "Browns Restaurant",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/c4/aa/92/caption.jpg?w=900&h=500&s=1",
            rating: 4.7,
            cuisine: "Cafe",
            distance: "2.1 km away",
        },
        {
            name: "Browns Restaurant",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/c4/aa/92/caption.jpg?w=900&h=500&s=1",
            rating: 4.7,
            cuisine: "Cafe",
            distance: "2.1 km away",
        },
        {
            name: "Browns Restaurant",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/c4/aa/92/caption.jpg?w=900&h=500&s=1",
            rating: 4.7,
            cuisine: "Cafe",
            distance: "2.1 km away",
        },
        {
            name: "Browns Restaurant",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/c4/aa/92/caption.jpg?w=900&h=500&s=1",
            rating: 4.7,
            cuisine: "Cafe",
            distance: "2.1 km away",
        },
    ];
    const navigate =useNavigate()
  return (
    <div className="col-span-5 ">
        <div className="grid grid-cols-3 gap-3 pb-4 relative">
                    {restaurants.map((restaurant, index) => (
                        <div
                            onClick={()=>navigate(PATH.USER.Restaurant)}
                            key={index}
                            className="bg-white text-[#004953] shadow-md min-w-[24%] rounded-2xl overflow-hidden hover:cursor-pointer hover:scale-[1.01] transition-all relative "
                        >
                            <div className="overflow-hidden">
                                <img
                                src={restaurant.image}
                                alt={restaurant.name}
                                className="w-full h-48 object-cover rounded-t-2xl hover:scale-[1.05] transition-all"
                            />
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-semibold">
                                    {restaurant.name}
                                </h3>

                                <div className="flex justify-between mt-2">
                                    <p>{restaurant.cuisine}</p>
                                    <p>{restaurant.distance}</p>
                                </div>

                                <p className="text-[#004953] mt-2">
                                    Rating: {restaurant.rating}
                                </p>
                            </div>
                            <div className="absolute top-2 left-2 bg-transparent rounded-full">
                            <FontAwesomeIcon
                                icon={faHeart} onClick={() => toggleLove(index)}
                                className={`cursor-pointer text-xl ${loves[index] ? "text-red-500" : "text-slate-500"}`}/></div>
                        </div>
                    ))}
                </div>
      
    </div>
  )
}

export default RightSectionFood

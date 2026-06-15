
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Title = ({ status, name, img, dsc, fee, distance, minOrder }) => {
  const [like,setlike] =useState(false)
  return (
    <div className="w-full p-8">
      <div className="relative">
        <div className="h-55 rounded-xl overflow-hidden relative">
          <img src={img} alt="Restaurant" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex items-center justify-between px-12">
            <div className="flex items-center gap-8">
              <div className="w-52 h-30 rounded-2xl overflow-hidden border-2 border-yellow-500 shadow-lg">
                <img src={img} alt="logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-3 h-3 rounded-full ${status==="OPEN NOW" ? "bg-green-400" : "bg-red-400"}`} />
                  <span className="text-white text-sm font-medium">
                    {status === "OPEN NOW" ? "OPEN NOW" : "CLOSED"}
                  </span>
                </div>

                <h1 className="text-5xl font-serif text-white mb-3">
                  {name}
                </h1>

                <span className="bg-indigo-700 text-white text-xs px-3 py-1 rounded">
                  {dsc}
                </span>
              </div>
            </div>
          <div className="flex gap-4">
                <button onClick={()=>setlike((pre)=>!pre)} className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30">
                  <FontAwesomeIcon icon={faHeart} className={`w-7 h-7 ${like ? "text-red-600": "text-gray-600"}`} />
                </button>
                <button className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30">
                  <FontAwesomeIcon icon={faShareNodes} className="w-7 h-7 text-white" />
                </button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-2xl py-4 mx-8 -mt-4 relative">
          <div className="grid grid-cols-4 text-center">
            <div>
              <h3 className="uppercase text-gray-400 text-sm mb-2">
                Min Delivery
              </h3>
              <p className="text-teal-700 font-semibold text-lg">
                ${fee}
              </p>
            </div>

            <div className="border-l">
              <h3 className="uppercase text-gray-400 text-sm mb-2">Fee</h3>
              <p className="text-teal-700 font-semibold text-lg">
                ${fee}
              </p>
            </div>

            <div className="border-l">
              <h3 className="uppercase text-gray-400 text-sm mb-2">
                Distance
              </h3>
              <p className="text-teal-700 font-semibold text-lg">
                {distance} KM
              </p>
            </div>

            <div className="border-l">
              <h3 className="uppercase text-gray-400 text-sm mb-2">
                Min Order
              </h3>
              <p className="text-teal-700 font-semibold text-lg">
                {minOrder}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Title

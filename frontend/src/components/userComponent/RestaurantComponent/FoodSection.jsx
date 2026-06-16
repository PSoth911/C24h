
import LeftSection from "./LeftSection"
import RightSection from "../../userComponent/RestaurantComponent/RightSection"
import { useState } from "react";

const FoodSection = () => {
    const [activeCategory, setActiveCategory] = useState("Popular Items");
    const [cartitems, setcartitems] = useState([]);
  return (
    <div>
          <div>
          <div className="grid grid-cols-6 px-5 gap-8">
            <div className="col-span-2">
              <LeftSection
                activeCategory={activeCategory}
                cartitems={cartitems}
                setcartitems={setcartitems}
            />
            </div>
            <div className="col-span-4">
                <RightSection
                setActiveCategory={setActiveCategory}
                setcartitems={setcartitems}
            />
            </div>
            
          </div>
        </div>
      
    </div>
  )
}

export default FoodSection

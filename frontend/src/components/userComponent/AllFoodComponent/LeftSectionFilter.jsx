import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LeftSectionFilter = () => {
    const [showAll, setShowAll] = useState(false);
    const [price, setPrice] = useState(0);
    const [selectRate, setSelectRate] = useState(null)
    const [selecttype, setSelecttype] = useState("nearby");
    const categories = [
        "Pizza", "Burger", "Pasta", "Sushi", "Desserts", "Salads", "Seafood", "Vegan",
        "Indian", "Chinese", "Mexican", "Thai", "Mediterranean", "Breakfast", "Brunch",
        "Snacks", "Drinks", "Coffee", "Tea", "Juices", "Smoothies", "Ice Cream", "Baked Goods",
        "Grilled", "Fried", "Healthy", "Comfort Food"
    ];
    const filter = [
        {
            id: 1,
            name: "Nearby",
            value: "nearby"
        },
        {
            id: 2,
            name: "Popular",
            value: "popular"
        },
        {
            id: 3,
            name: "Lowest Price",
            value: "lowest_price"
        }
    ]
    const Rate = [
        "3+",
        "3.5+",
        "4+",
        "4.5+"
    ]
    return (
        <div className="col-span-2 gap-2 sticky top-10">
            <div>
                <div className=" flex flex-col bg-[#F5F2FF] p-2 rounded-2xl">
                    <div className=" bg-[#F5F2FF] overflow-y-auto w-full scrollbar-hide h-150 text-white py-4 px-3 ">
                        <div className="flex justify-between w-full">
                            <h2 className="text-[#004953] font-bold text-xl mb-2">Filters</h2>
                            <div className=" text-[#004953] font-bold ">Reset Filters</div>
                        </div>
                        <div className="flex gap-4 flex-col">
                            <p className="text-[#004953]">Categories</p>
                            <div className="text-[#004953]">
                                {(showAll ? categories : categories.slice(0, 5)).map(
                                    (category, index) => (
                                        <div key={index} className="flex items-center text-[#004953] gap-2 mb-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 " />
                                            <label>{category}</label>
                                        </div>
                                    )
                                )}
                                <button
                                    onClick={() => setShowAll(!showAll)} className="text-[#004953] cursor-pointer flex items-center gap-2 mt-2">
                                    {showAll ? "Show Less" : "Show More"}
                                    <FontAwesomeIcon icon={showAll ? faChevronUp : faChevronDown} />
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="text-[#004953] mt-4">Price range</div>
                            <input type="range" min="0" max="150" className="w-full text-[#004953] mt-2" value={price} onChange={(e) => setPrice(e.target.value)} />
                            <div className="flex items-center justify-between text-[#004953]">
                                <span>${price}</span>
                                <span>$100+</span>
                            </div>
                        </div>
                        <div>
                            <div className="text-[#004953] mt-4">Min. Rate</div>
                            <div className="flex items-center gap-4 mt-2">
                                {Rate.map((r) => (
                                    <span
                                        key={r}
                                        onClick={() => setSelectRate(r)}
                                        className={`px-5 py-1 border-2 border-[#004953] rounded-2xl cursor-pointer transition-all
                                        ${selectRate === r
                                                ? "bg-[#004953] text-white"
                                                : "bg-white text-black"
                                            }`}
                                    >
                                        {r}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="text-[#004953] mt-4">Filters by</div>
                            <div className="flex flex-col gap-2 mt-2 text-[#004953]">
                                {filter.map((item) => (
                                    <label key={item.id} className="flex items-center gap-3 cursor-pointer">
                                        <input type="radio" name="filter" value={item.value} checked={selecttype === item.value} onChange={(e) => setSelecttype(e.target.value)} className="hidden" />
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selecttype === item.value ? "border-[#004953]" : "border-[#004953]"}`}>
                                            {selecttype === item.value && (
                                                <div className="w-4 h-4 rounded-full bg-[#004953]"></div>
                                            )}
                                        </div>
                                        <span className="text-[#004953]">{item.name}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button className="w-full bg-[#004953] text-white p-2 mt-2 rounded-2xl hover:cursor-pointer hover:bg-black transition-all">Filter Now</button>
                </div>
            </div>

        </div>
    )
}

export default LeftSectionFilter

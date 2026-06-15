import { useEffect, useState } from "react";
import ItemModal from "../RestaurantComponent/ItemModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar
} from "@fortawesome/free-solid-svg-icons";

const RightSection = ({ setActiveCategory,setcartitems }) => {
    const [modalopen, setModalopen] = useState(false)
    const [selectFood, setSelectfood] = useState(null)
    const [qauntity,setQauntity]=useState(1)
    const reviews = [
        {
            id: 1,
            name: "Elena Martinez",
            rating: 5,
            comment:
                "The Truffle Avo Bliss is literally the best thing I've eaten all year. Delivery was super fast too!",
        },
        {
            id: 2,
            name: "James Dawson",
            rating: 4,
            comment:
                "Great coffee and the packaging is very premium. My pancakes were still warm when they arrived.",
        },
        {
            id: 3,
            name: "Sophia Brown",
            rating: 5,
            comment:
                "Amazing food quality and quick delivery. Highly recommended.",
        },
    ];
    const menuData = [
        {
            id: 1,
            name: "Truffle Avo Bliss",
            price: "14.50",
            dsc: "Double shot specialty roast with honeycomb-infused steamed milk.",
            type: "Popular Items",
            image:
                "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300",
        },
        {
            id: 2,
            name: "Velvet Acai Bowl",
            price: "11.20",
            dsc: "Double shot specialty roast with honeycomb-infused steamed milk.",
            type: "Popular Items",
            image:
                "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300",
        },
        {
            id: 3,
            name: "Signature Gold Latte",
            price: "5.50",
            dsc: "Double shot specialty roast with honeycomb-infused steamed milk.",
            type: "Popular Items",
            image:
                "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300",
        },
        {
            id: 4,
            name: "Buttermilk Stack",
            price: "12.80",
            dsc: "Double shot specialty roast with honeycomb-infused steamed milk.",
            type: "Popular Items",
            image:
                "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=300",
        },
        {
            id: 5,
            name: "Chef Special Steak",
            price: "24.50",
            dsc: "Premium steak cooked to perfection.",
            type: "Signatures",
            image:
                "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
        },
        {
            id: 6,
            name: "Truffle Pasta",
            price: "18.50",
            dsc: "Fresh handmade pasta with truffle sauce.",
            type: "Signatures",
            image:
                "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300",
        },
        {
            id: 7,
            name: "French Fries",
            price: "4.50",
            dsc: "Crispy golden fries.",
            type: "Side",
            image:
                "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300",
        },
        {
            id: 8,
            name: "Onion Rings",
            price: "5.50",
            dsc: "Crunchy onion rings.",
            type: "Side",
            image:
                "https://images.unsplash.com/photo-1639024471283-03518883512d?w=300",
        },
        {
            id: 9,
            name: "Iced Latte",
            price: "5.90",
            dsc: "Cold brew coffee with milk.",
            type: "Drink",
            image:
                "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300",
        },
        {
            id: 10,
            name: "Matcha Latte",
            price: "6.50",
            dsc: "Premium Japanese matcha.",
            type: "Drink",
            image:
                "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300",
        },
        {
            id: 11,
            name: "Green Vegan Bowl",
            price: "9.90",
            dsc: "Healthy vegan bowl.",
            type: "Vegan",
            image:
                "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300",
        },
        {
            id: 12,
            name: "Vegan Burger",
            price: "11.90",
            dsc: "Plant-based burger.",
            type: "Vegan",
            image:
                "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=300",
        },
        {
            id: 13,
            name: "Green Vegan Bowl",
            price: "9.90",
            dsc: "Healthy vegan bowl.",
            type: "Vegan",
            image:
                "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300",
        },
        {
            id: 14,
            name: "Vegan Burger",
            price: "11.90",
            dsc: "Plant-based burger.",
            type: "Vegan",
            image:
                "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=300",
        },
        {
            id: 15,
            name: "Green Vegan Bowl",
            price: "9.90",
            dsc: "Healthy vegan bowl.",
            type: "Vegan",
            image:
                "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300",
        },
        {
            id: 16,
            name: "Vegan Burger",
            price: "11.90",
            dsc: "Plant-based burger.",
            type: "Vegan",
            image:
                "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=300",
        },
    ];
    const Stars = ({ count }) => {
        return [...Array(count)].map((_, i) => (
            <FontAwesomeIcon className="text-blue-500" key={i} icon={faStar} />
        ));
        };

    const categories = [...new Set(menuData.map((item) => item.type))];

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[data-category]");
            let currentCategory = "";

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();

                if (rect.top <= 120) {
                    currentCategory = section.id;
                }
            });

            if (currentCategory) {
                setActiveCategory(currentCategory);
            }
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [setActiveCategory]);

    return (
        <div className="flex-1 space-y-12">
            {categories.map((category) => (<section
                key={category}
                id={category}
                data-category
                className="scroll-mt-5"
            > <h2 className="text-2xl font-bold mb-5 text-[#004953]">
                    {category} </h2>

                <div className="grid lg:grid-cols-2 gap-5">
                    {menuData
                        .filter((food) => food.type === category)
                        .map((food) => (
                            <div
                                key={food.id}
                                className="bg-white shadow-lg transition-all border-l-4  border-[#004953] rounded-xl p-3 flex gap-4"
                            >
                                <img
                                    src={food.image}
                                    alt={food.name}
                                    className="w-24 h-24 rounded-lg object-cover"
                                />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg">
                                        {food.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-1">
                                        {food.dsc}
                                    </p>
                                    <div className="flex justify-between items-center mt-4">
                                        <span className="font-semibold text-[#004953]">
                                            ${food.price}
                                        </span>

                                        <button onClick={() => {
                                            setSelectfood(food)
                                            setQauntity(1)
                                            setModalopen(true)
                                        }}
                                            className="text-black text-sm transition-all duration-150 hover:bg-[#004953] py-1.5 px-6 border hover:scale-[1.05] hover:cursor-pointer rounded-lg hover:text-white">
                                            ADD
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </section>
            ))}
            <ItemModal
                isOpen={modalopen}
                food={selectFood}
                qauntity={qauntity}
                setqauntity={setQauntity}
                setcartitems={setcartitems}
                onClose={() => {
                    setModalopen(false),
                    setSelectfood(null)
                }}
            />

            <section className="bg-white rounded-2xl p-4 border-l-4 border-[#004953] shadow-lg">
                <h2 className="text-2xl font-bold text-[#004953] mb-4">
                    About The Velvet Gourmet
                </h2>

                <p className="text-gray-600 leading-8">
                    Established in 2018, The Velvet Gourmet has become a sanctuary for those who appreciate the finer details of modern culinary art. We focus on locally sourced ingredients, sustainable practices, and a menu that evolves with the seasons. Every dish is a labor of love, crafted by our award-winning chefs.
                </p>
                <div className="flex justify-evenly font-bold">
                    <div>Address</div>
                    <div>Contact</div>
                </div>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6">
                    Recent Reviews
                </h2>
                <div className="space-y-6 ">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className=" border-b pb-4 last:border-b-0"
                        >
                            <h3 className="flex items-center gap-2 font-semibold">
                                {review.name} <Stars count={review.rating}/>
                            </h3>

                            <p className="text-gray-600 mt-2">
                                {review.comment}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>

    );
};

export default RightSection;

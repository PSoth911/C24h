import image20 from "../../../assets/image copy 20.png";

const Tredingfood = () => {
  const foods = [
    {
      image: "https://www.truefoodkitchen.com/wp-content/uploads/2024/09/Blueberry-Pancakes.jpg",
      orders: "450+ Orders today",
      title: "Dim Sum Palace",
      desc: "Authentic Cantonese flavors & artisanal",
    },
    {
      image: "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/rockcms/2025-08/250806-processed-food-vl-pizza-burger-vl-343-0eaa45.jpg",
      orders: "320+ Orders today",
      title: "The Greek Garden",
      desc: "Fresh, healthy, and vibrant...",
    },
    {
      image: "https://www.flavoursholidays.co.uk/wp-content/uploads/2024/09/Bl-what-to-eat-marrakech-TI.jpg",
      orders: "280+ Orders today",
      title: "Mille-Feuille",
      desc: "Delicate layers of pastry and cream...",
    },
    {
      image: "https://www.bhg.com/thmb/S41ksi2OHuaD_m1NFKDlVzjUiMQ=/4000x0/filters:no_upscale():strip_icc()/million-dollar-dip-6715_preview-ac51a3f2a76c47eda35e5fcb7c3784c7.jpg",
      orders: "510+ Orders today",
      title: "Taco Fiesta",
      desc: "Authentic street tacos with a modern...",
    },
  ];

  return (
    <div className="px-15 mt-10 rounded-2xl py-20 bg-gray-300">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <img src={image20} className="w-5 h-3" alt="" />
          <h1 className="text-3xl font-bold text-[#004953]">
            Trending Now
          </h1>
        </div>

        <div className="bg-gray-400 text-[#004953] px-5 py-2 rounded-full text-sm font-medium">
          Flash Deals Ending Soon
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide p-2 ">
        {foods.map((food, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-md min-w-[31%] shrink-0 overflow-hidden relative cursor-pointer hover:scale-105 transition duration-500"
          >
            <div className="h-60">
              <img
                src={food.image}
                alt={food.title}
                className=" w-full h-full object-cover transition duration-500 "
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="inline-block bg-pink-600 px-4 py-1 rounded-full text-xs font-semibold mb-3">
                {food.orders}
              </div>

              <h2 className="text-2xl font-bold mb-1">
                {food.title}
              </h2>

              <p className="text-sm text-gray-200">
                {food.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tredingfood;
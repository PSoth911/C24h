const SuperfastDelivery = () => {
    const foods = [
        {
            image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            Time: "30 mins",
            name: "Dim Sum Palace",
            type: "Cambodian",
            distance: "0.5 km",
        },
        {
            image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            Time: "30 mins",
            name: "Dim Sum Palace",
            type: "Cambodian",
            distance: "0.5 km",
        },
        {
            image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            Time: "30 mins",
            name: "Dim Sum Palace",
            type: "Cambodian",
            distance: "0.5 km",
        },
        {
            image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            Time: "30 mins",
            name: "Dim Sum Palace",
            type: "Cambodian",
            distance: "0.5 km",
        },
        {
            image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            Time: "30 mins",
            name: "Dim Sum Palace",
            type: "Cambodian",
            distance: "0.5 km",
        }
    ]
    return (
        <div>
            <div className="px-10 rounded-2xl py-20 bg-gray-200 mt-10">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl text-[#004953] font-bold p-4">
                        Superfast Delivery
                    </h1>
                    <button className="bg-[#004953] text-white px-4 py-2 rounded-full hover:bg-black hover:text-white hover:cursor-pointer transition-colors">
                        View All fast eats
                    </button>
                </div>
                <div className=" flex gap-6 overflow-x-auto scrollbar-hide py-2 pb-4">
                    {foods.map((item) => (
                        <button
                            key={item.name}
                            className={`${item.name} relative min-w-[24%] shrink-0 bg-white rounded-3xl p-4 flex flex-col gap-2 items-center transition-all hover:scale-[1.03] hover:shadow-xl`}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-60 h-60 object-cover rounded-2xl transition-all hover:scale-[1.01]"
                            />
                                <p className="text-sm absolute top-6 right-10 text-white bg-[#004953] px-2 py-1 rounded-full font-semibold">
                                    {item.Time}
                                </p>
                             <h2 className="text-lg text-[#004953] font-bold">
                                {item.name}
                            </h2>
                            <p className="text-sm text-[#004953]">
                                {item.type} • {item.distance}
                            </p>
                        </button>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default SuperfastDelivery

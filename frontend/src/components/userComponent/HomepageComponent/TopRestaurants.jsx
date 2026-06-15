const TopRestaurants = () => {
    const restaurant = [
        {
            rank: 1,
            name: "EMab Restaurant",
            image: "https://d122axpxm39woi.cloudfront.net/images/destinations/origin/phnom-penh-6441129734550.jpg",
            orders: "1200+ Orders today",
            description: "A mouthwatering gourmet burger with juicy beef patty, ",
            title: "Gourmet Burger",
        },
        {
            rank: 2,
            name: "Browns Restaurant",
            image: "https://images.deliveryhero.io/image/fd-kh/LH/gxk6-hero.jpg?width=512&height=384&quality=45",
            orders: "1200+ Orders today",
            description: "A mouthwatering gourmet burger with juicy beef patty, ",
            title: "Gourmet Burger",
        },
        {
            rank: 3,
            name: "Starbucks Coffee",
            image: "https://i.insider.com/6949b8fd64858d02d21747d6?width=700",
            orders: "1200+ Orders today",
            description: "A mouthwatering gourmet burger with juicy beef patty, ",
            title: "Gourmet Burger",
        },
        {
            rank: 4,
            name: "Flavorful Bites",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/c4/aa/92/caption.jpg?w=900&h=500&s=1",
            orders: "1200+ Orders today",
            description: "A mouthwatering gourmet burger with juicy beef patty, ",
            title: "Gourmet Burger",
        },
        {
            rank: 5,
            name: "Savory Delights",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/c4/aa/92/caption.jpg?w=900&h=500&s=1",
            orders: "1200+ Orders today",
            description: "A mouthwatering gourmet burger with juicy beef patty, ",
            title: "Gourmet Burger",
        },
    ]
    return (
        <div>
            <div className="px-15 py-20 mt-10 rounded-2xl bg-gray-300">
                <h1 className="text-3xl text-[#004953] font-bold mb-8">
                    World-Class Dining Experience
                </h1>

                <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-4">
                    {restaurant.map((item) => (
                        <div
                            key={item.rank}
                            className="relative min-w-[24%] shrink-0 overflow-hidden rounded-3xl group"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-100 h-80 object-cover transition-all duration-500 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent"></div>

                            <div className="absolute top-4 left-4 bg-[#004953] text-white px-4 py-1 rounded-full font-bold">
                                #{item.rank}
                            </div>

                            <div className="absolute bottom-24 left-4">
                                <div className="bg-[#004953] text-white text-xs px-4 py-1 rounded-full">
                                    {item.orders}
                                </div>
                            </div>

                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <h2 className="text-2xl font-bold">
                                    {item.name}
                                </h2>

                                <p className="text-sm text-gray-200">
                                    {item.title}
                                </p>

                                <p className="text-sm text-gray-300 mt-1 ">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default TopRestaurants

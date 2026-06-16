const FeaturedRestaurants = () => {
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
        }
    ];

    return (
        <div>
            <div className="px-10 mt-10 py-20 bg-[#FFF8EF] rounded-2xl">
                <h2 className="text-2xl text-[#004953] font-bold mb-4">Featured Restaurants</h2>
                <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
                    {restaurants.map((restaurant, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md min-w-[24%] shrink-0 overflow-hidden"
                        >
                            <img
                                src={restaurant.image}
                                alt={restaurant.name}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-4">
                                <h3 className="text-lg font-semibold">
                                    {restaurant.name}
                                </h3>

                                <div className="flex justify-between mt-2 text-[#004953]">
                                    <p>{restaurant.cuisine}</p>
                                    <p>{restaurant.distance}</p>
                                </div>

                                <p className="text-[#004953] mt-2">
                                    Rating: {restaurant.rating} ⭐
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default FeaturedRestaurants

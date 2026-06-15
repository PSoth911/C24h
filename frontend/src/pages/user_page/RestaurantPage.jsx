import Nav from '../../components/userComponent/HomepageComponent/Navbar'
import Title from '../../components/userComponent/RestaurantComponent/Title'
import FoodSection from '../../components/userComponent/RestaurantComponent/FoodSection'
import Footer from '../../components/userComponent/HomepageComponent/Footer';

const RestaurantPage = () => {

  const restaurants = [
    {
      id: 1,
      name: "The Velvet Gourmet",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      logo: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=300",
      description: "Modern fusion cuisine with artisanal bakery selections and premium coffee.",
      status: "CLOSE",
      cuisine: "Modern Fusion",
      rating: 4.8,
      fee: 3.5,
      minOrder: 15,
      deliveryTime: "20–30 min",
      distance: "1.2 KM",
    }
  ];

  const restaurant = restaurants[0]; // ✅ pick single restaurant

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />

      <div className='px-10'>
        <Title
          status={restaurant.status}
          name={restaurant.name}
          img={restaurant.image}
          dsc={restaurant.description}
          fee={restaurant.fee}
          distance={restaurant.distance}
          minOrder={restaurant.minOrder}
        />

        <FoodSection />
      </div>

      <div className='mt-15'>
        <Footer />
      </div>
    </div>
  );
};

export default RestaurantPage;
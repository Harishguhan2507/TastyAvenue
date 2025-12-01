import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";
import FoodCard from "../../../components/FoodCard";
import restaurentLogo from "../../../assets/restaurantLogo.png";
import { homePageProducts } from "../../../Util/data";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://i.pinimg.com/736x/36/db/8c/36db8c5d77417ac8342799b7cd68422e.jpg",
    "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1200&h=600&fit=crop",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="text-4xl">
      <Navbar />
      <div className="relative h-screen overflow-hidden">
        {/* Image Slider */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Welcome to{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-[#ea580c]"
              >
                TastyAvenue
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              Discover delicious flavors and unforgettable dining experiences
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
              >
                View Menu
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Order Now
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[#ea580c]"
                  : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="flex justify-center items-center">
          <img src={restaurentLogo} alt="Restaurant Logo" />
        </div>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl -mt-16 md:text-5xl font-bold text-center md:-mt-20 text-[#ea580c]">
            Our Special Dishes
          </h1>
          <p className="text-lg md:text-xl py-5 text-center text-gray-600 max-w-4xl mx-auto">
            From classic favorites to modern culinary creations, our menu is
            designed to tantalize your taste buds. Every dish is made with the
            freshest ingredients and an extra dash of love.
          </p>

          {/* Food Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {homePageProducts.map((product) => (
              <FoodCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={parseFloat(product.price)}
                image={product.image}
                rating={parseFloat(product.rating)}
                category={product.category}
                onAddToCart={(id) => console.log(`Added item ${id} to cart`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

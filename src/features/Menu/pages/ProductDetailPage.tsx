import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaClock, FaUtensils, FaFire, FaStar, FaHeart, FaShare } from 'react-icons/fa';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import FoodCard from '../../../components/FoodCard';
import { homePageProducts } from '../../../Util/data';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = homePageProducts.find(p => p.id === parseInt(id || '0'));
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Mock data for additional content
  const ingredients = [
    'Fresh tomatoes', 'Mozzarella cheese', 'Basil leaves', 'Olive oil', 'Garlic', 'Sea salt'
  ];

  const nutrition = {
    calories: '285 kcal',
    protein: '12g',
    carbs: '36g',
    fat: '9g',
    fiber: '2g'
  };

  const reviews = [
    { name: 'Sarah Johnson', rating: 5, comment: 'Absolutely delicious! The flavors are incredible.', date: '2024-01-15' },
    { name: 'Mike Chen', rating: 4, comment: 'Great quality ingredients. Will order again!', date: '2024-01-12' },
    { name: 'Emma Davis', rating: 5, comment: 'Perfect for family dinner. Kids loved it!', date: '2024-01-10' }
  ];

  const relatedProducts = homePageProducts.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 3);

  if (!product) {
    return (
      <div>
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen flex items-center justify-center"
        >
          <h1 className="text-2xl text-gray-600">Product not found</h1>
        </motion.div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen py-16 px-4 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          {/* Product Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 p-8"
              >
                <div className="absolute top-4 right-4 flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                  >
                    <FaHeart className="text-gray-400 hover:text-red-500 transition-colors" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                  >
                    <FaShare className="text-gray-400 hover:text-blue-500 transition-colors" />
                  </motion.button>
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                />
                <div className="mt-4 flex items-center justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <FaClock className="text-orange-500" />
                    <span>15-20 min prep</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaUtensils className="text-orange-500" />
                    <span>Serves 2</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaFire className="text-orange-500" />
                    <span>Medium spice</span>
                  </div>
                </div>
              </motion.div>

              {/* Details Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="p-8 flex flex-col justify-center"
              >
                <div className="mb-4">
                  <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {product.category}
                  </span>
                </div>

                <h1 className="text-4xl font-bold mb-4 text-gray-800">
                  {product.name}
                </h1>

                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-lg ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="ml-2 text-lg font-semibold text-gray-700">{product.rating}</span>
                  </div>
                  <span className="text-gray-500">({reviews.length} reviews)</span>
                </div>

                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-bold text-[#ea580c]">${product.price}</span>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 text-gray-600 hover:text-gray-800"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 border-x">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-2 text-gray-600 hover:text-gray-800"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-[#ea580c] to-[#c2410c] hover:from-[#c2410c] hover:to-[#ea580c] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Add to Cart - ${(product.price * quantity).toFixed(2)}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-[#ea580c] text-[#ea580c] rounded-full font-semibold text-lg hover:bg-[#ea580c] hover:text-white transition-all duration-300"
                  >
                    Order Now
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Tabs Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
          >
            <div className="border-b">
              <div className="flex">
                {['description', 'ingredients', 'nutrition', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 font-medium capitalize transition-colors ${
                      activeTab === tab
                        ? 'text-[#ea580c] border-b-2 border-[#ea580c]'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-8">
              {activeTab === 'description' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="prose max-w-none"
                >
                  <h3 className="text-2xl font-bold mb-4">About This Dish</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {product.description} This carefully crafted dish combines the finest ingredients
                    with traditional cooking techniques to deliver an unforgettable dining experience.
                    Each component is selected with care to ensure maximum flavor and quality.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Perfect for lunch, dinner, or special occasions, this dish is sure to impress
                    your guests and satisfy your cravings for authentic, delicious cuisine.
                  </p>
                </motion.div>
              )}

              {activeTab === 'ingredients' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h3 className="text-2xl font-bold mb-4">Fresh Ingredients</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {ingredients.map((ingredient, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-orange-50 p-4 rounded-lg text-center"
                      >
                        <span className="text-gray-700 font-medium">{ingredient}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'nutrition' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h3 className="text-2xl font-bold mb-4">Nutritional Information</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {Object.entries(nutrition).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg text-center"
                      >
                        <div className="text-2xl font-bold text-green-600">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key}</div>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    * Nutritional values may vary based on portion size and preparation method.
                  </p>
                </motion.div>
              )}

              {activeTab === 'reviews' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
                  <div className="space-y-6">
                    {reviews.map((review, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border-b pb-6 last:border-b-0"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">{review.name}</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <FaStar
                                  key={i}
                                  className={`text-sm ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">You Might Also Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <FoodCard
                    key={relatedProduct.id}
                    id={relatedProduct.id}
                    name={relatedProduct.name}
                    description={relatedProduct.description}
                    price={parseFloat(relatedProduct.price)}
                    image={relatedProduct.image}
                    rating={parseFloat(relatedProduct.rating)}
                    category={relatedProduct.category}
                    onAddToCart={(id) => console.log(`Added item ${id} to cart`)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
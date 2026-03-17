import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaSortAmountDown, FaUtensils } from 'react-icons/fa';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import FoodCard from '../../../components/FoodCard';
import { homePageProducts } from '../../../Util/data';

const MenuPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(homePageProducts.map(product => product.category))];
    return cats;
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = homePageProducts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.price) - parseFloat(b.price);
        case 'price-high':
          return parseFloat(b.price) - parseFloat(a.price);
        case 'rating':
          return parseFloat(b.rating) - parseFloat(a.rating);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-20"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FaUtensils className="text-6xl mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Our Delicious Menu
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover culinary excellence with our carefully crafted dishes
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Filters and Search Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white shadow-lg py-8"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <FaSortAmountDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Menu Items Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {selectedCategory === 'All' ? 'All Dishes' : `${selectedCategory} Dishes`}
          </h2>
          <p className="text-gray-600">
            {filteredProducts.length} dish{filteredProducts.length !== 1 ? 'es' : ''} found
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </motion.div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <FoodCard
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={parseFloat(product.price)}
                  image={product.image}
                  rating={parseFloat(product.rating)}
                  category={product.category}
                  onAddToCart={(id) => console.log(`Added item ${id} to cart`)}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <FaUtensils className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No dishes found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Menu Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">{homePageProducts.length}</div>
              <div className="text-gray-600">Total Dishes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">{categories.length - 1}</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">
                ${(homePageProducts.reduce((sum, product) => sum + parseFloat(product.price), 0) / homePageProducts.length).toFixed(2)}
              </div>
              <div className="text-gray-600">Avg Price</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">
                {(homePageProducts.reduce((sum, product) => sum + parseFloat(product.rating), 0) / homePageProducts.length).toFixed(1)}
              </div>
              <div className="text-gray-600">Avg Rating</div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default MenuPage;

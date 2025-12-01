import { motion } from "framer-motion";
import { FaCartPlus, FaStar } from "react-icons/fa";

interface FoodCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  onAddToCart?: (id: number) => void;
}

const FoodCard: React.FC<FoodCardProps> = ({
  id,
  name,
  description,
  price,
  image,
  rating,
  category,
  onAddToCart,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-3 left-3 bg-[#ea580c] text-white px-2 py-1 rounded-full text-xs font-semibold">
          {category}
        </div>
        <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded-full flex items-center gap-1">
          <FaStar className="text-yellow-400 text-sm" />
          <span className="text-sm font-semibold">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-[#ea580c]">
            ${price.toFixed(2)}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAddToCart?.(id)}
            className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors duration-300"
          >
            <FaCartPlus className="text-sm" />
            <span className="text-sm font-semibold">Add</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
            >
              TastyAvenue
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-6 leading-relaxed"
            >
              Discover delicious flavors and unforgettable dining experiences. Join us on a culinary journey that tantalizes your taste buds and creates lasting memories.
            </motion.p>
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaFacebookF className="text-white text-sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaTwitter className="text-white text-sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaInstagram className="text-white text-sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaYoutube className="text-white text-sm" />
              </a>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 inline-block">Home</a></li>
              <li><a href="/menu" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 inline-block">Menu</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 inline-block">About</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1 inline-block">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start">
                <span className="text-orange-400 mr-2">📍</span>
                123 Food Street, Flavor City
              </p>
              <p className="flex items-start">
                <span className="text-orange-400 mr-2">📞</span>
                (123) 456-7890
              </p>
              <p className="flex items-start">
                <span className="text-orange-400 mr-2">✉️</span>
                info@tastyavenue.com
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} TastyAvenue. All rights reserved. Made with ❤️ for food lovers.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
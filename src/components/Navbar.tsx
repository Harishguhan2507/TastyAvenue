import { LuChefHat } from "react-icons/lu";
import { FaCartShopping } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import CustomButton from "./CustomButton";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex justify-between items-center shadow-md p-4">
        <div className="flex items-center">
          <div className="bg-[#ea580c]  rounded-2xl px-2 py-2">
            <LuChefHat className="text-5xl text-white cursor-pointer" />
          </div>
          <div className="hidden md:block">
            <Link to="/" className="text-2xl font-bold ml-4 text-gray-700">
              TastyAvenue
            </Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-xl text-gray-700 relative group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#ea580c] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/menu" className="text-xl text-gray-700 relative group">
            Menu
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#ea580c] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="text-xl text-gray-700 relative group">
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#ea580c] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="text-xl text-gray-700 relative group">
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#ea580c] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
        {/* Desktop Cart */}
        <div className="hidden md:flex items-center gap-4">
          <CustomButton
            text="Cart"
            className="!p-2 !px-4 !py-2 text-sm"
            icon={<FaCartShopping />}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-4 space-y-4">
          <Link
            to="/"
            className="text-xl text-gray-700 py-2 border-b border-gray-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="text-xl text-gray-700 py-2 border-b border-gray-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="text-xl text-gray-700 py-2 border-b border-gray-200"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-xl text-gray-700 py-2 border-b border-gray-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-2">
            <CustomButton
              text="Cart"
              className="!p-2 !px-4 !py-2 text-sm w-full"
              icon={<FaCartShopping />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

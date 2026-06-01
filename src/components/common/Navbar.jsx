import React from "react";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-[#F9A826] flex items-center justify-center font-bold text-xl">
              N
            </div>

            <h1 className="text-2xl font-bold text-[#0B1020]">
              Nexora
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            <li className="cursor-pointer hover:text-[#F9A826] transition">
              Home
            </li>

            <li className="cursor-pointer hover:text-[#F9A826] transition">
              Shop
            </li>

            <li className="cursor-pointer hover:text-[#F9A826] transition">
              Categories
            </li>

            <li className="cursor-pointer hover:text-[#F9A826] transition">
              Contact
            </li>
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-5 text-lg">
            <FaSearch className="cursor-pointer hover:text-[#F9A826]" />
            <FaHeart className="cursor-pointer hover:text-[#F9A826]" />

            <div className="relative">
              <FaShoppingCart className="cursor-pointer hover:text-[#F9A826]" />

              <span className="absolute -top-2 -right-2 bg-[#F9A826] text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                2
              </span>
            </div>

            <FaUser className="cursor-pointer hover:text-[#F9A826]" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
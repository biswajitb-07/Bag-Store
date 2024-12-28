import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaVimeoV } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const getNavLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#FFCD05" : "",
    };
  };

  return (
    <div className="bg-[#131313] min-h-20 text-white">
      <div className="max-w-[78rem] mx-auto px-6 flex flex-col gap-5 md:flex-row justify-between items-center py-8">
        {/* Social Media Icons */}
        <div className="flex space-x-4 text-gray-400">
          <FaFacebookF className="hover:text-yellow-500 transition-all duration-200 ease-in-out cursor-pointer" />
          <FiX className="hover:text-yellow-500 transition-all duration-200 ease-in-out cursor-pointer" />
          <FaInstagram className="hover:text-yellow-500 transition-all duration-200 ease-in-out cursor-pointer" />
          <FaPinterestP className="hover:text-yellow-500 transition-all duration-200 ease-in-out cursor-pointer" />
          <FaYoutube className="hover:text-yellow-500 transition-all duration-200 ease-in-out cursor-pointer" />
          <FaVimeoV className="hover:text-yellow-500 transition-all duration-200 ease-in-out cursor-pointer" />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 font-bold text-gray-400 text-[12px]">
          <NavLink to="/shop" style={getNavLinkStyle} className="hover:text-yellow-500 transition-all duration-200 ease-in-out">COLLECTION</NavLink>
          <NavLink to="/contact" style={getNavLinkStyle} className="hover:text-yellow-500 transition-all duration-200 ease-in-out">CONTACT US</NavLink>
          <NavLink to="/about" style={getNavLinkStyle} className="hover:text-yellow-500 transition-all duration-200 ease-in-out">ABOUT US</NavLink>
        </div>
      </div>
    </div>
  );
};

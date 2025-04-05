import React, { useState } from "react";
import NavItem from "./NavItem";
import logoImg from "/images/logo.jpg";
import { HiDotsVertical } from "react-icons/hi";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-black text-white p-4 shadow-md flex justify-between items-stretch border-b border-gray-500 w-full relative h-16">
      <div className="flex items-center space-x-4 h-full">
        <div className="flex items-center h-full">
          <img src={logoImg} alt="Logo" className="h-8 mr-4" />
          <span className="text-lg font-bold">VertxLabs, Inc</span>
        </div>

        <div className="h-full w-px bg-gray-500 hidden md:block"></div>

        <nav className="hidden md:flex items-center space-x-6 h-full">
          <NavItem>Analytics</NavItem>
        </nav>
      </div>

      <nav className="hidden md:flex items-center space-x-6 h-full">
        <div className="h-full w-px bg-gray-500"></div>
        <NavItem>Activity</NavItem>

        <div className="h-full w-px bg-gray-500"></div>

        <NavItem>Log out</NavItem>
      </nav>

      {/* Mobile Dropdown */}
      <div className="md:hidden relative flex items-center h-full">
        <button
          onClick={toggleDropdown}
          className="text-white hover:text-gray-300 focus:outline-none h-full flex items-center justify-center"
        >
          <HiDotsVertical className="w-6 h-6" />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 top-full mt-2 bg-black border border-gray-600 rounded-lg shadow-md z-20 w-40">
            <div
              onClick={toggleDropdown}
              className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
            >
              Analytics
            </div>
            <div
              onClick={toggleDropdown}
              className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
            >
              Activity
            </div>
            <div
              onClick={toggleDropdown}
              className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
            >
              Log out
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

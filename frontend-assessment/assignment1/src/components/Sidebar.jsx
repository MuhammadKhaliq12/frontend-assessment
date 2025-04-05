import React, { useEffect, useState } from "react";
import profileImg from "/images/profile.jpg";
import { FiPlus } from "react-icons/fi";

const Sidebar = () => {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight === scrollHeight) {
      setIsScrolledToBottom(true);
    } else {
      setIsScrolledToBottom(false);
    }
  };

  return (
    <aside
      className="absolute bg-black text-white z-50 flex flex-col md:flex-row border-r md:border-r border-b md:border-b-0 border-gray-500 w-full md:w-auto h-full"
      onScroll={handleScroll}
    >
      {/* Left Profile Section */}
      <div className="w-full md:w-14 flex md:flex-col items-center justify-between pt-4 pb-4 border-b md:border-b-0 md:border-r border-gray-500">
        <div className="flex md:flex-col items-center space-x-2 md:space-x-0 md:space-y-1">
          <img
            src={profileImg}
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <span className="w-2 h-2 bg-green-500 rounded-full" />
        </div>
      </div>

      {/* Right Navigation Section */}
      <div className="flex flex-row md:flex-col justify-start items-center md:items-start pl-4 md:pl-6 pt-2 md:pt-6 space-x-4 md:space-x-0 md:space-y-4 w-full md:w-36">
        <div className="text-md text-gray-500">Dashboard</div>
        <div className="text-md font-semibold text-white">Analytics</div>
        <div className="text-md text-gray-500">Connect</div>
        <div className="text-md text-gray-500">Dealroom</div>
        <div className="text-md text-gray-500">Profile</div>
        <div className="text-md text-gray-500">Settings</div>
      </div>

      {/* Plus Icon */}
      <button
        className={`${
          isScrolledToBottom ? "block" : "hidden"
        } absolute left-4 bottom-4 text-gray-400 hover:text-white md:block`}
      >
        <FiPlus size={20} />
      </button>
    </aside>
  );
};

export default Sidebar;

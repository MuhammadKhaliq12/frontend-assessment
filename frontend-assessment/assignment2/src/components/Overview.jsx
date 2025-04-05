import React from "react";
import {
  IoIosArrowForward,
  IoLogoLinkedin,
  IoMdContact,
  IoMdCheckmarkCircle,
} from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Overview = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Navigation Bar */}
      <nav className="bg-black border-b border-gray-500">
        <ul className="flex justify-start ml-52 space-x-8 py-4 text-sm font-medium">
          <li className="px-3 py-2">Overview</li>
          <li className="px-3 py-2">Portfolio</li>
          <li className="px-3 py-2">Experience</li>
          <li className="px-3 py-2">Media</li>
          <li className="px-3 py-2">More</li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6">
        {/* Profile Card */}
        <div className="bg-black border border-gray-500 rounded-lg p-6 flex items-center space-x-4 ml-20 w-full">
          <div className="flex-shrink-0">
            <IoMdContact size={80} className="text-white" />
          </div>

          <div className="flex-grow w-full">
            <h2 className="text-xl font-semibold flex items-center space-x-2">
              <span>Mr A</span>
              <IoMdCheckmarkCircle className="text-blue-500" />
            </h2>
            <p className="text-gray-400">Co-Founder & CEO @Vertx</p>

            <div className="flex items-center space-x-4 mt-2">
              <span className="flex items-center space-x-2 text-blue-400 hover:underline cursor-pointer">
                <IoLogoLinkedin size={20} />
              </span>
              <span className="flex items-center space-x-2 text-blue-400 hover:underline cursor-pointer">
                <FaXTwitter size={20} />
              </span>
              <span className="flex items-center space-x-2 text-red-400 hover:underline cursor-pointer">
                <FaRegEnvelope size={20} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

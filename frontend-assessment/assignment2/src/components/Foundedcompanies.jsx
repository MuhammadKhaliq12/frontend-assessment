import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import logoImg from "/images/logo.jpg";

const FoundedCompanies = () => {
  return (
    <div className="bg-black text-white overflow-hidden p-4 sm:p-6 lg:p-8 flex ml-50">
      {/* Main Content (Founded Companies and Experience Cards) */}
      <div className="flex w-full max-w-4xl mx-auto space-x-6">
        {/* Founded Companies Card */}
        <div className="bg-black text-white p-6 rounded-lg shadow-lg border border-gray-500 w-full lg:w-1/2">
          <h3 className="text-xl font-semibold mb-4">Founded Companies</h3>
          <div className="text-6xl font-bold mb-4">02</div>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-black">
                  <img
                    src={logoImg}
                    alt="Vertx Logo"
                    className="w-8 h-8 object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">Vertx</span>
                  <span className="text-sm text-green-500">Fintech</span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-300 flex items-center">
                View Profile <IoIosArrowForward className="ml-1" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-black">
                  🏢 {/* Replace with an appropriate icon or logo */}
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">Company</span>
                  <span className="text-sm text-blue-500">
                    Details/Information
                  </span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-300 flex items-center">
                View Profile <IoIosArrowForward className="ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Experience Card */}
        <div className="bg-black text-white p-6 rounded-lg shadow-lg border border-gray-500 w-full lg:w-1/2">
          <div className="flex justify-start mb-4">
            <span className="text-2xl">Experience</span>
          </div>
          <div className="text-6xl font-bold mb-4 text-start">03</div>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-black">
                  🏢 {/* Replace with an appropriate icon or logo */}
                </div>
                <span className="text-lg font-semibold">Company 1</span>
              </div>
              <button className="text-gray-400 hover:text-gray-300 flex items-center">
                View Profile <IoIosArrowForward className="ml-1" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-black">
                  🏢 {/* Replace with an appropriate icon or logo */}
                </div>
                <span className="text-lg font-semibold">Company 2</span>
              </div>
              <button className="text-gray-400 hover:text-gray-300 flex items-center">
                View Profile <IoIosArrowForward className="ml-1" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-black">
                  🏢 {/* Replace with an appropriate icon or logo */}
                </div>
                <span className="text-lg font-semibold">Company 3</span>
              </div>
              <button className="text-gray-400 hover:text-gray-300 flex items-center">
                View Profile <IoIosArrowForward className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundedCompanies;

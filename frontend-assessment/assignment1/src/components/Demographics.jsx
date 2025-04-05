import React from "react";
import worldImg from "/images/world.jpg";
import IndianFlag from "/images/IndianFlag.png";
import USAFlag from "/images/USAFlag.png";
import CanadaFlag from "/images/CanadaFlag.png";
import UAEFlag from "/images/UAEFlag.png";
import { IoIosArrowForward } from "react-icons/io";

const Demographics = () => {
  const countries = [
    {
      name: "India",
      flag: IndianFlag,
      color: "#3B82F6",
      percentage: "40%",
      mapPosition: { left: "25%", top: "45%" },
    },
    {
      name: "USA",
      flag: USAFlag,
      color: "#F97316",
      percentage: "25%",
      mapPosition: { left: "15%", top: "35%" },
    },
    {
      name: "Canada",
      flag: CanadaFlag,
      color: "#EAB308",
      percentage: "10%",
      mapPosition: { left: "20%", top: "25%" },
    },
    {
      name: "UAE",
      flag: UAEFlag,
      color: "#22C55E",
      percentage: "7%",
      mapPosition: { left: "55%", top: "45%" },
    },
  ];

  return (
    <div className="sm:px-6 lg:px-4 xl:pl-74 text-white bg-black">
      {/* Content Section */}
      <div className="flex flex-col xl:flex-row xl:space-x-6 rounded-lg border border-gray-500 mr-6">
        {/* Map Card */}
        <div className="bg-black text-white p-4 rounded-lg shadow-lg w-full xl:w-2/3 mb-6 xl:mb-0">
          <h3 className="text-xl font-semibold mb-4">Demographic Map</h3>
          <div className="relative w-full h-40 bg-black rounded-lg overflow-hidden">
            <img
              src={worldImg}
              alt="Demographics Map"
              className="w-full h-full object-cover brightness-50 bg-black"
            />
            {countries.map((country, index) => (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={country.mapPosition}
              >
                <div
                  className="w-3 h-3 rounded-full border-2 border-white"
                  style={{ backgroundColor: country.color }}
                ></div>
              </div>
            ))}
          </div>

          {/* Country Names with Colored Dots */}
          <div className="flex flex-wrap m-4 gap-x-6 gap-y-2 p-3">
            {countries.map((country, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: country.color }}
                ></div>
                <span className="text-sm text-gray-300">{country.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Legend Card */}
        <div className="bg-black mr-1 text-white p-4 rounded-lg shadow-lg w-full xl:w-1/3 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Country Distribution</h3>
            </div>

            <div className="space-y-4">
              {countries.map((country, index) => (
                <div key={index}>
                  <div className="flex items-center space-x-2 mb-1">
                    <img
                      src={country.flag}
                      alt={`${country.name} Flag`}
                      className="w-5 h-5"
                    />
                    <span className="text-sm">{country.name}</span>
                  </div>
                  <div className="relative pl-7">
                    <div className="h-2 bg-gray-700 rounded-full relative">
                      <div
                        className="h-2 rounded-full absolute top-0 left-0"
                        style={{
                          backgroundColor: country.color,
                          width: country.percentage,
                        }}
                      ></div>
                      {/* Percentage positioned at the end of the bar */}
                      <span className="absolute -top-5 right-0 text-xs text-gray-400">
                        {country.percentage}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-700 mt-4 pt-4 flex justify-end">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-gray-300 flex items-center"
            >
              View all countries <IoIosArrowForward className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demographics;

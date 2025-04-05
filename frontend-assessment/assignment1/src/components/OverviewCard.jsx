import React from "react";
import { Line } from "react-chartjs-2";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const OverviewCard = () => {
  const data = {
    labels: [
      "Mar 1",
      "Mar 5",
      "Mar 10",
      "Mar 15",
      "Mar 20",
      "Mar 25",
      "Mar 30",
    ],
    datasets: [
      {
        data: [200, 800, 600, 1000, 400, 1200, 900],
        borderColor: "#FFFFFF",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 20,
        bottom: 10,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#AAAAAA", padding: 8 },
      },
      y: {
        grid: { display: false },
        ticks: { color: "#AAAAAA", padding: 10 },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className=" overflow-hidden text-white">
      {/* Main Container with Flex */}
      <div className="flex">
        {/* Sidebar */}
        <div className="bg-black text-white w-64 p-6">
          {/* Sidebar content */}
          <h3 className="text-lg font-semibold">Sidebar</h3>
          {/* Add sidebar links or any content here */}
        </div>

        {/* Main Content */}
        <div className="flex-grow p-6 sm:px-6 lg:px-4 xl:px-10 overflow-auto">
          {/* Top Bar */}
          <div className="relative mb-6 pr-6">
            <div className="flex flex-col sm:flex-row sm:justify-between items-center pb-2 border-b border-gray-500">
              <div className="flex items-center space-x-6 text-base sm:text-lg font-medium h-full">
                <span className="hover:text-gray-300 flex items-center">
                  Overview
                </span>
                <div className="w-px bg-gray-500 h-6 mx-1 hidden sm:block" />
                <span className="hover:text-gray-300 flex items-center ml-4">
                  Demographics
                </span>
              </div>

              <span className="hover:text-gray-300 mt-2 sm:mt-0 text-base sm:text-lg font-medium">
                More
              </span>
            </div>
          </div>

          {/* Overview Header */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Overview</h2>

          {/* Overview & Insight Section */}
          <div className="flex flex-col xl:flex-row xl:space-x-6">
            {/* Overview Card */}
            <div className="bg-black text-white p-4 rounded-lg shadow-lg border border-gray-500 w-full xl:w-2/3 mb-6 xl:mb-0">
              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <button className="px-4 py-2 border border-white rounded-lg text-sm">
                  Visitors
                </button>
                <button className="px-4 py-2 border border-white rounded-lg text-sm flex items-center">
                  Last 30 days <IoIosArrowDown className="ml-1" />
                </button>
                <button className="px-4 py-2 border border-dashed border-white rounded-xl text-sm">
                  + Add
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-start space-x-4 mb-4">
                <div className="text-4xl font-bold">13.49K</div>
                <div className="flex flex-col text-green-400 text-sm pt-1">
                  <span>+469%</span>
                  <span className="text-gray-400">(897)</span>
                </div>
              </div>

              {/* Chart */}
              <div className="h-40 w-full ml-2">
                <Line data={data} options={options} />
              </div>
            </div>

            {/* Insight Card */}
            <div className="bg-black text-white p-4 rounded-lg shadow-lg border border-gray-500 w-full xl:w-1/3 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Insights</h3>
                </div>
                <div className="space-y-4">
                  {/* Founders */}
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="text-gray-400 text-sm">Founders</span>
                      <span className="text-2xl font-bold">7.4K</span>
                    </div>
                    <div className="flex flex-col text-green-400 text-sm">
                      <span>+000%</span>
                      <span className="text-gray-400">(000)</span>
                    </div>
                  </div>

                  {/* Investors */}
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="text-gray-400 text-sm">Investors</span>
                      <span className="text-2xl font-bold">6.09K</span>
                    </div>
                    <div className="flex flex-col items-end text-green-400 text-sm">
                      <span>+000%</span>
                      <span className="text-gray-400">(000)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom right link */}
              <div className="border-t border-gray-700 mt-4 pt-4 flex justify-end">
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-gray-300 flex items-center"
                >
                  View detailed insights <IoIosArrowForward className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;

import React from "react";
import "../App.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaUtensils } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



const FirstPage = () => {
  return (
    <section className="mt-17">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-semibold text-[#1a1a1a] tracking-tight leading-tight">
          Discover Restaurants
        </h1>
        <p className="text-base text-[#4a4a4a]">
          Find your perfect dining experience
        </p>
      </div>

      <div className="flex justify-center mt-8 mb-16">
        <div className="flex gap-6 flex-wrap items-center justify-center max-w-9xl w-full px-6 py-6">
          {/* Search Input */}
          <div className="relative w-72">
            <FaMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search Instrument, Guitars..."
              className="bg-white w-full py-4 pr-4 pl-10 border border-gray-300 rounded-lg  "
            />
          </div>

          {/* Category */}
          <div className="w-50 relative">
            {/* Icon */}
            <FaUtensils className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />

            <select className="w-full py-4 pl-10 pr-10 border border-gray-300 rounded-lg bg-white">
              <option>Cuisines</option>
              <option>Italian</option>
              <option>Chinese</option>
              <option>Pakistani</option>
            </select>
          </div>

          {/* Location */}
          <div className="w-50 relative">
            {/* Icon */}
            <FaLocationDot className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />

            <select className="w-full py-4 pl-12 pr-6 border border-gray-300 rounded-lg bg-white">
              <option>Location</option>
              <option>New York</option>
              <option>London</option>
              <option>Dubai</option>
            </select>
          </div>

          {/* Button */}
          <button className="px-6 py-3 rounded-lg text-white bg-purple-700 hover:bg-purple-800 transition-colors duration-300">
            View Bookings
          </button>
        </div>
      </div>
    </section>
  );
};

export default FirstPage;

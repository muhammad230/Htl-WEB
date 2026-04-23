import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";  

const Cards = (props) => {
  return (
      <div className="p-6 bg-gray-100 min-h-screen flex flex-row items-center justify-center gap-6">
      <div className="bg-white rounded-xl p-6 w-130  shadow-md hover:shadow-lg transition">

        {/* Top Section */}
        <div className="flex items-start gap-4">

          {/* Image with zoom */}
          <div className="group w-24 h-24 overflow-hidden rounded-lg">
            <img
              src="images/Frame 7.png"
              alt="food"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold">The Coastal Grill</h2>

            <p className="text-gray-500 text-sm flex items-center gap-1">
              Mediterranean · Downtown
            </p>

            <p className="text-yellow-500 text-sm flex items-center gap-1 mt-1">
              <FaStar /> 4.7 (324)
            </p>
          </div>

          {/* Heart Icon */}
          <FaRegHeart className="text-xl cursor-pointer text-gray-500 hover:text-red-500" />
        </div>

        {/* Tags */}
        <div className="mt-4 border border-gray-300 rounded-xl p-3 flex justify-between text-sm">
          <span className="text-gray-400">Tags</span>
          <span className='font-semibold'>Seafood, Outdoor Seating, Fine Dining</span>
        </div>

        {/* Available Times */}
        <div className="mt-3 border border-gray-300 rounded-xl p-3 flex justify-between items-center">
          <span className="text-green-700 text-sm">Available Times</span>

          <div className="flex gap-2">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm">
              6:00 PM
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm">
              7:30 PM
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm">
              9:00 PM
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-5">
          <button className="flex-1 bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition">
            Reserve Table
          </button>

          <button className="flex-1 border border-purple-700 text-purple-700 py-3 rounded-lg hover:bg-purple-50 transition">
            View Details
          </button>
        </div>
      </div>

      {/* card 2 */}
      <div className="bg-white rounded-xl p-6 w-130  shadow-md hover:shadow-lg transition">

        {/* Top Section */}
        <div className="flex items-start gap-4">

          {/* Image with zoom */}
          <div className="group w-24 h-24 overflow-hidden rounded-lg">
            <img
              src="images/Frame 8.png"
              alt="food"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold">Sakura Sushi</h2>

            <p className="text-gray-500 text-sm flex items-center gap-1">
              Japanese · City Cente
            </p>

            <p className="text-yellow-500 text-sm flex items-center gap-1 mt-1">
              <FaStar /> 4.7 (324)
            </p>
          </div>

          {/* Heart Icon */}
          <FaRegHeart className="text-xl cursor-pointer text-gray-500 hover:text-red-500" />
        </div>

        {/* Tags */}
        <div className="mt-4 border border-gray-300 rounded-xl p-3 flex justify-between text-sm">
          <span className="text-gray-400">Tags</span>
          <span className='font-semibold'>Sushi, Premium, Chef’s Special</span>
        </div>

        {/* Available Times */}
        <div className="mt-3 border border-gray-300 rounded-xl p-3 flex justify-between items-center">
          <span className="text-green-700 text-sm">Available Times</span>

          <div className="flex gap-2">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm">
              5:30 PM
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm">
              9:00 PM
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm">
              9:00 PM
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-5">
          <button className="flex-1 bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition">
            Reserve Table
          </button>

          <button className="flex-1 border border-purple-700 text-purple-700 py-3 rounded-lg hover:bg-purple-50 transition">
            View Details
          </button>
        </div>
      </div>
    </div>


  );
}
export default Cards

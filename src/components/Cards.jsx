import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Cards = () => {
  const [selectedRestaurent, setselectedRestaurent]= useState(null)
  const [showReservation, setShowReservation] = useState(false)

  return (
    <>
      {showReservation && (
        <div className="fixed inset-0 bg-amber-700 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Reserve Table at {selectedRestaurent}</h2>
            
            <h1 className="text-4xl font-bold text-olive-400 text-center">welcom to reservation table</h1>
            
            <div className="flex gap-4 mt-6">
              <button onClick={() => setShowReservation(false)} className="flex-1 bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800">
                Confirm Reservation
              </button>
              <button onClick={() => setShowReservation(false)} className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    
    <div className=" bg-gray-100  flex flex-wrap items-center justify-center gap-6">
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
          <span className="font-semibold">
            Seafood, Outdoor Seating, Fine Dining
          </span>
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
          <button onClick={()=>{
            setselectedRestaurent("The Coastal Grill")
            setShowReservation(true);
          }} className="flex-1 bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition">
            Reserve Table
          </button>

          <button className="flex-1 border border-purple-700 text-purple-700 py-3 rounded-lg hover:bg-purple-50 transition">
            View Details
          </button>
        </div>
      </div>

      {/* ...............card 2 ................*/}
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
          <span className="font-semibold">Sushi, Premium, Chef’s Special</span>
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
          <button onClick={()=>{
            setselectedRestaurent("Sakura Sushi")
            setShowReservation(true);
          }} className="flex-1 bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition">
            Reserve Table
          </button>

          <button className="flex-1 border border-purple-700 text-purple-700 py-3 rounded-lg hover:bg-purple-50 transition">
            View Details
          </button>
        </div>
      </div>

      {/*................... card 3 ..................*/}
      <div className="bg-white rounded-xl p-6 w-130  shadow-md hover:shadow-lg transition">
        {/* Top Section */}
        <div className="flex items-start gap-4">
          {/* Image with zoom */}
          <div className="group w-24 h-24 overflow-hidden rounded-lg">
            <img
              src="images/Frame 9.png"
              alt="food"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold">Nonna’s Kitchen</h2>

            <p className="text-gray-500 text-sm flex items-center gap-1">
              Italian· Old Town
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
          <span className="font-semibold">Family Style, Traditional</span>
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
          <button onClick={()=>{
            setselectedRestaurent("Nonna’s Kitchen")
            setShowReservation(true);
        }}
             className="flex-1 bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition">
            Reserve Table
          </button>

          <button className="flex-1 border border-purple-700 text-purple-700 py-3 rounded-lg hover:bg-purple-50 transition">
            View Details
          </button>
        </div>
      </div>

      {/*................... card 4 ..................*/}
      <div className="bg-white rounded-xl p-6 w-130  shadow-md hover:shadow-lg transition">
        {/* Top Section */}
        <div className="flex items-start gap-4">
          {/* Image  zoom */}
          <div className="group w-24 h-24 overflow-hidden rounded-lg">
            <img
              src="images/Frame 10.png"
              alt="food"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold">Green Garden</h2>

            <p className="text-gray-500 text-sm flex items-center gap-1">
              Salad · Miracle Garden
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
          <span className="font-semibold">Planet Based, Organic, Health</span>
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
          <button onClick={()=>{
            setselectedRestaurent("Green Garden")
            setShowReservation(true);
          }}
             className="flex-1 bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition">
            Reserve Table
          </button>

          <button className="flex-1 border border-purple-700 text-purple-700 py-3 rounded-lg hover:bg-purple-50 transition">
            View Details
          </button>
        </div>
      </div>
      
      
    </div>
    </>
    
  );
};
export default Cards;

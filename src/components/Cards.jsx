import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const Cards = () => {
  const [selectedRestaurent, setselectedRestaurent] = useState(null);
  const [showReservation, setShowReservation] = useState(false);

  return (
    <>
      {showReservation && (
        <div className="fixed inset-0 bg-white z-50 overflow-x-auto">
          <div className="bg-white w-full max-w-full rounded-xl shadow-md p-8 my-8">
            <div className="flex items-center gap-3 mb-8">
              <FaArrowLeft className="cursor-pointer rounded-full border-2 text-gray-600 hover:text-gray-800" onClick={() => setShowReservation(false)} />
              <div>
                <h1 className="text-2xl font-semibold ml-12 py-5">Reserve a Table</h1>
                <p className="text-gray-500 text-sm ml-12">
                  {selectedRestaurent}
                </p>
              </div>
            </div>
            <hr  className="text-gray-300 mb-7"/>
            
            <form className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                <div className="grid grid-cols-3 gap-4">
                  <input type="text" placeholder="Full Name*" className="border border-gray-300 rounded-lg px-4 py-2" />
                  <input type="email" placeholder="Email*" className="border border-gray-300 rounded-lg px-4 py-2" />
                  <input type="tel" placeholder="Phone Number*" className="border border-gray-300 rounded-lg px-4 py-2" />
                </div>
              </div>

              {/* Reservation Details */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Reservation Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <select className="border border-gray-300 rounded-lg px-4 py-2">
                    <option>Select Date*</option>
                    <option>2024-04-25</option>
                    <option>2024-04-26</option>
                    <option>2024-04-27</option>
                  </select>
                  <select className="border border-gray-300 rounded-lg px-4 py-2">
                    <option>Select Time*</option>
                    <option>6:00 PM</option>
                    <option>7:30 PM</option>
                    <option>9:00 PM</option>
                  </select>
                  <select className="border border-gray-300 rounded-lg px-4 py-2">
                    <option>Party Size*</option>
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>4 Guests</option>
                    <option>6 Guests</option>
                  </select>
                  <select className="border border-gray-300 rounded-lg px-4 py-2">
                    <option>Special Occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Business Meeting</option>
                  </select>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <select className="border border-gray-300 rounded-lg px-4 py-2">
                    <option>Any Seating Preference?</option>
                    <option>Window Seat</option>
                    <option>Quiet Corner</option>
                    <option>Near Bar</option>
                  </select>
                  <select className="border border-gray-300 rounded-lg px-4 py-2">
                    <option>Any Dietary Preference?</option>
                    <option>Vegetarian</option>
                    <option>Vegan</option>
                    <option>Gluten-free</option>
                  </select>
                </div>
                <textarea placeholder="Any Special Requests?" className="w-full border border-gray-300 rounded-lg px-4 py-2" rows="3"></textarea>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowReservation(false)}
                  className="flex-1 bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 font-semibold"
                >
                  Confirm Reservation
                </button>
                <button
                  type="button"
                  onClick={() => setShowReservation(false)}
                  className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
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
            <button
              onClick={() => {
                setselectedRestaurent("The Coastal Grill");
                setShowReservation(true);
              }}
              className="flex-1 bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition"
            >
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
            <span className="font-semibold">
              Sushi, Premium, Chef’s Special
            </span>
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
            <button
              onClick={() => {
                setselectedRestaurent("Sakura Sushi");
                setShowReservation(true);
              }}
              className="flex-1 bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition"
            >
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
            <button
              onClick={() => {
                setselectedRestaurent("Nonna’s Kitchen");
                setShowReservation(true);
              }}
              className="flex-1 bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition"
            >
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
            <button
              onClick={() => {
                setselectedRestaurent("Green Garden");
                setShowReservation(true);
              }}
              className="flex-1 bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition"
            >
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

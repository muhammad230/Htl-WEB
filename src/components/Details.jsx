import React from "react";
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FiPhone, FiClock, FiMapPin } from "react-icons/fi";

const Details = () => {
  const location = useLocation();

  const restaurant = location.state;

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center py-10 px-4">
      <div className="w-full max-w-5xl bg-white border border-gray-200 p-8">
        
        {/* TOP SECTION */}
        <div className="flex justify-between items-start">
          <div>
            <button onClick={() => window.history.back()} className="text-gray-700 mb-3   hover:text-gray-700">
              ← Back
            </button>
            <h1 className="text-3xl font-semibold">
              {restaurant.name}
            </h1>

            <p className="text-gray-500 mt-2">
              {restaurant.category} • ⭐ 4.7 (324)
            </p>
          </div>

          <button className="bg-fuchsia-600 text-white px-8 py-3 rounded-md hover:bg-fuchsia-700">
            Make Reservation
          </button>
        </div>

        {/* INFO BOXES */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          {/* Contact */}
          <div className="border rounded-xl border-gray-200 p-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <FiPhone />
              <span>Contact</span>
            </div>

            <p className="mt-3 text-gray-700 font-medium">
              XXX XX XX XX XXX
            </p>
          </div>

          {/* Open Hours */}
          <div className="border rounded-xl border-gray-200 p-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <FiClock />
              <span>Open Hours</span>
            </div>

            <p className="mt-3 text-gray-700 font-medium">
              Until 11:00 AM
            </p>
          </div>

          {/* Location */}
          <div className="border rounded-xl border-gray-200 p-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <FiMapPin />
              <span>Location</span>
            </div>

            <p className="mt-3 text-gray-700 underline cursor-pointer">
              Get Directions
            </p>
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div className="border rounded-xl border-gray-200 mt-8 p-6">
          <h2 className="text-3xl font-semibold">
            About
          </h2>

          <p className="text-gray-500 mt-4 leading-7">
            A seaside inspired dining experience blending
            fresh, seasonal ingredients with warm coastal
            ambience.
          </p>

          {/* PHOTOS */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-500">
                Photos
              </p>
            </div>

            <div className="grid grid-cols-5 gap-3">
              <img
                src={restaurant.image}
                alt=""
                className="h-32 w-full object-cover rounded-md"
              />

              <img
                src={restaurant.image}
                alt=""
                className="h-32 w-full object-cover rounded-md"
              />

              <img
                src={restaurant.image}
                alt=""
                className="h-32 w-full object-cover rounded-md"
              />

              <img
                src={restaurant.image}
                alt=""
                className="h-32 w-full object-cover rounded-md"
              />

              <img
                src={restaurant.image}
                alt=""
                className="h-32 w-full object-cover rounded-md"
              />
            </div>
          </div>

          {/* REVIEWS */}
          <div className="mt-10">
            <h2 className="text-3xl font-semibold mb-8">
              Reviews
            </h2>

            {[1, 2, 3].map((item) => (
              <div key={item} className="mb-10">
                <div className="flex gap-4">
                  
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gray-500 text-white flex items-center justify-center">
                    A
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-semibold">
                      Armen Sargsyan
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      Lorem Ipsum
                    </p>

                    {/* Stars */}
                    <div className="flex gap-1 text-orange-500 mt-3 text-sm">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                    {/* Review */}
                    <p className="text-gray-500 border-dashed border-t mt-4 leading-7 max-w-4xl">
                      Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                      Aenean commodo ligula eget
                      dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis
                      parturient montes, nascetur
                      ridiculus mus.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
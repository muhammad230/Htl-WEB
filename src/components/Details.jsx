import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Details = () => {
  const navigate = useNavigate();
  const reviews = [1, 2, 3];    

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      
      {/* ABOUT */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-2">About</h2>
        <p className="text-gray-500 mb-6">
          A seaside inspired dining experience blending fresh, seasonal ingredients with warm coastal ambience.
        </p>

        {/* PHOTOS */}
        <div>
          <p className="text-sm text-gray-500 mb-3">Photos</p>

          <div className="flex gap-4 overflow-x-auto">
            {[
              "images/Frame 7.png",
              "images/Frame 8.png",
              "images/Frame 9.png",
              "images/Frame 10.png",
              "images/Frame 7.png",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="food"
                className="w-40 h-28 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-6">Reviews</h2>

        {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm mb-6"
          >
            <div className="flex items-center gap-4 mb-3">
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
                A
              </div>

              {/* Name */}
              <div>
                <h3 className="font-semibold">Armen Sargsyan</h3>
                <p className="text-sm text-gray-400">Lorem Ipsum</p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 text-orange-500 mb-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* Review Text */}
            <p className="text-gray-500 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
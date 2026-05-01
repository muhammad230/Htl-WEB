import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const ReservationModal = ({
  showReservation,
  setShowReservation,
  selectedRestaurent,
}) => {
  if (!showReservation) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-x-auto">
      <div className="bg-white w-full max-w-full rounded-xl shadow-md p-8 my-8">
        
        <div className="flex items-center gap-3 mb-8">
          <FaArrowLeft
            className="cursor-pointer"
            onClick={() => setShowReservation(false)}
          />

          <div>
            <h1 className="text-2xl font-semibold">
              Reserve a Table
            </h1>

            <p className="text-gray-500 text-sm">
              {selectedRestaurent}
            </p>
          </div>
        </div>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="button"
            className="bg-purple-700 text-white px-6 py-3 rounded-lg"
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;
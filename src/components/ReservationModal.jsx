import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const ReservationModal = ({ showReservation, setShowReservation, selectedRestaurent }) => {
  const [confirmed, setConfirmed] = React.useState(false);
  const [form, setForm] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    partySize: "",
    occasion: "",
    seating: "",
    dietary: "",
    requests: "",
  });

  React.useEffect(() => {
    if (showReservation) {
      setConfirmed(false);
      setForm({
        fullName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        partySize: "",
        occasion: "",
        seating: "",
        dietary: "",
        requests: "",
      });
    }
  }, [showReservation]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  if (!showReservation) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4 py-8">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <FaArrowLeft
              className="cursor-pointer text-gray-600 hover:text-gray-800"
              onClick={() => setShowReservation(false)}
            />
            <div>
              <h1 className="text-2xl font-semibold">Reserve a Table</h1>
              <p className="text-gray-500 text-sm">{selectedRestaurent}</p>
            </div>
          </div>

          {confirmed ? (
            <div className="text-center py-10">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-3xl">
                🎉
              </div>
              <h2 className="text-3xl font-semibold">You&apos;re all set!</h2>
              <p className="text-gray-600 mt-3">
                Your reservation at {selectedRestaurent} is confirmed.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-gray-200 p-4 text-left">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Date</p>
                  <p className="mt-3 font-semibold">{form.date || "-"}</p>
                </div>
                <div className="rounded-3xl border border-gray-200 p-4 text-left">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Time</p>
                  <p className="mt-3 font-semibold">{form.time || "-"}</p>
                </div>
                <div className="rounded-3xl border border-gray-200 p-4 text-left">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Party Size</p>
                  <p className="mt-3 font-semibold">{form.partySize || "-"}</p>
                </div>
                <div className="rounded-3xl border border-gray-200 p-4 text-left">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Confirmation sent to</p>
                  <p className="mt-3 font-semibold">{form.email || "-"}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowReservation(false)}
                className="mt-8 w-full rounded-2xl bg-purple-700 px-6 py-3 text-white hover:bg-purple-800"
              >
                Make a New Reservation
              </button>
              <p className="mt-4 text-sm text-gray-400">
                Need to make change? Contact the restaurant directly.
              </p>
            </div>
          ) : (
            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 px-4 py-3 rounded-2xl"
                />
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 px-4 py-3 rounded-2xl"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 px-4 py-3 rounded-2xl"
                />
                <input
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  type="date"
                  className="w-full border border-gray-300 px-4 py-3 rounded-2xl"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  type="time"
                  className="w-full border border-gray-300 px-4 py-3 rounded-2xl"
                />
                <select
                  name="partySize"
                  value={form.partySize}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-2xl"
                >
                  <option value="" disabled>
                    Party Size
                  </option>
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>4 Guests</option>
                  <option>6 Guests</option>
                  <option>8 Guests</option>
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <select
                  name="occasion"
                  value={form.occasion}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-2xl"
                >
                  <option value="" disabled>
                    Special Occasion
                  </option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Business Meeting</option>
                  <option>None</option>
                </select>
                <select
                  name="seating"
                  value={form.seating}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-2xl"
                >
                  <option value="" disabled>
                    Seating Preference
                  </option>
                  <option>Window Seat</option>
                  <option>Quiet Corner</option>
                  <option>Near Bar</option>
                  <option>No preference</option>
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <select
                  name="dietary"
                  value={form.dietary}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 rounded-2xl"
                >
                  <option value="" disabled>
                    Dietary Preference
                  </option>
                  <option>No preference</option>
                  <option>Vegetarian</option>
                  <option>Vegan</option>
                  <option>Gluten-free</option>
                </select>
                <input
                  name="requests"
                  value={form.requests}
                  onChange={handleChange}
                  type="text"
                  placeholder="Special Requests"
                  className="w-full border border-gray-300 px-4 py-3 rounded-2xl"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setConfirmed(true)}
                  className="flex-1 rounded-2xl bg-purple-700 px-6 py-3 text-white hover:bg-purple-800"
                >
                  Confirm Reservation
                </button>
                <button
                  type="button"
                  onClick={() => setShowReservation(false)}
                  className="flex-1 rounded-2xl border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
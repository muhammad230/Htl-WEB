import React from "react";
import { Link } from "react-router-dom";

const Bookings = ({ bookings }) => {
  const [tab, setTab] = React.useState("upcoming");

  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const upcoming = bookings.filter((b) => {
    if (!b.date) return true;
    try {
      const d = new Date(b.date + "T00:00:00");
      return d >= todayStart;
    } catch (e) {
      return true;
    }
  });

  const past = bookings.filter((b) => {
    if (!b.date) return false;
    try {
      const d = new Date(b.date + "T00:00:00");
      return d < todayStart;
    } catch (e) {
      return false;
    }
  });

  const list = tab === "upcoming" ? upcoming : past;

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-4xl font-semibold">My Reservations</h1>
            <p className="text-gray-500 mt-2">Manage your bookings</p>
          </div>

          <Link to="/" className="inline-flex items-center justify-center rounded-2xl bg-purple-700 px-6 py-3 text-white hover:bg-purple-800">Back to Search</Link>
        </div>

        <div className="bg-white rounded-md p-4 mb-6">
          <div className="flex items-center gap-6">
            <button onClick={() => setTab("upcoming")} className={`px-4 py-2 ${tab === "upcoming" ? "border-b-2 border-purple-700 text-purple-700" : "text-gray-500"}`}>
              Upcoming ({upcoming.length})
            </button>
            <button onClick={() => setTab("past")} className={`px-4 py-2 ${tab === "past" ? "border-b-2 border-purple-700 text-purple-700" : "text-gray-500"}`}>
              Past ({past.length})
            </button>
          </div>
        </div>

        {list.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center text-gray-500">
            <p className="text-xl font-semibold">No {tab} reservations.</p>
            <p className="mt-3">Make a reservation to see it listed here.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {list.map((booking, index) => {
              const today = new Date();
              let when = booking.date || "-";
              try {
                if (booking.date) {
                  const target = new Date(booking.date + "T00:00:00");
                  const diff = Math.ceil((target - new Date(today.getFullYear(), today.getMonth(), today.getDate())) / (1000 * 60 * 60 * 24));
                  if (diff > 1) when = `In ${diff} Days`;
                  else if (diff === 1) when = `Tomorrow`;
                  else if (diff === 0) when = `Today`;
                  else when = `${Math.abs(diff)} day(s) ago`;
                }
              } catch (e) {
                // keep raw
              }

              const badgeColor = booking.status === "Confirmed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700";

              return (
                <div key={index} className="rounded-3xl bg-white p-6 shadow-sm border border-gray-200">
                  <div className="flex items-start gap-4">
                    <img src={booking.image || "images/Frame 7.png"} alt="thumb" className="w-20 h-20 rounded-lg object-cover" />

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2 className="text-2xl font-semibold">{booking.name}</h2>
                          <p className="text-gray-500 mt-1 text-sm">{booking.category} • ⭐ {booking.rating || "-"}</p>
                        </div>

                        <div className={`rounded-2xl px-3 py-1 text-sm font-semibold ${badgeColor}`}>{booking.status}</div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-sm text-gray-700">
                        <div className="rounded-3xl border border-gray-200 p-4 flex flex-col">
                          <span className="text-gray-400 uppercase tracking-[0.2em] text-xs">Date</span>
                          <span className="mt-2 font-semibold">{when}</span>
                        </div>
                        <div className="rounded-3xl border border-gray-200 p-4 flex flex-col">
                          <span className="text-gray-400 uppercase tracking-[0.2em] text-xs">Time</span>
                          <span className="mt-2 font-semibold">{booking.time || "-"}</span>
                        </div>
                        <div className="rounded-3xl border border-gray-200 p-4 flex flex-col">
                          <span className="text-gray-400 uppercase tracking-[0.2em] text-xs">Guests</span>
                          <span className="mt-2 font-semibold">{booking.partySize || "-"}</span>
                        </div>
                      </div>

                      <div className="mt-4 text-sm text-gray-500">Confirmation: <span className="font-semibold text-gray-700">{booking.confirmationCode || "-"}</span></div>

                      {booking.requests ? (
                        <p className="mt-4 text-gray-600"><span className="font-semibold">Special Requests:</span> {booking.requests}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import Cards from "./components/Cards";
import Details from "./components/Details";
import Bookings from "./components/Bookings";

function App() {
  const [bookings, setBookings] = React.useState(() => {
    try {
      const raw = localStorage.getItem("bookings");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  const addBooking = (booking) => {
    setBookings((prevBookings) => {
      const updated = [...prevBookings, booking];
      try {
        localStorage.setItem("bookings", JSON.stringify(updated));
      } catch (e) {
        // ignore
      }
      return updated;
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div>
              <FirstPage />
              <Cards addBooking={addBooking} />
            </div>
          }
        />

        {/* Details Page */}
        <Route path="/details" element={<Details addBooking={addBooking} />} />

        {/* Bookings Page */}
        <Route path="/bookings" element={<Bookings bookings={bookings} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
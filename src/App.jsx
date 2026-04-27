import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import Cards from "./components/Cards";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div>
              <FirstPage />
              <Cards />
            </div>
          }
        />

        {/* Details Page */}
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import React from "react";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen text-3xl gap-4">
      Welcome to Details Page 🎉

      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 bg-purple-700 text-white rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default Details;
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


const Details = () => {
  const location = useLocation();
   const navigate = useNavigate();
   const restaurant = location.state;
    

  return (
    <div>
      <h1>welcome to details section</h1>
    </div>
  );
};

export default Details;
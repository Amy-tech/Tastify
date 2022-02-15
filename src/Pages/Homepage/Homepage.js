// IMPORTING RELEVANT COMPONENTS
import React from "react";

import HomeComponent from "../../Components/Home/HomeComponent.js";
import Navbar from "../../Components/Navbar/Navbar.js";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HomeComponent />
    </div>
  );
};

export default Homepage;

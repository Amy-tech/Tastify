// IMPORTING RELEVANT COMPONENTS
import React from "react";

import HomeComponent from "../../Components/Home/HomeComponent.js";
import Brand from "../../Components/Global Components/App Brand/Brand";

const Homepage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Brand />
      <HomeComponent />
    </div>
  );
};

export default Homepage;

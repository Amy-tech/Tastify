import React from "react";

import logo from "../../../images/logo_leaf.png";
import classes from "../Logo/Logo.module.scss";

const Logo = () => {
  return (
    <div>
      <img src={logo} alt="Tastify logo" className={classes.img} />
    </div>
  );
};

export default Logo;

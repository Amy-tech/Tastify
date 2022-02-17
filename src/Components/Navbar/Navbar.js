//IMPORTING RELEVANT COMPONENTS
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Global Components/Logo/Logo.js";
import classes from "./Navbar.module.scss";
import typography from "../Global Components/Global Sass/Typography.module.scss";

const Navbar = (props) => {
  return (
    <div className={classes.Navbar}>
      <div className={classes.Navbar__Container}>
        {/* LOGO */}
        <Logo />
        <h1 className={typography.title}>Tastify</h1>
      </div>
    </div>
  );
};

export default Navbar;

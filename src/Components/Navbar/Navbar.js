//IMPORTING RELEVANT COMPONENTS
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";

import logo from "../../images/logo_leaf.png";

const Navbar = (props) => {
  return (
    <div className={classes.Navbar}>
      <div className={classes.Navbar__Container}>
        {/* LOGO */}
        <img src={logo} alt="Tastify logo" />
        <h1>Tastify</h1>

        {/* <ul className={classes.Navbar__ListItems}>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/authenticate">Authentication</Link>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Navbar;

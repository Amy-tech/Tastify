//IMPORTING RELEVANT COMPONENTS
import React from "react";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={classes.navigation}>
      {/* CHECKBOX */}
      <input
        type="checkbox"
        className={classes.navigation__checkbox}
        id="nav-toggle"
      ></input>

      {/* NAVIGATION BUTTON */}
      <label for="nav-toggle" className={classes.navigation__navBtn}>
        <span className={classes.navigation__navBtn__navIcon}>&nbsp;</span>
      </label>

      {/* BACKGROUND */}
      <div className={classes.navigation__background}>&nbsp;</div>

      {/* NAVIGATION LIST */}
      <div className={classes.navigation__nav}>
        <ul className={classes.navigation__list}>
          <li className={classes.navigation__item}>
            <a href={"/favoritespage"} className={classes.navigation__link}>
              <span>01</span> Favorites
            </a>
          </li>
          <li className={classes.navigation__item}>
            <a href="/userprofile" className={classes.navigation__link}>
              <span>02</span> Profile
            </a>
          </li>
          <li className={classes.navigation__item}>
            <a href={"/createrecipe"} className={classes.navigation__link}>
              <span>03</span> New recipe
            </a>
          </li>
          <li className={classes.navigation__item}>
            <a href="/" className={classes.navigation__link}>
              <span>04</span> Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

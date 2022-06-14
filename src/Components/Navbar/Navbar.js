//IMPORTING RELEVANT COMPONENTS
import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../Store/store";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  // USER LOGOUT HANDLER
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(dispatch(authActions.logoutUser()));
    return history.replace("/");
  };

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
      <nav className={classes.navigation__nav}>
        <ul className={classes.navigation__list}>
          <li className={classes.navigation__item}>
            <NavLink to={"/favoritespage"} className={classes.navigation__link}>
              <span>01</span> Favorites
            </NavLink>
          </li>
          <li className={classes.navigation__item}>
            <NavLink to="/userprofile" className={classes.navigation__link}>
              <span>02</span> Profile
            </NavLink>
          </li>
          <li className={classes.navigation__item}>
            <NavLink to={"/createrecipe"} className={classes.navigation__link}>
              <span>03</span> New recipe
            </NavLink>
          </li>
          <li className={classes.navigation__item}>
            <NavLink
              to={"/"}
              className={classes.navigation__link}
              onClick={logoutHandler}
            >
              <span>04</span> Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./FavoriteHeading.module.scss";
import typography from "../Global Components/Global Sass/Typography.module.scss";
import { FiArrowLeft } from "react-icons/fi";
import button from "../Global Components/Buttons/Button.module.scss";

const FavoriteHeading = () => {
  return (
    <div className={classes.fav}>
      <section className={classes.fav__heading}>
        <nav>
          <NavLink to={"/recipefeed"} className={button.backBtn}>
            <FiArrowLeft />
          </NavLink>
        </nav>
        <h1
          className={`${classes.fav__heading_title} ${typography.primary__headingMedium}`}
        >
          Your favorite recipes
          <br />
          saved here
        </h1>
      </section>
    </div>
  );
};

export default FavoriteHeading;

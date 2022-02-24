import React from "react";
import { Link } from "react-router-dom";

import { FaRegHeart, FaHeart, FaLeaf } from "react-icons/fa";
import { GoFlame } from "react-icons/go";
import CardSmall from "../Global Components/Card/CardSmall.js";
import FavoriteBtn from "../Global Components/Buttons/FavoriteBtn.js";

import classes from "./RecipeItem.module.scss";
import typography from "../Global Components/Global Sass/Typography.module.scss";
import recipetype from "../Global Components/Global Sass/RecipeType.module.scss";

// REMEMBER TODO
// Make CSS for Types global

const RecipeItem = (props) => {
  const recipeData = { ...props };
  console.log(recipeData);

  return (
    <li className={classes.recipeItem}>
      <CardSmall>
        {/* ROW 1 > IMAGE */}
        <div className={classes.recipeItem__image}>
          <img src={props.image} alt={props.name} />
        </div>

        {/* ROW 2> CONTENT */}
        <div className={classes.recipeItem__content}>
          {/* FAVORITE BUTTON */}
          <div className={classes.recipeItem__favorites}>
            <FavoriteBtn />
          </div>

          {/* RECIPE TYPE */}
          <div
            className={`${classes.recipeItem__type} ${recipetype.type} ${typography.paragraph}`}
          >
            <p>
              <FaLeaf className={recipetype.type__V} /> Vegetarian
            </p>

            <p>
              <GoFlame className={recipetype.type__S} /> Spice
            </p>
          </div>

          {/* RECIPE NAME */}
          <div className={classes.recipeItem__name}>
            <Link
              to={{ pathname: "/RecipeMethod", state: { recipeData } }}
              className={classes.link}
            >
              <h2 className={typography.primary__headingSmall}>{props.name}</h2>
            </Link>
          </div>

          {/* OWNER */}
          <div className={classes.recipeItem__owner}>
            <p>{props.owner}</p>
          </div>
        </div>
      </CardSmall>
    </li>
  );
};

export default RecipeItem;

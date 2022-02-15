import React from "react";
import { FaRegHeart, FaHeart, FaLeaf } from "react-icons/fa";
import { GoFlame } from "react-icons/go";
import Card from "../Global Components/Card/Card.js";
import FavoriteBtn from "../Global Components/Buttons/FavoriteBtn.js";
import classes from "./RecipeItem.module.scss";
import typography from "../Global Components/Global Sass/Typography.module.scss";

const RecipeItem = (props) => {
  return (
    <li className={classes.recipeItem}>
      <Card>
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
            className={`${classes.recipeItem__type} ${typography.paragraph}`}
          >
            <p>
              <FaLeaf className={classes.recipeItem__type_V} /> Vegetarian
            </p>

            <p>
              <GoFlame className={classes.recipeItem__type_S} /> Spice
            </p>
          </div>

          {/* RECIPE NAME */}
          <div className={classes.recipeItem__name}>
            <h2 className={typography.primary__headingSmall}>{props.name}</h2>
          </div>

          {/* OWNER */}
          <div className={classes.recipeItem__owner}>
            <p>{props.owner}</p>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default RecipeItem;

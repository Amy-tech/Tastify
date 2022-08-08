import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaLeaf, FaRegHeart, FaHeart } from "react-icons/fa";
import { GoFlame } from "react-icons/go";

import CardSmall from "../../Components/Global Components/Card/CardSmall.js";
// import button from "../../Global Components/Buttons/Button.module.scss";
import typography from "../../Components/Global Components/Global Sass/Typography.module.scss";
import recipetype from "../../Components/Global Components/Global Sass/RecipeType.module.scss";
import classes from "./PersonalRecipeItem.module.scss";

const PersonalRecipeItem = (props) => {
  const recipeData = { ...props };

  // TYPE VALUE
  const getValue = recipeData.type;

  // FAVORITE BTN STATE
  const [isLiked, setIsLiked] = useState(false);

  // ADD TYPE HANDLER
  const addTypeHandler = () => {
    if (getValue !== undefined) {
      const newValue = getValue.toString();

      if (newValue === "vegetarian") {
        return (
          <div
            className={`${classes.recipeItem__type} ${recipetype.type} ${typography.paragraph}`}
          >
            <p>
              <FaLeaf className={recipetype.type__V} /> Vegetarian
            </p>
          </div>
        );
      } else if (newValue === "spice") {
        return (
          <div
            className={`${classes.recipeItem__type} ${recipetype.type} ${typography.paragraph}`}
          >
            <p>
              <GoFlame className={recipetype.type__S} /> Spice
            </p>
          </div>
        );
      } else if (newValue === "vegetarian,spice") {
        return (
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
        );
      }
    }
  };

  // NOTE ==> FOR PERSONAL RECIPE REPLACE FAVORITE TO EDIT OR DELETE OR BOTH
  // FAVORITE BUTTON HANDLER
  //   const favoriteBtnHandler = (e, index) => {
  //     e.preventDefault();
  //     setIsLiked(!isLiked);

  //     if (isLiked === false) {
  //       console.log("the recipe you clicked on is now favortited");
  //       //   console.log(recipeData);
  //     } else if (isLiked === true) {
  //       console.log("there are no recipes in favorite");
  //     }
  //   };

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
            {/* <div className={button.favorite}>
              {isLiked ? (
                <FaHeart
                  className={button.favorite__unfill}
                  onClick={favoriteBtnHandler}
                />
              ) : (
                <FaRegHeart
                  className={button.favorite__fill}
                  onClick={favoriteBtnHandler}
                />
              )}
            </div> */}
          </div>

          {/* RECIPE TYPE */}
          {addTypeHandler()}

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

export default PersonalRecipeItem;

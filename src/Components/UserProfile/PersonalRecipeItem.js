import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { FaLeaf } from "react-icons/fa";
import { ImBin, ImPencil2 } from "react-icons/im";
import { GoFlame } from "react-icons/go";

import CardSmall from "../../Components/Global Components/Card/CardSmall.js";
import button from "../Global Components/Buttons/Button.module.scss";
import typography from "../../Components/Global Components/Global Sass/Typography.module.scss";
import recipetype from "../../Components/Global Components/Global Sass/RecipeType.module.scss";
import classes from "./PersonalRecipeItem.module.scss";
import EditPersonalRecipe from "./EditPersonalRecipe.js";

const PersonalRecipeItem = (props) => {
  const recipeData = { ...props };

  const history = useHistory();

  // TYPE VALUE
  const getValue = recipeData.type;

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
  // BIN BUTTON HANDLER
  const binBtnHandler = (e) => {
    e.preventDefault();
    console.log("the bin button was clicked");
  };

  // EDIT BUTTON HANDLER
  // const editBtnHandler = (e) => {
  //   e.preventDefault();
  //   console.log("the edit button was clicked");
  //   return history.replace("/editpersonalrecipe");
  // };

  return (
    <li className={classes.recipeItem}>
      <CardSmall>
        {/* ROW 1 > IMAGE */}
        <div className={classes.recipeItem__image}>
          <img src={props.image} alt={props.name} />
        </div>

        {/* ROW 2> CONTENT */}
        <div className={classes.recipeItem__content}>
          {/* BIN / EDIT BUTTON */}
          <div className={classes.recipeItem__manageButtons}>
            <div className={button.manage}>
              {/* BIN BTN */}
              <ImBin className={button.manage__bin} onClick={binBtnHandler} />
              {/* EDIT BTN */}
              <Link
                to={{ pathname: "/editpersonalrecipe", state: { recipeData } }}
                className={classes.link}
              >
                <ImPencil2 className={button.manage__edit} />
              </Link>
            </div>
          </div>

          {/* RECIPE TYPE */}
          {addTypeHandler()}

          {/* RECIPE NAME */}
          <div className={classes.recipeItem__name}>
            <Link
              to={{ pathname: "/PersonalRecipeMethod", state: { recipeData } }}
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

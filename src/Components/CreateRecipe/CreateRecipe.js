import React from "react";
import { NavLink } from "react-router-dom";
import typography from "../Global Components/Global Sass/Typography.module.scss";
import button from "../Global Components/Buttons/Button.module.scss";
import classes from "./CreateRecipe.module.scss";
import RecipeForm from "../Global Components/Recipe Form/RecipeForm";

const CreateRecipe = () => {
  return (
    <div className={classes.createform}>
      {/* BACK BUTTON */}
      <div className={classes.createform__nevermind}>
        <nav>
          <NavLink
            to={"/RecipeFeed"}
            className={`${button.btn} ${button.btn__primary} ${classes.modal__modalBody_btn}`}
          >
            nevermind
          </NavLink>
        </nav>
        {/* HEADER */}
      </div>
      <div className={classes.createform__heading}>
        <div className={classes.createform__title}>
          <h1 className={typography.primary__headingMedium}>
            Do you have a new recipe in mind?
          </h1>
          <p className={typography.primary__headingSmall}>
            This recipe will be available for others to enjoy
          </p>
        </div>
      </div>
      {/* CONTENT */}
      <div className={classes.createform__formcontent}>
        <RecipeForm />
      </div>
    </div>
  );
};

export default CreateRecipe;

import React from "react";

import typography from "../Global Components/Global Sass/Typography.module.scss";
import classes from "./CreateRecipe.module.scss";
import RecipeForm from "../Global Components/Recipe Form/RecipeForm";

const CreateRecipe = () => {
  return (
    <div className={classes.createform}>
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

      <div className={classes.createform__formcontent}>
        <RecipeForm />
      </div>
    </div>
  );
};

export default CreateRecipe;

// this is the actual recipe and is accessed when the user clicks on the recipe name
import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import { FaLeaf } from "react-icons/fa";
import { GoFlame } from "react-icons/go";
import CardBig from "../Global Components/Card/CardBig";
import typography from "../Global Components/Global Sass/Typography.module.scss";
import recipetype from "../Global Components/Global Sass/RecipeType.module.scss";
import button from "../Global Components/Buttons/Button.module.scss";
import classes from "../Recipefeed/RecipeMethod.module.scss";

const RecipeMethod = () => {
  // FETCHING RECIPE DATA
  const location = useLocation();
  const { recipeData } = location.state;
  console.log(recipeData);

  // CALCULATION STATE
  const [newAmount, setNewAmount] = useState();

  // METHOD STATE
  const [showMethod, setShowMethod] = useState(false);

  // ADDING TYPE HANDLER
  const getValue = recipeData.type;
  const addTypeHandler = () => {
    if (getValue !== undefined) {
      const newValue = getValue.toString();

      if (newValue === "vegetarian") {
        return (
          <div
            className={`${classes.method__gridOne_type} ${recipetype.type} ${typography.paragraph}`}
          >
            <p>
              <FaLeaf className={recipetype.type__V} /> Vegetarian
            </p>
          </div>
        );
      } else if (newValue === "spice") {
        return (
          <div
            className={`${classes.method__gridOne_type} ${recipetype.type} ${typography.paragraph}`}
          >
            <p>
              <GoFlame className={recipetype.type__S} /> Spice
            </p>
          </div>
        );
      } else if (newValue === "vegetarian,spice") {
        return (
          <div
            className={`${classes.method__gridOne_type} ${recipetype.type} ${typography.paragraph}`}
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

  // TODO:
  // PORTION CALCULATOR
  // const ingredientCalc = () => {
  //   const amount = recipeData.amount;
  //   const portion = recipeData.portion;

  //   //converting strings to integers - this works
  //   const amountToNumber = amount.map((n) => {
  //     return parseFloat(n, 10);
  //   });
  //   console.log(amountToNumber);

  //   amountToNumber.forEach((item) => {
  //     const amountAnswer = item + portion;
  //     console.log(amountAnswer);
  //   });

  //   // console.log(amount);
  //   // console.log(portion);
  // };
  // ingredientCalc();

  // MAPPING INGREDIENTS

  const amounts = recipeData.amount.map((amountData) => <li>{amountData}</li>);

  const measurements = recipeData.measurement.map((measurementData) => (
    <li>{measurementData}</li>
  ));

  const ingredients = recipeData.ingredient.map((ingredientData) => (
    <li>{ingredientData}</li>
  ));

  // MAPPING METHODS
  const method = recipeData.method.map((methodData) => <li>{methodData}</li>);

  const toggleMethod = () => {
    if (!showMethod) {
      setShowMethod(true);
    } else {
      setShowMethod(false);
    }
  };

  return (
    <div className={classes.method}>
      <div className={classes.method__container}>
        <CardBig>
          <div className={classes.method__header}>
            {/* RECIPE IMAGE */}
            <img
              src={recipeData.image}
              alt={recipeData.name}
              className={classes.method__image}
            />
          </div>
          <div className={classes.method__content}>
            {/* GRID ONE */}
            <div className={classes.method__gridOne}>
              {/* RETURN BTN */}
              <Link
                to={"/recipefeed"}
                className={`${button.btn} ${button.btn__primary} ${classes.method__gridOne_returnBtn}`}
              >
                Go back
              </Link>

              {/* RECIPE TYPE */}
              {addTypeHandler()}
            </div>

            {/* NAME */}
            <h1
              className={`${typography.primary__headingMedium} ${classes.method__name}`}
            >
              {recipeData.name}
            </h1>

            {/* DESCRIPTION */}
            <h2
              className={`${typography.primary__headingSmall} ${classes.method__headings}`}
            >
              Description
            </h2>
            <p className={typography.paragraph}>{recipeData.description}</p>

            {/* GRID TWO */}
            <div className={classes.method__gridTwo}>
              {/* INGREDIENT */}
              <div className={classes.method__gridTwo_ingredients}>
                <h2
                  className={`${typography.primary__headingSmall} ${classes.method__headings}`}
                >
                  Ingredients
                </h2>
                <div className={classes.method__ingContainer}>
                  <div className={classes.method__amount}>
                    <ul
                      className={`${classes.method__list} ${typography.paragraph}`}
                    >
                      {amounts}
                    </ul>
                  </div>
                  <div className={classes.method__measurment}>
                    <ul
                      className={`${classes.method__list} ${typography.paragraph}`}
                    >
                      {measurements}
                    </ul>
                  </div>
                  <div className={classes.method__ingredient}>
                    <ul
                      className={`${classes.method__list} ${typography.paragraph}`}
                    >
                      {ingredients}
                    </ul>
                  </div>
                </div>
              </div>

              {/* PORTION */}
              <div className={classes.method__gridTwo_portions}>
                <h2
                  className={`${typography.primary__headingSmall} ${classes.method__headings}`}
                >
                  Portions
                </h2>
                <div className={classes.method__portion}>
                  <button
                    className={`${classes.method__portion_adjustingBtn} ${classes.method__portion_minus}`}
                  >
                    -
                  </button>
                  <span className={classes.method__portion_span}>
                    {recipeData.portion}
                  </span>
                  <button className={classes.method__portion_adjustingBtn}>
                    +
                  </button>
                </div>
              </div>
            </div>
            <button
              className={`${button.btn} ${button.btn__primary}`}
              onClick={toggleMethod}
            >
              Start cooking
            </button>
            {showMethod ? (
              <div className={classes.method__method}>
                <h2
                  className={`${typography.primary__headingSmall} ${classes.method__headings}`}
                >
                  Method
                </h2>
                <ol className={typography.paragraph}>{method}</ol>
              </div>
            ) : null}
          </div>
        </CardBig>
      </div>
    </div>
  );
};

export default RecipeMethod;

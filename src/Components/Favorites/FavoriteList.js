import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./FavoriteList.module.scss";
import CardSmall from "../Global Components/Card/CardSmall";

import recipetype from "../Global Components/Global Sass/RecipeType.module.scss";
import typography from "../Global Components/Global Sass/Typography.module.scss";
import { FaLeaf } from "react-icons/fa";
import { GoFlame } from "react-icons/go";

const FavoriteList = (props) => {
  // FETCHING STATE
  const recipe = useSelector((state) => state.recipe);

  useEffect(() => {
    fetch(
      "https://recipe-book-a37e0-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
    );
  });

  // TYPE VALUE
  const getValue = props.type;

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

  return (
    <div className={classes.list}>
      <li className={classes.recipeItem}>
        <CardSmall>
          {/* ROW 1 > IMAGE */}
          <div className={classes.recipeItem__image}>
            <img src={props.image} alt={props.name} />
          </div>

          {/* ROW 2> CONTENT */}
          <div className={classes.recipeItem__content}>
            {/* FAVORITE BUTTON */}
            {/* <div className={classes.recipeItem__favorites}>
                <div className={button.favorite}>
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
          {/* state: { recipeData } */}
          <div className={classes.recipeItem__name}>
            <Link to={{ pathname: "/RecipeMethod" }} className={classes.link}>
              <h2 className={typography.primary__headingSmall}>{props.name}</h2>
            </Link>
          </div>

          {/* OWNER */}
          <div className={classes.recipeItem__owner}>
            <p>{props.owner}</p>
          </div>
        </CardSmall>
      </li>
    </div>
  );
};

export default FavoriteList;

/*
// RECIPE DATA STATE
  // const [recipes, setRecipes] = useState([]);

  // GET REQUEST
  // useEffect(() => {
  //   const fetchRecipe = async () => {
  //     const response = await fetch(
  //       "https://recipe-book-a37e0-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
  //     );
  //     const responseData = await response.json();

  //     const loadedRecipe = [];

  //     for (const key in responseData) {
  //       loadedRecipe.push({
  //         id: key,
  //         image: responseData[key].image,
  //         name: responseData[key].name,
  //         description: responseData[key].description,
  //         type: responseData[key].type,
  //         amount: responseData[key].amount,
  //         measurement: responseData[key].measurement,
  //         ingredient: responseData[key].ingredient,
  //         portion: responseData[key].portion,
  //         method: responseData[key].method,
  //         owner: responseData[key].userName,
  //       });
  //     }

  //     setRecipes(loadedRecipe);
  //   };
  //   fetchRecipe();
  // }, []);
  // console.log(recipes);
*/

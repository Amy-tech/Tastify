import React, { useEffect, useState } from "react";
import RecipeItem from "./RecipeItem.js";
import classes from "./RecipeList.module.scss";

const RecipeList = () => {
  // RECIPE DATA STATE
  const [recipes, setRecipes] = useState([]);

  // GET REQUEST
  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(
        "https://recipe-book-a37e0-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
      );
      const responseData = await response.json();

      const loadedRecipe = [];

      for (const key in responseData) {
        loadedRecipe.push({
          id: key,
          image: responseData[key].image,
          name: responseData[key].name,
          description: responseData[key].description,
          type: responseData[key].type,
          amount: responseData[key].amount,
          measurement: responseData[key].measurement,
          ingredient: responseData[key].ingredient,
          portion: responseData[key].portion,
          method: responseData[key].method,
          owner: responseData[key].userName,
        });
      }

      setRecipes(loadedRecipe);
      console.log(loadedRecipe);
    };
    fetchRecipe();
  }, []);

  const recipeList = recipes.map((recipe) => (
    <RecipeItem
      key={recipe.id}
      id={recipe.id}
      image={recipe.image}
      name={recipe.name}
      description={recipe.description}
      type={recipe.type}
      amount={recipe.amount}
      measurement={recipe.measurement}
      ingredient={recipe.ingredient}
      portion={recipe.portion}
      method={recipe.method}
      owner={recipe.owner}
    />
  ));

  return (
    <section>
      <ul className={classes.list}>{recipeList}</ul>
    </section>
  );
};

export default RecipeList;

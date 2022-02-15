import React from "react";
import RecipeItem from "./RecipeItem.js";
import classes from "./RecipeList.module.scss";

const DUMMY_RECIPES = [
  {
    id: "r1",
    image:
      "https://media.istockphoto.com/photos/closeup-photograph-of-a-pile-of-plain-naan-flatbreads-picture-id183564340?k=20&m=183564340&s=612x612&w=0&h=aMCmD-sj-AT0VqV8bxICw9F7Dj7kpATdTrX7-V_qPto=",
    name: "Machine made Naan bread",
    owner: "This recipe was created by : Amy",
  },
  {
    id: "r2",
    image:
      "https://media.istockphoto.com/photos/tasty-pasta-with-pesto-served-on-plate-picture-id1045283212?k=20&m=1045283212&s=612x612&w=0&h=CxTgMpoXh8nKdEZEj9ZSASEBG0FOsU_Te-ovrVxYexs=",
    name: "Basil Pesto Pasta",
    owner: "This recipe was created by : Amy",
  },
  {
    id: "r3",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Sweet Potatoe Curry",
    owner: "This recipe was created by : Francois",
  },
];
const RecipeList = () => {
  const recipeList = DUMMY_RECIPES.map((recipe) => (
    <RecipeItem
      key={recipe.id}
      id={recipe.id}
      image={recipe.image}
      name={recipe.name}
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

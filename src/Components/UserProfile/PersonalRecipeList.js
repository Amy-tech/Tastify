import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { auth, firestore } from "../../utils/init-firebase.js";
import PersonalRecipeItem from "./PersonalRecipeItem.js";
import classes from "./PersonalRecipeList.module.scss";

const RecipeList = () => {
  //STATE
  const [recipes, setRecipes] = useState([]);

  // FETCHING CURRENT USER
  const currentUser = auth.currentUser;
  // console.log(currentUser); //this works

  // FETCHING USERS RECIPES
  useEffect(() => {
    const fetchingUserRecipes = async () => {
      const snapshots = await getDocs(
        collection(firestore, `recipeList/${currentUser.uid}/usersRecipeList`)
      );
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;

        return data;
      });

      setRecipes(docs);
      //console.log(docs); // recipe arrays
    };
    fetchingUserRecipes();
  }, []);

  // MAPPING THROUGH RECIPES
  const recipeList = recipes.map((recipe) => (
    <PersonalRecipeItem
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

import React from "react";
import { useSelector } from "react-redux";
import classes from "./FavoritesPage.module.scss";
import typography from "../../Components/Global Components/Global Sass/Typography.module.scss";
import button from "../../Components/Global Components/Buttons/Button.module.scss";
import FavoriteHeading from "../../Components/Favorites/FavoriteHeading";
import FavoriteList from "../../Components/Favorites/FavoriteList";

const FavoritesPage = () => {
  // RECIPE DATA STATE
  // const favRecipeData = useSelector((state) => state.recipe.recipes);

  // const favRecipeList = favRecipeData.map((recipe) => (
  //   <FavoriteList
  //     key={recipe.id}
  //     id={recipe.id}
  //     image={recipe.image}
  //     name={recipe.name}
  //     description={recipe.description}
  //     type={recipe.type}
  //     amount={recipe.amount}
  //     measurement={recipe.measurement}
  //     ingredient={recipe.ingredient}
  //     portion={recipe.portion}
  //     method={recipe.method}
  //     owner={recipe.owner}
  //   />
  // ));

  return (
    <div>
      {/* HEADER */}
      <header>
        <FavoriteHeading />
      </header>

      <main className={classes.fav__body}>
        {/* IF RECIPE IS ADDED TO FAVORITE */}
        <ul className={classes.list}>{/*{favRecipeList}*/}</ul>
        {/* IF FAVOTITE PAGE IS EMPTY */}
        <div className={classes.fav__body_empty}>
          <p className={typography.paragraph}>
            No Items in Favorites.
            <br />
            To add a recipe to Favorites press the (heart) on the recipe card.
          </p>
          <a
            href="/recipefeed"
            className={`${button.btn__primary} ${button.btn}`}
          >
            Go find favorites
          </a>
        </div>
      </main>
    </div>
  );
};

export default FavoritesPage;

import React from "react";
import classes from "./FavoritesPage.module.scss";
import typography from "../../Components/Global Components/Global Sass/Typography.module.scss";
import button from "../../Components/Global Components/Buttons/Button.module.scss";
import FavoriteHeading from "../../Components/Favorites/FavoriteHeading";

const FavoritesPage = () => {
  return (
    <div>
      <FavoriteHeading />

      <section className={classes.fav__body}>
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
      </section>
    </div>
  );
};

export default FavoritesPage;

import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth } from "../../utils/init-firebase";
import { firestore } from "../../utils/init-firebase";

import editHero from "../../images/editHero.jpg";
import CardBig from "../Global Components/Card/CardBig";
import { GrEdit } from "react-icons/gr";
import typography from "../Global Components/Global Sass/Typography.module.scss";
import button from "../Global Components/Buttons/Button.module.scss";
import classes from "./EditPersonalRecipe.module.scss";

const EditPersonalRecipe = () => {
  // STATE
  const [recipe, setRecipe] = useState({});

  // GLOBAL CURRENT USER INFORMATION
  // to access user id
  const currentUser = auth.currentUser;

  // GLOBAL RECIPE DATA FROM PROPS
  // to access recipe id
  const location = useLocation();
  const { recipeData } = location.state;

  // GLOBAL RECIPE DATA FROM FIRESTORE
  const docRef = doc(
    firestore,
    `recipeList/${currentUser.uid}/usersRecipeList`,
    recipeData.id
  );

  // FETCHING USERS RECIPE
  useEffect(() => {
    const fetchingUserRecipes = async () => {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Doc data:", docSnap.data()); //this works
        setRecipe(docSnap.data());
      } else {
        console.log("no such document");
      }
    };
    fetchingUserRecipes();
  }, []);

  console.log(recipe);

  return (
    <div className={classes.method}>
      {/* BACK BUTTON */}
      <div className={classes.createform__nevermind}>
        <nav>
          <NavLink
            to={"/userprofile"}
            className={`${button.btn} ${button.btn__secondary}`}
          >
            nevermind
          </NavLink>
        </nav>
      </div>

      {/* CARD CONTAINER */}
      <div className={classes.method__container}>
        <CardBig>
          <div className={classes.method__header}>
            {/* BACKGROUND IMAGE */}
            <img
              src={editHero}
              alt="Recipe Book"
              className={classes.method__image}
            />
          </div>
          <div className={classes.method__content}>
            {/* RECIPE IMAGE */}
            <div className={classes.method__content_sectionHeader}>
              <h3
                className={`${typography.primary__headingSmall} ${classes.method__content_sectionTitle}`}
              >
                >> Image of the dish
              </h3>
            </div>

            {/* RECIPE NAME */}
            {/* header */}
            <div className={classes.method__content_sectionHeader}>
              <h3
                className={`${typography.primary__headingSmall} ${classes.method__content_sectionTitle}`}
              >
                >> Name of the recipe
              </h3>
            </div>
            {/* recipe name content */}
            <div>
              <p className={`${typography.paragraph}`}>{recipe.name}</p>
              <p className={`${typography.paragraph}`}>input field</p>
              <p className={`${typography.paragraph}`}>edit btn</p>
            </div>

            {/* RECIPE DISCRIPTION */}
            <div className={classes.method__content_sectionHeader}>
              <h3
                className={`${typography.primary__headingSmall} ${classes.method__content_sectionTitle}`}
              >
                >> Description of the dish
              </h3>
            </div>

            {/* RECIPE TYPE */}
            <div className={classes.method__content_sectionHeader}>
              <h3
                className={`${typography.primary__headingSmall} ${classes.method__content_sectionTitle}`}
              >
                >> The type of recipe
              </h3>
            </div>

            {/* RECIPE INGREDIENT */}
            <div className={classes.method__content_sectionHeader}>
              <h3
                className={`${typography.primary__headingSmall} ${classes.method__content_sectionTitle}`}
              >
                >> The ingredients and measurments
              </h3>
            </div>

            {/* RECIPE PORTION */}
            <div className={classes.method__content_sectionHeader}>
              <h3
                className={`${typography.primary__headingSmall} ${classes.method__content_sectionTitle}`}
              >
                >> The portion of the recipe
              </h3>
            </div>

            {/* RECIPE METHOD */}
            <div className={classes.method__content_sectionHeader}>
              <h3
                className={`${typography.primary__headingSmall} ${classes.method__content_sectionTitle}`}
              >
                >> The method of the recipe
              </h3>
            </div>
          </div>
        </CardBig>
      </div>
    </div>
  );
};

export default EditPersonalRecipe;

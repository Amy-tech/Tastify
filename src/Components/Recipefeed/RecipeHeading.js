import React, { useState } from "react";

import Logo from "../Global Components/Logo/Logo.js";
import classes from "./RecipeHeading.module.scss";
import typography from "../Global Components/Global Sass/Typography.module.scss";
import button from "../Global Components/Buttons/Button.module.scss";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const RecipeHeading = () => {
  const [ingredient, setIngredient] = useState("");
  const [tagList, setTagList] = useState([]);

  // GLOBAL VARIABLE
  const inputValue = { id: new Date().getTime(), ingredient };
  // CREATES USER INPUT TAG ON SUBMIT
  //NOTE : WITH THIS CODE IM ON THE RIGHT TRACK
  const addTagHandler = (e) => {
    e.preventDefault();

    if (ingredient) {
      setTagList((list) => [...list, inputValue]);
    } else {
      console.log("We dont have the recipe you are looking for");
    }
    setIngredient("");
  };

  // DELETES USER INPUT TAG ON CLICK
  // FIX : this is deleting all id's at the same time
  const removeTagHandler = (item) => {
    // const currId = inputValue;
    // console.log(currId);
    // currId.splice(item, 1);
    // setTagList({ tagList: currId });
  };

  return (
    <section className={classes.RFHeading}>
      {/* GREETING */}
      <div className={classes.RFHeading__greeting}>
        <Logo />
        {/* TODO =  retrieve the name of the user details when logged in */}
        <p className={`${classes.RFHeading__welcome} ${typography.title}`}>
          Hello Amy
        </p>
      </div>

      <div className={classes.RFHeading__positioningContent}>
        {/* TITLE */}
        <h1
          className={`${classes.RFHeading__title} ${typography.primary__headingMedium}`}
        >
          What do you want to <br /> cook today?
        </h1>

        {/* SEARCH BAR */}
        <div className={classes.searchBar}>
          <form onSubmit={addTagHandler}>
            <button className={classes.searchBar__searchIcon}>
              <BiSearchAlt />
            </button>
            <input
              className={classes.searchBar__searchInput}
              name="ingredient"
              type="text"
              placeholder="Search recipe or ingredient"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
            ></input>
          </form>
        </div>
      </div>

      {/* RECIPE SEARCHBAR TAG*/}
      {/* FIX : seems there is extra margin to the latest tag */}
      <section className={classes.RFHeading__searchbarTag}>
        {tagList.map((item) => (
          <div
            className={`${typography.paragraph} ${classes.searchBar__tag}`}
            key={item.id}
          >
            <li className={classes.searchBar__tag__spacing}>
              {item.ingredient}
            </li>
            <button className={button.closeBtn} onClick={removeTagHandler}>
              <AiOutlineClose />
            </button>
          </div>
        ))}
      </section>
    </section>
  );
};

export default RecipeHeading;

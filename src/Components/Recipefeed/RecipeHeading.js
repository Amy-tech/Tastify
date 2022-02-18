import React, { useState, useRef } from "react";

import Logo from "../Global Components/Logo/Logo.js";
import Navbar from "../Navbar/Navbar.js";

import classes from "./RecipeHeading.module.scss";
import typography from "../Global Components/Global Sass/Typography.module.scss";
import button from "../Global Components/Buttons/Button.module.scss";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const RecipeHeading = () => {
  const [ingredient, setIngredient] = useState("");
  const [tagList, setTagList] = useState([]);
  const inputRef = useRef(null);

  //CREATES USER INPUT TAG ON SUBMIT
  const onIngredientChangeHandler = (e) => {
    setIngredient(e.target.value); //Gets the information of the ingredient from the end user.
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    //Checks if something is entered into the input
    if (ingredient) {
      addTagHandler(ingredient); //If true, then runs addTagHangler()
    } else {
      console.log("Field can not be empty."); //If false, then returns Error message
    }
    setIngredient(""); //Refreshes the input box
  };

  const addTagHandler = (ingredient) => {
    let _tagList = [...tagList]; //_tagList is a copy of tagList

    _tagList.push(ingredient); //Pushes new ingredient to the _tagList array

    setTagList(_tagList); //Sets state to new _tagList
  };

  // DELETES USER INPUT TAG ON CLICK
  const removeTagHandler = (index) => {
    let _tagList = [...tagList];

    _tagList.splice(index, 1); //Removes 1 of that index from the array

    setTagList(_tagList); //Sets state back to new _tagList
  };

  return (
    <section className={classes.RFHeading}>
      {/* NAVIGATION BAR */}
      <div className={classes.RFHeading__navbar}>
        <Navbar />
      </div>

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
          <form onSubmit={(e) => onFormSubmitHandler(e)}>
            <button className={classes.searchBar__searchIcon}>
              <BiSearchAlt />
            </button>
            <input
              className={classes.searchBar__searchInput}
              name="ingredient"
              type="text"
              placeholder="Search recipe or ingredient"
              value={ingredient}
              ref={inputRef}
              onChange={(e) => onIngredientChangeHandler(e)}
              autoComplete="off"
            ></input>
          </form>
        </div>
      </div>

      {/* RECIPE SEARCHBAR TAG*/}
      <section className={classes.RFHeading__searchbarTag}>
        {tagList.map((ingredient, index) => (
          <div
            className={`${typography.paragraph} ${classes.searchBar__tag}`}
            key={ingredient}
          >
            <li className={classes.searchBar__tag__spacing}>{ingredient}</li>
            <button
              className={button.closeBtn}
              onClick={() => {
                removeTagHandler(index);
              }}
            >
              <AiOutlineClose />
            </button>
          </div>
        ))}
      </section>
    </section>
  );
};

export default RecipeHeading;

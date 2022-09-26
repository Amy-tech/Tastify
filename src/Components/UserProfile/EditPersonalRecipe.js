// IMPORTING react
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

// IMPORTING firebase
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth } from "../../utils/init-firebase";
import { firestore } from "../../utils/init-firebase";

// IMPORTING global components
import typography from "../Global Components/Global Sass/Typography.module.scss";
import button from "../Global Components/Buttons/Button.module.scss";

// IMPORTING relevant components

// IMPORTING react icons
import { AiOutlineEnter } from "react-icons/ai";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin7Fill } from "react-icons/ri";

// IMPORTING scss
import classes from "./EditPersonalRecipe.module.scss";

const EditPersonalRecipe = () => {
  // STATE
  const [recipe, setRecipe] = useState([]);
  const types = [{ label: "vegetarian" }, { label: "spice" }];

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

  // FETCHING USERS RECIPE FROM FIRESTORE
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
  // ______________________________________________________________________________________ //

  // RECIPE NAME

  return (
    <div className={classes.edit}>
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
      <div className={classes.edit__container}>
        <div className={classes.edit__content}>
          {/* RECIPE IMAGE */}
          <div className={classes.edit__recipeImageContent}>
            <div className={classes.edit__content_sectionHeader}>
              <h3
                className={`${typography.primary__headingSmall} ${classes.edit__content_sectionTitle}`}
              >
                >> Image of the dish
              </h3>
            </div>

            <div>
              {/* recipe image preview */}
              <div className={classes.edit__imagePreviewContainer}>
                <div
                  className={`${classes.edit__imagePreview} ${classes.edit__border}`}
                  style={{
                    background: recipe.image
                      ? `url("${recipe.image}") no-repeat center/cover`
                      : null,
                  }}
                ></div>
              </div>

              {/* recipe image input */}
              <div className={classes.edit__centerInput}>
                <div className={classes.edit__group}>
                  <input
                    // onChange={imageChangeHandler}
                    className={classes.edit__imageInput}
                    type="file"
                    id="recipeImage"
                    name="recipeImage"
                    accept="image/*"
                    required
                  ></input>
                  {/* change image button */}
                  <label
                    htmlFor="recipeImage"
                    className={`${button.btn} ${button.btn__primary}`}
                  >
                    Change image
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* RECIPE NAME */}
          <div className={classes.edit__recipeNameContent}>
            <div className={classes.edit__content_sectionHeader}>
              <h3
                className={`${typography.primary__headingSmall} ${classes.edit__content_sectionTitle}`}
              >
                >> Name of the recipe
              </h3>
            </div>

            <div>
              {/* recipe name preview */}
              <div
                className={`${classes.edit__previewBorder} ${classes.edit__border}`}
              >
                <p
                  className={`${typography.primary__headingSmall} ${classes.edit__previewSubheading}`}
                >
                  The current recipe name will appear below
                </p>
                <p
                  className={`${typography.paragraph} ${classes.edit__previewBody}`}
                >
                  {recipe.name}
                </p>
              </div>

              {/* recipe name input */}
              <div className={classes.edit__centerInput}>
                <div className={classes.edit__group}>
                  <input
                    type="text"
                    placeholder="New Recipe Name"
                    id="name"
                    className={classes.edit__input}
                    // ref={displayNameInputRef}
                    required
                  ></input>
                  <label for="name" className={classes.edit__label}>
                    New Recipe Name
                  </label>

                  {/* change name button */}
                  <button
                    className={`${button.btn} ${button.btn__primary} ${classes.edit__changeButton}`}
                  >
                    Change Name
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RECIPE DESCRIPTION */}
          <div className={classes.edit__recipeDescriptionContent}>
            <div className={classes.edit__content_sectionHeader}>
              <h3
                className={`${typography.primary__headingSmall} ${classes.edit__content_sectionTitle}`}
              >
                >> Description of the dish
              </h3>
            </div>
            <div>
              {/* recipe description preview */}
              <div
                className={`${classes.edit__previewBorder} ${classes.edit__border}`}
              >
                <p
                  className={`${typography.primary__headingSmall} ${classes.edit__previewSubheading}`}
                >
                  The current recipe description will appear below
                </p>
                <p
                  className={`${typography.paragraph} ${classes.edit__previewBody}`}
                >
                  {recipe.description}
                </p>
              </div>

              {/* recipe description input */}
              <div className={classes.edit__centerInput}>
                <div className={classes.edit__group}>
                  <textarea
                    //onChange={recipeDescriptionHandler}
                    autoComplete="off"
                    className={`${classes.edit__input} ${classes.edit__textarea}`}
                    type="text"
                    placeholder="New Recipe Description"
                    id="recipedescription"
                    required
                  ></textarea>
                  <label
                    htmlFor="recipedescription"
                    className={classes.edit__label}
                  >
                    New Recipe Description
                  </label>

                  {/* change description button */}
                  <button
                    className={`${button.btn} ${button.btn__primary} ${classes.edit__changeButton}`}
                  >
                    Change Description
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RECIPE TYPE */}
          <div className={classes.edit__recipeDesctiptionContent}>
            <div className={classes.edit__content_sectionHeader}>
              <h3
                className={`${typography.primary__headingSmall} ${classes.edit__content_sectionTitle}`}
              >
                >> The type of recipe - optional
              </h3>
            </div>
            <div>
              {/* recipe type preview */}
              <div
                className={`${classes.edit__previewBorder} ${classes.edit__border}`}
              >
                <p
                  className={`${typography.primary__headingSmall} ${classes.edit__previewSubheading}`}
                >
                  The current recipe type will appear below
                </p>
                <p
                  className={`${typography.paragraph} ${classes.edit__previewBody}`}
                >
                  {recipe.type}
                </p>
              </div>

              {/* recipe type input */}
              <div className={classes.edit__centerInput}>
                <div
                  className={`${classes.edit__group} ${classes.edit__typeContent}`}
                >
                  {types.map((input, index) => (
                    <div key={index} className={classes.edit__checkboxGroup}>
                      <input
                        value={input.label}
                        // onChange={recipeTypeHandler}
                        name="recipeType"
                        type="checkbox"
                        id={input.label}
                        className={classes.edit__checkboxInput}
                      />
                      {/* change type button */}
                      <label
                        htmlFor={input.label}
                        className={classes.edit__checkboxLabel}
                      >
                        <span className={classes.edit__checkboxBtn}></span>
                        {input.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RECIPE AMOUNT INGREDIENT AND MEASUREMENT */}
          <div className={classes.edit__recipeDesctiptionContent}>
            <div className={classes.edit__content_sectionHeader}>
              <h3
                className={`${typography.primary__headingSmall} ${classes.edit__content_sectionTitle}`}
              >
                >> The amount ingredient and measurment
              </h3>
            </div>
            <div>
              {/* recipe ingredient preview */}
              <div
                className={`${classes.edit__previewBorder} ${classes.edit__border}`}
              >
                <p
                  className={`${typography.primary__headingSmall} ${classes.edit__previewSubheading}`}
                >
                  The current recipe ingredients will appear below
                </p>
                <div
                  className={`${classes.edit__ingContainer} ${typography.paragraph} ${classes.edit__previewBody}`}
                >
                  <div className={classes.edit__amount}>
                    {recipe.amount &&
                      recipe.amount.map((amountData) => (
                        <ul
                          className={`${classes.edit__list} ${typography.paragraph}`}
                        >
                          <li>{amountData}</li>
                        </ul>
                      ))}
                  </div>
                  <div className={classes.edit__measurment}>
                    {recipe.measurement &&
                      recipe.measurement.map((measurmentData) => (
                        <ul
                          className={`${classes.edit__list} ${typography.paragraph}`}
                        >
                          <li>{measurmentData}</li>
                        </ul>
                      ))}
                  </div>
                  <div className={classes.edit__ingredient}>
                    {recipe.ingredient &&
                      recipe.ingredient.map((ingredientData) => (
                        <ul>
                          <div className={classes.edit__listSpacing}>
                            <li
                              className={`${classes.edit__list} ${typography.paragraph} ${classes.edit__listSpacing}`}
                            >
                              {ingredientData}
                            </li>
                            <button
                              className={`${button.binSmall} ${classes.edit__theBinIngredient}`}
                              onClick={() => {
                                // removeMeasurementHandler(index);
                              }}
                            >
                              <RiDeleteBin7Fill
                                className={classes.edit__binBtn}
                              />
                            </button>
                          </div>
                        </ul>
                      ))}
                  </div>
                </div>
              </div>
              {/* recipe ingredient input */}
              <div className={classes.edit__measurementContent}>
                {/* amount */}
                <div className={classes.edit__amountInputDiv}>
                  <input
                    name="amount"
                    type="number"
                    min="0"
                    step="any"
                    autoComplete="off"
                    className={`${classes.edit__input} ${classes.edit__amountInput}`}
                    placeholder="Ingredient Amount"
                    // onChange={onAmountChangeHandler}
                    // ref={amountRef}
                    // value={amount}
                    id="amount"
                    required
                  ></input>
                  <label htmlFor="amount" className={classes.edit__label}>
                    Ingredient Amount
                  </label>
                </div>

                {/* measurement */}
                <div className={classes.edit__measurementInputDiv}>
                  <select
                    name="measurement"
                    className={`${classes.edit__input} ${classes.edit__measurementInput} ${classes.edit__measurementPlaceholder}`}
                    // onChange={onMeasurementChangeHandler}
                    // ref={measurementRef}
                    // value={measurement}
                    required
                  >
                    <option value="" disabled selected hidden>
                      Ingredient Measurement
                    </option>
                    {/* spoons */}
                    <option value="tsp">tsp</option>
                    <option value="tbs">tbs</option>
                    {/* cups */}
                    <option value="cup">cup</option>
                    {/* liters */}
                    <option value="ml">ml</option>
                    <option value="liter">liter</option>
                    {/* grams */}
                    <option value="mg">mg</option>
                    <option value="g">g</option>
                    <option value="kg">kg</option>
                    {/* other */}
                    <option value="large">large</option>
                    <option value="medium">medium</option>
                    <option value="small">small</option>
                    <option value="unit">unit</option>
                    <option value="packet">packet</option>
                    <option value="can">can</option>
                    <option value="punnet">punnet</option>
                    <option value="slices">slices</option>
                    <option value="clove">clove</option>
                    <option value="loaf">loaf</option>
                    <option value="pinch">pinch</option>
                    <option value="handful">handful</option>
                  </select>
                </div>

                {/* ingredient */}
                <div className={classes.edit__ingredientInputDiv}>
                  <input
                    name="ingredient"
                    className={`${classes.edit__input} ${classes.edit__igredientInput}`}
                    type="text"
                    placeholder="Recipe Ingredient"
                    id="ingredient"
                    // value={ingredient}
                    // ref={ingredientRef}
                    // onChange={onIngredientChangeHandler}
                    autoComplete="off"
                    required
                  ></input>
                  <label htmlFor="ingredient" className={classes.edit__label}>
                    Recipe Ingredient
                  </label>
                </div>

                {/* change ingredient button */}
                <div className={classes.edit__measurementBtnContainer}>
                  <button
                    // onClick={onMeasurementSubmitHandler}
                    className={`${button.btn} ${button.btn__primary} ${classes.edit__measurementAddBtn}`}
                  >
                    <AiOutlineEnter className={classes.edit__enterIcon} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RECIPE PORTION */}
          <div className={classes.edit__recipeDesctiptionContent}>
            <div className={classes.edit__content_sectionHeader}>
              <h3
                className={`${typography.primary__headingSmall} ${classes.edit__content_sectionTitle}`}
              >
                >> The portion of the recipe
              </h3>
            </div>
            <div>
              {/* recipe portion preview */}
              <div
                className={`${classes.edit__previewBorder} ${classes.edit__border}`}
              >
                <p
                  className={`${typography.primary__headingSmall} ${classes.edit__previewSubheading}`}
                >
                  The current recipe portion will appear below
                </p>
                <p
                  className={`${typography.paragraph} ${classes.edit__previewBody}`}
                >
                  {recipe.portion}
                </p>
              </div>

              {/* recipe portion input */}
              <div className={classes.edit__portionContent}>
                <div className={classes.edit__centerInput}>
                  <div className={classes.edit__group}>
                    <div className={classes.edit__portionSelect}>
                      {/* change portion button title */}
                      <p
                        className={`${typography.primary__headingSmall} ${classes.edit__previewSubheading} ${classes.edit__positionSelectTitle}`}
                      >
                        How many portions does this recipe hold
                      </p>

                      <div className={classes.edit__portionSelectBtn}>
                        <button
                          // onClick={portionAddHandler}
                          className={classes.edit__portionSelectBtn_portionBtn}
                        >
                          <BiUpArrow />
                        </button>
                        <button
                          // onClick={portionSubtractHandler}
                          className={classes.edit__portionSelectBtn_portionBtn}
                        >
                          <BiDownArrow />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* RECIPE METHOD */}
          <div className={classes.edit__recipeDesctiptionContent}>
            <div className={classes.edit__content_sectionHeader}>
              <h3
                className={`${typography.primary__headingSmall} ${classes.edit__content_sectionTitle}`}
              >
                >> The method of the recipe
              </h3>
            </div>
            {/* recipe method preview */}
            <div
              className={`${classes.edit__previewBorder} ${classes.edit__border}`}
            >
              <p
                className={`${typography.primary__headingSmall} ${classes.edit__previewSubheading}`}
              >
                The current recipe method will appear below
              </p>

              <div className={classes.edit__method}>
                {recipe.method &&
                  recipe.method.map((methodData) => (
                    <ul
                      className={`${classes.edit__list} ${typography.paragraph}`}
                    >
                      <div className={classes.edit__listSpacingMethod}>
                        <li>{methodData}</li>
                        <button
                          className={`${button.binSmall} ${classes.edit__theBinMethod}`}
                          onClick={() => {
                            // removeMeasurementHandler(index);
                          }}
                        >
                          <RiDeleteBin7Fill className={classes.edit__binBtn} />
                        </button>
                      </div>
                    </ul>
                  ))}
              </div>
            </div>

            {/* recipe method input */}
            <div className={classes.edit__centerInput}>
              <div className={classes.edit__group}>
                <textarea
                  //onChange={recipeDescriptionHandler}
                  autoComplete="off"
                  className={`${classes.edit__input} ${classes.edit__textarea}`}
                  type="text"
                  placeholder="New Recipe Method"
                  id="recipemethod"
                  required
                ></textarea>
                <label htmlFor="recipemethod" className={classes.edit__label}>
                  New Recipe Method
                </label>

                {/* change method button */}
                <div className={classes.edit__methodBtnContainer}>
                  <button
                    // onClick={onMeasurementSubmitHandler}
                    className={`${button.btn} ${button.btn__primary} ${classes.edit__methodAddBtn}`}
                  >
                    <AiOutlineEnter className={classes.edit__enterIcon} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPersonalRecipe;

// {
//   /* <button
//   className={`${button.binSmall} ${classes.createform__theBin}`}
//   onClick={() => {
//     removeMeasurementHandler(index);
//   }}
// >
//   <RiDeleteBin7Fill className={classes.createform__binBtn} />
// </button>; */
// }

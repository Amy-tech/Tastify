import React, { useRef, useState } from "react";
import classes from "./RecipeForm.module.scss";
import typography from "../Global Sass/Typography.module.scss";
import button from "../Buttons/Button.module.scss";
import { AiFillDelete } from "react-icons/ai";
import { BiUpArrow } from "react-icons/bi";
import { BiDownArrow } from "react-icons/bi";
import { AiOutlineEnter } from "react-icons/ai";
import { RiDeleteBin7Fill } from "react-icons/ri";

const RecipeForm = () => {
  // RECIPE IMAGE STATE
  const [imagePreview, setImagePreview] = useState(null);
  const [imageError, setImageError] = useState(false);

  // RECIPE PORTION STATE
  const [portionCount, setPortionCount] = useState(1);

  // RECIPE METHOD STATE
  const [method, setMethod] = useState("");
  const [methodList, setMethodList] = useState([]);

  const methodRef = useRef(null);

  // RECIPE MEASUREMENT STATE
  const [amount, setAmount] = useState("");
  const [measurement, setMeasurement] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [measurementList, setMeasurementList] = useState([]);

  const amountRef = useRef(null);
  const measurementRef = useRef(null);
  const ingredientRef = useRef(null);

  // IMAGE CHANGE HANDLER
  const imageChangeHandler = (e) => {
    setImageError(false);
    const selectedImage = e.target.files[0];
    const imageTypes = ["image/png", "image/jpg", "image/jpeg"];
    if (selectedImage && imageTypes.includes(selectedImage.type)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setImageError(true);
    }
  };

  // IMAGE BIN HANDLER
  const imageBinHandler = () => {
    setImagePreview(null);
  };

  // PORTION ADD HANDLER
  const portionAddHandler = (e) => {
    e.preventDefault();
    if (portionCount <= 7) {
      setPortionCount(portionCount + 1);
    }
  };

  // PORTION SUBTRACT HANDLER
  const portionSubtractHandler = (e) => {
    e.preventDefault();
    if (portionCount > 1) {
      setPortionCount(portionCount - 1);
    }
  };

  // METHOD CHANGE HANDLER
  const onMethodChangeHandler = (e) => {
    setMethod(e.target.value);
  };

  // METHOD SUBMIT HANDLER
  const onMethodSubmitHandler = (e) => {
    e.preventDefault();

    if (method) {
      addMethodListHandler(method);
    } else {
      console.log("Field can not be empty.");
    }
    setMethod("");
  };

  const addMethodListHandler = (method) => {
    let _methodList = [...methodList];

    _methodList.push(method);

    setMethodList(_methodList);
  };

  // DELETES METHOD LIST ITEM
  const removeMethodHandler = (index) => {
    let _methodList = [...methodList];

    _methodList.splice(index, 1);

    setMethodList(_methodList);
  };

  // MEASUREMENT CHANGE HANDLER

  const onAmountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const onMeasurementChangeHandler = (e) => {
    setMeasurement(e.target.value);
  };
  const onIngredientChangeHandler = (e) => {
    setIngredient(e.target.value);
  };

  // MEASUREMENT SUBMIT HANDLER
  const onMeasurementSubmitHandler = (e) => {
    e.preventDefault();

    if (amount && measurement && ingredient) {
      addMeasurementHandler(amount, measurement, ingredient);
    } else {
      console.log("Field can not be empty.");
    }

    setAmount("");
    setMeasurement("");
    setIngredient("");
  };

  const addMeasurementHandler = (amount, measurement, ingredient) => {
    let _measurementList = [...measurementList];

    _measurementList.push(amount + " " + measurement + " " + ingredient);

    setMeasurementList(_measurementList);
  };

  // DELETES MEASUREMENT LIST ITEM
  const removeMeasurementHandler = (index) => {
    let _measurementList = [...measurementList];

    _measurementList.splice(index, 1);

    setMeasurementList(_measurementList);
  };

  // Form Submit Handler
  const recipeFromSubmit = () => {
    console.log("the submit btn was clicked");
  };

  return (
    <div>
      <form className={`${classes.createform} ${classes.createform__border}`}>
        {/* RECIPE IMAGE */}
        <section className={classes.createform__group}>
          <div className={classes.createform__sectionHeader}>
            <h3
              className={`${typography.primary__headingSmall} ${classes.createform__sectionTitle}`}
            >
              >> Please upload an image of the dish
            </h3>
          </div>

          <div className={classes.createform__imageContent}>
            <input
              onChange={imageChangeHandler}
              className={classes.createform__imageInput}
              type="file"
              id="recipeImage"
              name="recipeImage"
              accept="image/*"
            ></input>
            <label
              htmlFor="recipeImage"
              className={`${button.btn} ${button.btn__primary}`}
            >
              Upload image
            </label>

            <div className={classes.createform__imageContainer}>
              <div className={classes.createform__imageError}>
                {imageError && (
                  <p className={typography.paragraph}>
                    This file is not supported, try converting it to jpg or png
                  </p>
                )}
              </div>

              {imagePreview && (
                <div>
                  <div
                    className={`${classes.createform__imagePreview} ${classes.createform__border}`}
                    style={{
                      background: imagePreview
                        ? `url("${imagePreview}") no-repeat center/cover`
                        : null,
                    }}
                  ></div>
                  <div className={classes.createform__binBtn}>
                    <button
                      className={`${button.btn} ${button.binLarge} `}
                      onClick={imageBinHandler}
                    >
                      <AiFillDelete className={classes.createform__bin} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* RECIPE NAME */}
        <section className={classes.createform__group}>
          <div className={classes.createform__sectionHeader}>
            <h3
              className={`${typography.primary__headingSmall} ${classes.createform__sectionTitle}`}
            >
              >> Enter the name and a short description
            </h3>
          </div>

          <div className={classes.createform__content}>
            <input
              autoComplete="off"
              className={classes.createform__input}
              type="text"
              placeholder="Recipe Name"
              id="recipename"
              required
            ></input>
            <label htmlFor="recipename" className={classes.createform__label}>
              Recipe Name
            </label>

            {/* RECIPE DESCRIPTION */}

            <textarea
              autoComplete="off"
              className={classes.createform__input}
              type="text"
              placeholder="Recipe Description"
              id="recipedescription"
              required
            ></textarea>
            <label
              htmlFor="recipedescription"
              className={classes.createform__label}
            >
              Recipe Description
            </label>
          </div>
        </section>

        {/* RECIPE TYPE */}
        <section className={classes.createform__group}>
          <div className={classes.createform__sectionHeader}>
            <h3
              className={`${typography.primary__headingSmall} ${classes.createform__sectionTitle}`}
            >
              >> Specify the recipe type - optional
            </h3>
          </div>

          <div className={classes.createform__typeContent}>
            <div className={classes.createform__checkboxGroup}>
              <input
                type="checkbox"
                className={classes.createform__checkboxInput}
                id="vegetarian"
              ></input>
              <label
                htmlFor="vegetarian"
                className={classes.createform__checkboxLabel}
              >
                <span className={classes.createform__checkboxBtn}></span>
                Vegetarian
              </label>
            </div>

            <div className={classes.createform__checkboxGroup}>
              <input
                type="checkbox"
                className={classes.createform__checkboxInput}
                id="spice"
              ></input>
              <label
                htmlFor="spice"
                className={classes.createform__checkboxLabel}
              >
                <span className={classes.createform__checkboxBtn}></span>
                Spice
              </label>
            </div>
          </div>
        </section>

        {/* RECIPE MEASURMENTS */}
        <section className={classes.createform__group}>
          <div className={classes.createform__sectionHeader}>
            <h3
              className={`${typography.primary__headingSmall} ${classes.createform__sectionTitle}`}
            >
              >> List the ingredients and measurments
            </h3>
          </div>

          <div className={classes.createform__measurementContent}>
            <div className={classes.createform__amountInputDiv}>
              <input
                name="amount"
                type="number"
                min="0"
                step="any"
                autoComplete="off"
                className={`${classes.createform__input} ${classes.createform__amountInput}`}
                placeholder="Ingredient Amount"
                onChange={onAmountChangeHandler}
                ref={amountRef}
                value={amount}
                id="amount"
              ></input>
              <label htmlFor="amount" className={classes.createform__label}>
                Ingredient Amount
              </label>
            </div>
            <div className={classes.createform__measurementInputDiv}>
              <select
                name="measurement"
                className={`${classes.createform__input} ${classes.createform__measurementInput} ${classes.createform__measurementPlaceholder}`}
                onChange={onMeasurementChangeHandler}
                ref={measurementRef}
                value={measurement}
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
                <option value="big">big</option>
                <option value="medium">medium</option>
                <option value="small">small</option>
                <option value="unit">unit</option>
                <option value="packet">packet</option>
                <option value="can">can</option>
                <option value="punnet">punnet</option>
                <option value="slices">slices</option>
              </select>
            </div>
            <div className={classes.createform__ingredientInputDiv}>
              <input
                name="ingredient"
                className={`${classes.createform__input} ${classes.createform__igredientInput}`}
                type="text"
                placeholder="Recipe Ingredient"
                id="ingredient"
                value={ingredient}
                ref={ingredientRef}
                onChange={onIngredientChangeHandler}
                autoComplete="off"
              ></input>
              <label htmlFor="ingredient" className={classes.createform__label}>
                Recipe Ingredient
              </label>
            </div>

            <div className={classes.createform__measurementBtnContainer}>
              <button
                onClick={onMeasurementSubmitHandler}
                className={`${button.btn} ${button.btn__primary} ${classes.createform__measurementAddBtn}`}
              >
                <AiOutlineEnter
                  className={classes.createform__measurementIcon}
                />
              </button>
            </div>
          </div>

          {/* INGREDIENT PREVIEW */}
          <div
            className={`${classes.createform__measurementList} ${classes.createform__border}`} //REMEMBER to change all css classes
          >
            <p
              className={`${typography.primary__headingSmall} ${classes.createform__measurementListHeading}`}
            >
              The ingredient preview will appear below
            </p>

            <ul className={classes.createform__measurementUL}>
              {measurementList.map((measurement, index) => (
                <div
                  className={classes.createform__orderedList}
                  key={measurement}
                >
                  <li className={classes.createform__measurementListSpacing}>
                    {measurement}
                  </li>
                  <button
                    className={button.binSmall}
                    onClick={() => {
                      removeMeasurementHandler(index);
                    }}
                  >
                    <RiDeleteBin7Fill className={classes.createform__binBtn} />
                  </button>
                </div>
              ))}
            </ul>
          </div>
        </section>

        {/* RECIPE PORTION */}
        <section className={classes.createform__group}>
          <div className={classes.createform__sectionHeader}>
            <h3
              className={`${typography.primary__headingSmall} ${classes.createform__sectionTitle}`}
            >
              >> Select the recipe portion
            </h3>
          </div>

          <div
            className={`${classes.createform__portionContent} ${classes.createform__content}`}
          >
            <label className={classes.createform__portionLabel}>
              how many portions does this recipe hold :
            </label>

            <div className={classes.createform__portionSelect}>
              <h1 className={classes.createform__portionCount}>
                {portionCount}
              </h1>
              <div className={classes.createform__portionSelectBtn}>
                <button
                  onClick={portionAddHandler}
                  className={classes.createform__portionSelectBtn_portionBtn}
                >
                  <BiUpArrow />
                </button>
                <button
                  onClick={portionSubtractHandler}
                  className={classes.createform__portionSelectBtn_portionBtn}
                >
                  <BiDownArrow />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* RECIPE METHOD */}
        <section className={classes.createform__group}>
          <div className={classes.createform__sectionHeader}>
            <h3
              className={`${typography.primary__headingSmall} ${classes.createform__sectionTitle}`}
            >
              >> List the method of this recipe
            </h3>
          </div>

          <div className={classes.createform__methodContent}>
            <div className={classes.createform__methodInput}>
              <input
                name="method"
                className={classes.createform__input}
                type="text"
                placeholder="Recipe Method"
                id="recipemethod"
                value={method}
                ref={methodRef}
                onChange={onMethodChangeHandler}
                autoComplete="off"
              ></input>
              <label
                htmlFor="recipemethod"
                className={classes.createform__label}
              >
                Recipe Method
              </label>
            </div>
            <div className={classes.createform__methodBtnContainer}>
              <button
                onClick={onMethodSubmitHandler}
                className={`${button.btn} ${button.btn__primary} ${classes.createform__methodAddBtn}`}
              >
                <AiOutlineEnter className={classes.createform__methodIcon} />
              </button>
            </div>
          </div>

          {/* METHOD PREVIEW */}
          <div
            className={`${classes.createform__methodList} ${classes.createform__border}`}
          >
            <p
              className={`${typography.primary__headingSmall} ${classes.createform__methodListHeading}`}
            >
              The method preview will appear below
            </p>

            <ol>
              {methodList.map((method, index) => (
                <div className={classes.createform__orderedList} key={method}>
                  <li className={classes.createform__methodListSpacing}>
                    {method}
                  </li>
                  <button
                    className={button.binSmall}
                    onClick={() => {
                      removeMethodHandler(index);
                    }}
                  >
                    <RiDeleteBin7Fill className={classes.createform__binBtn} />
                  </button>
                </div>
              ))}
            </ol>
          </div>
        </section>

        {/* USERNAME */}
        <section className={classes.createform__group}>
          <div className={classes.createform__sectionHeader}>
            <h3
              className={`${typography.primary__headingSmall} ${classes.createform__sectionTitle}`}
            >
              >> Enter your username
            </h3>
          </div>

          <div className={classes.createform__content}>
            <input
              autoComplete="off"
              className={classes.createform__input}
              type="text"
              placeholder="Username"
              id="username"
              required
            ></input>
            <label htmlFor="username" className={classes.createform__label}>
              Username
            </label>
          </div>
        </section>

        {/* SUBMISSION */}
        <div className={classes.createform__submission}>
          <p className={typography.primary__headingSmall}>
            You will be able to edit this recipe in your profile
          </p>
          <button
            onclick={recipeFromSubmit}
            className={`${button.btn} ${button.btn__primary} ${classes.createform__recipeSubmitBtn}`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;

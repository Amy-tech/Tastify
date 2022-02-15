// IMPORTING RELEVANT COMPONENTS
import React, { useState, useEffect } from "react";

import plateOne from "../../images/plate-1-compressed.png";
import plateTwo from "../../images/plate-2-compressed.png";
import plateThree from "../../images/plate-3-compressed.png";

import classes from "./HomeComponent.module.scss";
import typography from "../Global Components/Global Sass/Typography.module.scss";
import PrimaryBtn from "../Global Components/Buttons/PrimaryBtn.js";
import AuthenticationPage from "../../Pages/AuthenticationPage/AuthenticationPage";

// IMAGE ARRAY
const ImageSlider = [
  { image: plateOne, key: "one", id: "one" },
  { image: plateTwo, key: "two", id: "two" },
  { image: plateThree, key: "three", id: "three" },
];

const HomeComponent = () => {
  // SLIDER STATE
  const [curr, setCurr] = useState(0);
  const { length } = ImageSlider;

  // SHOW AUTH FORM
  const [showAuth, setShowAuth] = useState(false);

  // FUNCIONALITY OF NEXT SLIDE
  const goToNext = () => {
    setCurr(curr === length - 1 ? 0 : curr + 1);
  };

  // SETTING TIMER FOR SLIDE
  useEffect(() => {
    setTimeout(goToNext, 5000);
    return function () {
      clearTimeout(goToNext);
    };
  });

  // FORM TOGGLE
  const toggleSignin = () => {
    setShowAuth(true);
  };

  return (
    <div class={classes.home}>
      {/* VR TAG */}
      <div class={classes.home__vr}>
        <div class={classes.vr}></div>
      </div>

      {/* CONTENT */}
      {!showAuth ? (
        <div className={classes.home__content}>
          {/* --TITLE */}
          <h2 className={typography.primary__headingLarge}>
            We make <br /> Delicious Food
          </h2>
          {/* --DESCRIPTION */}
          <p className={typography.primary__headingSmall}>
            post recipes, share them with friends, <br /> find new ones and
            favorite them.
          </p>
          {/* --BUTTON */}
          <PrimaryBtn onClick={toggleSignin} />
        </div>
      ) : (
        // AUTHENTICATION PAGE
        <AuthenticationPage open={showAuth} />
      )}
      {/* SLIDE */}
      <div className={classes.home__pictures}>
        <div className={classes.slider}>
          {/* Map through array and apply active css */}
          {ImageSlider.map((slide, index) => {
            return (
              <div
                className={
                  index === curr
                    ? `${classes.slider__active}`
                    : `${classes.slider__slide}`
                }
                aria-hidden={index !== curr}
              >
                <img
                  className={classes.slider__image}
                  src={slide.image}
                  alt={"plate of food"}
                />
              </div>
            );
          })}
        </div>
        {/* SPLASH */}
        <div className={classes.splash}></div>
      </div>
    </div>
  );
};

export default HomeComponent;

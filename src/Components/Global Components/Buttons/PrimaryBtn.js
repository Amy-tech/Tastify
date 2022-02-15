import React from "react";

import classes from "../../Home/HomeComponent.module.scss";
import button from "../Buttons/Button.module.scss";

const PrimaryBtn = (props) => {
  return (
    <div className={classes.home__homeBtn}>
      <a
        className={`${button.btn} ${button.btn__primary}`}
        onClick={props.onClick}
        href="#"
      >
        Sign in
      </a>
    </div>
  );
};

export default PrimaryBtn;

import React from "react";
// import { Link } from "react-router-dom";
// import typography from "../Global Sass/Typography.module.scss";
import classes from "./Card.module.scss";
// import button from "../Global Components/Buttons/Button.module.scss";

const Modal = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.modal__modalContent}>
        {/* content */}
        <div className={classes.modal__modalBody}>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;

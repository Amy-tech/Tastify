import React from "react";
import classes from "./Card.module.scss";

const CardSmall = (props) => {
  return <div className={classes.card__small}>{props.children}</div>;
};

export default CardSmall;

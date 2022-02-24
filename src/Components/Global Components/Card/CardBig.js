import React from "react";
import classes from "./Card.module.scss";

const CardBig = (props) => {
  return <div className={classes.card__big}>{props.children}</div>;
};

export default CardBig;

import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import button from "./Button.module.scss";

const FavoriteBtn = () => {
  return (
    <div className={button.favorite}>
      <FaRegHeart className={button.favorite__unfill} />
      {/* <FaHeart className={button.favorite__fill} /> */}
    </div>
  );
};

export default FavoriteBtn;

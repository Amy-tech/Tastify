import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import button from "./Button.module.scss";

const FavoriteBtn = () => {
  const [isLiked, setIsLiked] = useState(false);

  const favoriteBtnHandler = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={button.favorite} onClick={favoriteBtnHandler}>
      {isLiked ? (
        <FaHeart
          className={button.favorite__fill}
          onClick={favoriteBtnHandler}
        />
      ) : (
        <FaRegHeart
          className={button.favorite__unfill}
          onClick={favoriteBtnHandler}
        />
      )}
    </div>
  );
};

export default FavoriteBtn;

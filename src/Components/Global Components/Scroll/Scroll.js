import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import button from "../Buttons/Button.module.scss";

const Scroll = ({ showBelow }) => {
  const [showScrollBtn, setShowScrollBtn] = useState(showBelow ? false : true);
  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!showScrollBtn) setShowScrollBtn(true);
    } else {
      if (showScrollBtn) setShowScrollBtn(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });

  const ScrollUpHandler = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {showScrollBtn && (
        <div className={button.scrollUp} onClick={ScrollUpHandler}>
          <FaArrowCircleUp />
        </div>
      )}
    </div>
  );
};

export default Scroll;

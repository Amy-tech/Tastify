//IMPORTING RELEVANT COMPONENTS
import React from "react";
import Logo from "../Logo/Logo";
import typography from "../Global Sass/Typography.module.scss";

const Brand = () => {
  return (
    <div>
      <div>
        {/* LOGO */}
        <Logo />
        <h1 className={typography.title}>Tastify</h1>
      </div>
    </div>
  );
};

export default Brand;

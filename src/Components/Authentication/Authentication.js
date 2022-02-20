import React, { useState } from "react";
import classes from "./Authentication.module.scss";
import Signup from "./Signup/Signup";

import typography from "../Global Components/Global Sass/Typography.module.scss";
import Login from "./Login/Login";

let loginTimer;

const Authentication = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [signingUp, setSigningUp] = useState(true);

  const toggleIsSigningUp = () => {
    clearTimeout(loginTimer);
    setTimeout(() => {
      setSigningUp((prevState) => !prevState);
    }, 1000);
    handleExpanded();
  };

  const handleExpanded = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, 2300);
  };
  return (
    <div className={classes.Authentication}>
      <div className={classes.Authentication__Container}>
        <div
          className={`${classes.Authentication__Backdrop} ${
            expanded && classes.animate
          }`}
        >
          <div className={classes.Header}>
            <h3 className={typography.primary__headingsub}>
              {signingUp ? "Create Account" : "Welcome Back"}
            </h3>
            <p className={typography.primary__headingsub}>
              Already have an account? <span>Login</span>
            </p>
          </div>
        </div>
        {signingUp && <Signup toggleIsSigningUp={toggleIsSigningUp}></Signup>}
        {!signingUp && <Login toggleIsSigningUp={toggleIsSigningUp} />}
      </div>
    </div>
  );
};

export default Authentication;

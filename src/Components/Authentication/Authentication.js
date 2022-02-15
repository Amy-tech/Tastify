import React from "react";
import classes from "./Authentication.module.scss";
import Signup from "./Signup/Signup";

import typography from "../Global Components/Global Sass/Typography.module.scss";

const Authentication = (props) => {
  return (
    <div className={classes.Authentication}>
      <div className={classes.Authentication__Container}>
        <div className={classes.Authentication__Backdrop}>
          <div className={classes.Header}>
            <h3 className={typography.primary__headingsub}>Create Account</h3>
            <p className={typography.primary__headingsub}>
              Already have an account? <span>Login</span>
            </p>
          </div>
        </div>
        <Signup></Signup>
      </div>
    </div>
  );
};

export default Authentication;

import React from "react";
import classes from "./Login.module.scss";

import button from "../../Global Components/Buttons/Button.module.scss";

const Login = (props) => {
  return (
    <div className={classes.Signup}>
      <form className={classes.Signup__Form}>
        <div>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
        </div>
        <div className={classes.Test}>
          <button
            className={`${button.btn} ${button.btn__primary} ${classes.Signup__Button}`}
          >
            Sign In
          </button>
          <p>
            Dont have an account?{" "}
            <span onClick={props.toggleIsSigningUp}>Create Account</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

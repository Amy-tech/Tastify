import React from "react";
import classes from "./Signup.module.scss";

import button from "../../../sass/button.module.scss";

const Signup = (props) => {
  return (
    <div className={classes.Signup}>
      <form className={classes.Signup__Form}>
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
        <input type="email" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <input type="password" placeholder="Confirm Password"></input>
        <button
          //className={classes.Signup__Button}
          className={`${button.btn} ${button.btn__primary} ${classes.Signup__Button}`}
        >
          Sign Up
        </button>
        <p>
          Already have an account? <span>Login</span>
        </p>
      </form>
    </div>
  );
};

export default Signup;

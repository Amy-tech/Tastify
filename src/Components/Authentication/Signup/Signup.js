import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import classes from "./Signup.module.scss";
import ErrorModal from "./ErrorModal";
// import AuthContext from "../../../Store/auth-context";
import button from "../../Global Components/Buttons/Button.module.scss";
import { authActions } from "../../../Store/store";

const Signup = (props) => {
  // STATE
  const [signupError, setSignupError] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const shortErrorMsg = "Make sure your password is at least 6 characters long";
  const matchedErrorMsg = "Your passwords dont match";

  // REFS
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordConfirmInputRef = useRef();

  const history = useHistory();
  const dispatch = useDispatch();

  const signupHandler = (e) => {
    e.preventDefault();
    const enteredUsername = usernameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredPasswordConfirm = passwordConfirmInputRef.current.value;

    // ADDED VALIDATION
    if (enteredPassword === enteredPasswordConfirm) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBs7w0Fvv7DvUQJZF9jQLoP_tNYc9YbUOM",
        {
          method: "POST",
          body: JSON.stringify({
            displayName: enteredUsername,
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
          return res.json().then((data) => {
            dispatch(
              authActions.loginUser({
                isLoggedIn: true,
                userData: data,
              })
            );
            return history.replace("/userprofile");
          });
        } else {
          return res.json().then((data) => {
            setSignupError(true);
            setErrorMsg(shortErrorMsg);
            //REMEMBER
            // if email address is already valid this error also shows, I need to fix this.
            // if password is incorrect altogether this also shows, perhaps change the error to a more ganeric one
          });
        }
      });
    } else {
      setSignupError(true);
      setErrorMsg(matchedErrorMsg);
    }
  };

  // CLOSE ERROR MODAL
  const handleCloseModal = () => {
    setSignupError(false);
  };

  return (
    <div className={classes.Signup}>
      <form
        className={classes.Signup__Form}
        autoComplete="off"
        onSubmit={signupHandler}
      >
        <div className={classes.Signup__group}>
          <input
            type="text"
            placeholder="User Name"
            id="name"
            className={classes.Signup__input}
            ref={usernameInputRef}
          ></input>
          <label for="name" className={classes.Signup__label}>
            User Name
          </label>
        </div>

        <div className={classes.Signup__group}>
          <input
            type="email"
            placeholder="Email"
            id="email"
            className={classes.Signup__input}
            ref={emailInputRef}
          ></input>
          <label for="email" className={classes.Signup__label}>
            Email
          </label>
        </div>

        <div className={classes.Signup__group}>
          <input
            type="password"
            placeholder="Password"
            id="password"
            className={classes.Signup__input}
            ref={passwordInputRef}
          ></input>
          <label for="password" className={classes.Signup__label}>
            Password
          </label>
        </div>

        <div className={classes.Signup__group}>
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
            className={classes.Signup__input}
            ref={passwordConfirmInputRef}
          ></input>
          <label for="confirmPassword" className={classes.Signup__label}>
            Confirm Password
          </label>
        </div>

        <button
          className={`${button.btn} ${button.btn__primary} ${classes.Signup__Button}`}
        >
          Sign Up
        </button>
        <p>
          Already have an account?{" "}
          <span onClick={props.toggleIsSigningUp}>Login</span>
        </p>
      </form>
      {/* ERROR MODAL */}
      {signupError && (
        <ErrorModal onClose={handleCloseModal} passingError={errorMsg} />
      )}
    </div>
  );
};

export default Signup;

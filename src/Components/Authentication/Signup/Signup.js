import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { doc, setDoc } from "firebase/firestore";

import classes from "./Signup.module.scss";
import ErrorModal from "./ErrorModal";
import button from "../../Global Components/Buttons/Button.module.scss";
import { authActions } from "../../../Store/store";
import { firestore } from "../../../utils/init-firebase";

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

    // GET USER INFO
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
            // if successfull then dispatch redux state
            dispatch(
              authActions.loginUser({
                isLoggedIn: true,
                userData: data,
              })
            );

            // if successfull then call newUser function
            console.log("==> reach this spot");
            newUser(data);

            // Redirect user to profile
            return history.replace("/userprofile");
          });
        } else {
          return res.json().then(() => {
            setSignupError(true);
            setErrorMsg(shortErrorMsg);
          });
        }
      });
    } else {
      setSignupError(true);
      setErrorMsg(matchedErrorMsg);
    }
  };

  // ADDING NEW USER TO FIRESTORE LOGIC
  const newUser = (data) => {
    setDoc(doc(firestore, "usersList", data.idToken), {
      displayName: data.displayName,
      email: data.email,
      uid: data.idToken,
      profileImage: "",
      favoritesList: "",
      personalRecipes: "",
    });
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
        {/* USER NAME */}
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

        {/* EMAIL */}
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

        {/* PASSWORD */}
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

        {/* CONFIRM PASSWORD */}
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

        {/* SUBMIT BTN */}
        <button
          className={`${button.btn} ${button.btn__primary} ${classes.Signup__Button}`}
        >
          Sign Up
        </button>

        {/* TOGGLE BTN */}
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

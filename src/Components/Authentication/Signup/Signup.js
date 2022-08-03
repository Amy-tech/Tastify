// I WILL NEED TO REDO SIGNUP & LOGIN
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
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

  // ERROR MESSAGES
  const matchedErrorMsg = "Your passwords dont match";

  // REFS
  const displayNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordConfirmInputRef = useRef();

  const history = useHistory();
  const dispatch = useDispatch();

  const signupHandler = (e) => {
    e.preventDefault();

    // GET USER INFO
    const enteredDisplayName = displayNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredPasswordConfirm = passwordConfirmInputRef.current.value;

    // ADDED VALIDATION
    if (enteredPassword === enteredPasswordConfirm) {
      const auth = getAuth();

      createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          // sign in with firebaseAuth
          const user = userCredential.user;

          // adding displayName to user credentials
          updateProfile(auth.currentUser, {
            displayName: enteredDisplayName,
          })
            .then(() => {
              // if successful then dispatch redux state
              dispatch(
                authActions.loginUser({
                  isLoggedIn: true,
                  userData: user,
                })
              );

              // if successfull then call newUser function
              newUser(user);

              // redirect user to profile
              return history.replace("/userprofile");
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          setSignupError(true);
          setErrorMsg(err.message);
        });
    } else {
      setSignupError(true);
      setErrorMsg(matchedErrorMsg);
    }
  };

  // ADDING NEW USER TO FIRESTORE LOGIC
  const newUser = (user) => {
    console.log(user);
    setDoc(doc(firestore, "usersList", user.uid), {
      displayName: user.displayName,
      email: user.email,
      uid: user.uid,
      photoURL: "",
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
            ref={displayNameInputRef}
            required
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
            required
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
            required
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
            required
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

import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import ErrorModal from "../Signup/ErrorModal";
import classes from "./Login.module.scss";

import button from "../../Global Components/Buttons/Button.module.scss";
import { authActions } from "../../../Store/store";

const Login = (props) => {
  // STATE
  const [loginError, setLoginError] = useState();
  const [errMessage, setErrMessage] = useState();

  // ERROR MESSAGES
  const accessErrMessage = "Your login details are incorrect, please try again";

  // REFS
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const dispatch = useDispatch();
  const history = useHistory();

  const loginHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // LOGIN LOGIC
    const auth = getAuth();
    signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then((userCredential) => {
        // sign in with firebase auth
        const user = userCredential.user;
        console.log(user); // this works

        // if successful then dispatch redux state
        dispatch(
          authActions.loginUser({
            isLoggedIn: true,
            userData: user,
          })
        );

        // redirect user to recipeFeed
        return history.replace("/recipefeed");
      })
      .catch(() => {
        setLoginError(true);
        setErrMessage(accessErrMessage);
      });
  };

  // CLOSE ERROR MODAL
  const handleCloseModal = () => {
    setLoginError(false);
  };

  return (
    <div className={classes.Signin}>
      <form
        className={classes.Signin__Form}
        autoComplete="off"
        onSubmit={loginHandler}
      >
        <div className={classes.Signin__group}>
          <input
            type="email"
            placeholder="Email"
            className={classes.Signin__input}
            id="email"
            ref={emailInputRef}
            required
          ></input>
          <label for="email" className={classes.Signin__label}>
            Email
          </label>
        </div>
        <div className={classes.Signin__group}>
          <input
            type="password"
            placeholder="Password"
            className={classes.Signin__input}
            id="password"
            ref={passwordInputRef}
            required
          ></input>
          <label for="password" className={classes.Signin__label}>
            Password
          </label>
        </div>
        <div className={classes.Test}>
          <button
            className={`${button.btn} ${button.btn__primary} ${classes.Signin__Button}`}
          >
            Sign In
          </button>
          <p>
            Dont have an account?
            <span onClick={props.toggleIsSigningUp}> Create Account</span>
          </p>
        </div>
      </form>
      {/* ERROR MODAL */}
      {loginError && (
        <ErrorModal onClose={handleCloseModal} passingError={errMessage} />
      )}
    </div>
  );
};

export default Login;

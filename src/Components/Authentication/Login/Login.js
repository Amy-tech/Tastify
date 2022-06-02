import React, { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

import ErrorModal from "../Signup/ErrorModal";
import AuthContext from "../../../Store/auth-context";
import classes from "./Login.module.scss";

import button from "../../Global Components/Buttons/Button.module.scss";

const Login = (props) => {
  // STATE
  const [isLoggedIn, setIsLoggedin] = useState();
  const [loginError, setLoginError] = useState();
  const [errMessage, setErrMessage] = useState();
  const accessErrMessage = "Your login details are incorrect, please try again";

  // REFS
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const loginHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // TESTING PURPOSES ONLY //
    console.log(enteredEmail, enteredPassword);

    //LOGIN LOGIC
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBs7w0Fvv7DvUQJZF9jQLoP_tNYc9YbUOM",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setIsLoggedin(false);

        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            setLoginError(true);
            setErrMessage(accessErrMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        history.replace("/recipefeed");
      })
      .catch((err) => {
        setIsLoggedin(false);
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

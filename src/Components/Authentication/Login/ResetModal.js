import React, { useEffect, useState } from "react";
import { useAuth } from "../../../Store/auth-context";
import { ImCross } from "react-icons/im";
import typography from "../../Global Components/Global Sass/Typography.module.scss";
import classes from "./ResetModal.module.scss";

const ResetModal = (props) => {
  // STATE (in forgotPasword page set state that ties with the input value and onchange event)
  const [email, setEmail] = useState("");
  const { forgotPassword } = useAuth;

  const closeModalHandler = (e) => {
    e.preventDefault();
    props.onClose();
  };

  const submitForgotPassword = async (e) => {
    console.log("the submit btn for password reset was clicked");
    //logic goes here
    // FIX -> ERROR forgotPassword is not a function
    forgotPassword(email)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <div className={classes.modal}>
      {/* RESET MESSAGE */}
      <div className={classes.modal__modalContent}>
        <div className={classes.modal__modalBody_message}>
          <h2
            className={`${typography.primary__paragraph} ${classes.modal__modalBody_messageText_reset}`}
          >
            Please enter your email to request a password reset
          </h2>
        </div>
        <form className={classes.modal__modalBody__modalForm}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className={classes.modal__modalBody__modalForm_input}
          />
          <label className={classes.modal__modalBody__modalForm_label}>
            Email
          </label>
          <button
            className={`${classes.modal__modalBody__modalForm_submit}`}
            onClick={submitForgotPassword}
          >
            Submit
          </button>
        </form>
        {/* CLOSE MODAL */}
        <button
          onClick={closeModalHandler}
          className={`${classes.modal__modalBody_btn} ${classes.modal__modalBody_btn_reset}`}
        >
          <ImCross />
        </button>
      </div>
    </div>
  );
};

export default ResetModal;

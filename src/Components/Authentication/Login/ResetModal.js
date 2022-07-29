import React, { useState } from "react";

import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import { ImCross } from "react-icons/im";
import typography from "../../Global Components/Global Sass/Typography.module.scss";
import classes from "./ResetModal.module.scss";
import ErrorModal from "../Signup/ErrorModal.module.scss";
import successClass from "./SuccessModal.module.scss";

const ResetModal = (props) => {
  // STATE
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);

  // MESSAGES
  const emailRequest = "Please enter your email to request a password reset";
  const errorMsg = "Please make sure you entered a valid email address";
  const successMsg =
    "We have emailed your password reset link, if you dont find the email, please check your spam folder";

  // CLOSE MODAL
  const closeModalHandler = (e) => {
    e.preventDefault();
    props.onClose();
  };

  // RESET PASSWORD LOGIC
  const submitForgotPassword = (e) => {
    e.preventDefault();
    const auth = getAuth();

    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setEmailSuccess(true);
          setEmail("");
          setError(false);
        })
        .catch((err) => {
          setError(true);
        });
    } else {
      setError(true);
    }
  };

  return (
    <div className={classes.modal}>
      <div className={classes.modal__modalContent}>
        {/* RESET &/OR SUCCESS MESSAGE */}
        {emailSuccess ? (
          <div className={classes.modal__modalBody_message}>
            <h2
              className={`${typography.primary__paragraph} ${successClass.modal__modalBody_messageText_success}`}
            >
              {successMsg}
            </h2>
          </div>
        ) : (
          <div>
            {/* RESET &/OR ERROR MESSAGE */}
            {error ? (
              <div className={ErrorModal.modal__modalBody_message}>
                <h2
                  className={`${typography.primary__paragraph} ${ErrorModal.modal__modalBody_messageText_error}`}
                >
                  {errorMsg}
                </h2>
              </div>
            ) : (
              <div className={classes.modal__modalBody_message}>
                <h2
                  className={`${typography.primary__paragraph} ${classes.modal__modalBody_messageText_reset}`}
                >
                  {emailRequest}
                </h2>
              </div>
            )}

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
                onClick={(e) => submitForgotPassword(e, email)}
              >
                Submit
              </button>
            </form>
          </div>
        )}

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

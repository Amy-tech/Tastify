import React from "react";

import { ImCross } from "react-icons/im";
import typography from "../../Global Components/Global Sass/Typography.module.scss";
import classes from "./ErrorModal.module.scss";

const ErrorModal = (props) => {
  const passingError = { ...props };
  const errorMessage = Object.values(passingError);

  const closeModalHandler = (e) => {
    e.preventDefault();
    props.onClose();
  };

  return (
    <div className={classes.modal}>
      {/* ERROR MESSAGE */}
      <div className={classes.modal__modalContent}>
        <div className={classes.modal__modalBody_message}>
          <h2
            className={`${typography.primary__paragraph} ${classes.modal__modalBody_messageText_error}`}
          >
            Oops ! Something went wrong, <br /> {errorMessage}
          </h2>
        </div>
        {/* CLOSE MODAL */}
        <button
          onClick={closeModalHandler}
          className={`${classes.modal__modalBody_btn} ${classes.modal__modalBody_btn_error}`}
        >
          <ImCross />
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;

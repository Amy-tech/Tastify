import React from "react";
import Modal from "../Global Components/Card/Modal";
import typography from "../Global Components/Global Sass/Typography.module.scss";
import classes from "../Global Components/Card/Card.module.scss";
import button from "../Global Components/Buttons/Button.module.scss";

const ErrorModal = (props) => {
  const closeModalHandler = (e) => {
    e.preventDefault();
    props.onClose();
  };

  return (
    <Modal>
      {/* shape */}
      <div className={classes.modal__modalShape_error}></div>
      {/* content */}
      <div className={classes.modal__modalBody_title}>
        <h2 className={typography.primary__headingMedium}>Error</h2>
      </div>
      <div className={classes.modal__modalBody_message}>
        <h2
          className={`${typography.primary__headingSmall} ${classes.modal__modalBody_messageText_error}`}
        >
          Oops ! Something went wrong, Please ensure all form fields are filled
          in
        </h2>
      </div>
      <button
        onClick={closeModalHandler}
        className={`${button.btn} ${button.btn__primary} ${classes.modal__modalBody_btn} ${classes.modal__modalBody_btn_error}`}
      >
        go back
      </button>
    </Modal>
  );
};

export default ErrorModal;

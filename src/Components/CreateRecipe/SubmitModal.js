import React from "react";
import { Link } from "react-router-dom";
import Modal from "../Global Components/Card/Modal";
import typography from "../Global Components/Global Sass/Typography.module.scss";
import classes from "../Global Components/Card/Card.module.scss";
import button from "../Global Components/Buttons/Button.module.scss";

const SubmitModal = () => {
  // const modalButtonHandler = (e) => {
  //   e.preventDefault();
  //   console.log("the done btn was clicked");
  // };

  return (
    <Modal>
      {/* shape */}
      <div className={classes.modal__modalShape_submit}></div>
      {/* content */}
      <div className={classes.modal__modalBody_title}>
        <h2 className={typography.primary__headingMedium}>Submitted</h2>
      </div>
      <div className={classes.modal__modalBody_message}>
        <h2
          className={`${typography.primary__headingSmall} ${classes.modal__modalBody_messageText_submit}`}
        >
          Thankyou! the recipe has successfully been submitted
        </h2>
      </div>
      <Link
        to={{ pathname: "/RecipeFeed" }}
        className={`${button.btn} ${button.btn__primary} ${classes.modal__modalBody_btn}`}
      >
        done
      </Link>
    </Modal>
  );
};

export default SubmitModal;

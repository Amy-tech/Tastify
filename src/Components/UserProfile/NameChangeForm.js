import React, { useRef } from "react";
import classes from "./NameChangeForm.module.scss";

import { updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

import { auth } from "../../utils/init-firebase";
import { firestore } from "../../utils/init-firebase";

const NameChangeForm = () => {
  // REFS
  const updatedDisplayNameInputRef = useRef();

  // FETCHING CURRENT USER INFORMATION
  const currentUser = auth.currentUser;

  const changeDisplayNameHandler = (e) => {
    e.preventDefault();
    // GET USER CHANGED NAME
    const updateDisplayName = updatedDisplayNameInputRef.current.value;

    // ADDED VALIDATION
    if (updateDisplayName != null) {
      // UPDATING FIREBASE AUTH
      updateProfile(currentUser, {
        displayName: updateDisplayName,
      })
        .then(() => {
          // ADDING CHANGED NAME TO FIRESTORE
          const displayNameRef = doc(firestore, "usersList", currentUser.uid);
          updateDoc(displayNameRef, {
            displayName: updateDisplayName,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("please fill in the field");
    }
  };

  return (
    <div className={classes.NameChange}>
      <form className={classes.NameChange__Form} autoComplete="off">
        {/* USER NAME */}
        <div className={classes.NameChange__group}>
          <input
            type="text"
            placeholder="New user name"
            id="name"
            className={classes.NameChange__input}
            ref={updatedDisplayNameInputRef}
            onChange={changeDisplayNameHandler}
            required
          ></input>
          <label for="name" className={classes.NameChange__label}>
            User Name
          </label>
        </div>
      </form>
    </div>
  );
};

export default NameChangeForm;

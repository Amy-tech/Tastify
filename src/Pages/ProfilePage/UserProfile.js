import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import { doc, updateDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";

import defaultPlaceholder from "../../images/placeholder.jpg";
import typography from "../../Components/Global Components/Global Sass/Typography.module.scss";
import button from "../../Components/Global Components/Buttons/Button.module.scss";
import classes from "./UserProfile.module.scss";
import { ImPencil2 } from "react-icons/im";

import { firestore } from "../../utils/init-firebase";
import { auth } from "../../utils/init-firebase";
import { storage } from "../../utils/init-firebase";

import NameChangeForm from "./NameChangeForm.js";

const UserProfile = () => {
  // STATE
  const [profileImage, setProfileImage] = useState(defaultPlaceholder);
  const [showProgressCounter, setShowProgressCounter] = useState(null);
  const [imageProgress, setImageProgress] = useState(false);
  const [newName, setNewName] = useState(false);

  //REFS
  // const updatedDisplayNameInputRef = useRef();

  // FETCHING CURRENT USER INFORMATION
  const currentUser = auth.currentUser;
  // console.log(currentUser); //this works

  // PROFILE IMAGE HANDLER
  const imageEditHandler = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    imageUploadHandler(file);
  };

  // PROFILE IMAGE LOGIC
  const imageUploadHandler = (file) => {
    if (!file) return;

    // ADDING PROFILE IMAGE TO FIREBASE AUTH
    updateProfile(currentUser, {
      photoURL: file.name,
    });

    // ADDING PROFILE IMAGE TO FIRESTORE
    const photoURLRef = doc(firestore, "usersList", currentUser.uid);
    updateDoc(photoURLRef, {
      photoURL: file.name,
    });

    // ADDING PROFILE IMAGE TO CURRENT USER STORAGE
    const storageRef = ref(storage, `/${currentUser.uid}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    setShowProgressCounter(true);

    // TRACKING PROGRESS
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setImageProgress(progress);
      },
      (err) => console.log(err),

      // FETCHING CHANGED IMAGE
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setProfileImage(url);
          setShowProgressCounter(false);
        });
      }
    );

    file && updateProfile(currentUser.uid, { photoURL: profileImage });
  };

  // FETCHING CURRENT IMAGE
  const photoRef = ref(storage, `/${currentUser.uid}/${currentUser.photoURL}`);

  // USE EFFECT
  useEffect(() => {
    const fetchingImage = async () => {
      const image = await getDownloadURL(photoRef);
      setProfileImage(image);
    };

    fetchingImage();
  }, [photoRef]);

  // CHANGING USER NAME
  const nameEditHandler = () => {
    // TOGGLE NAME INPUT
    if (newName === false) {
      setNewName(true);
    } else {
      setNewName(false);
    }
  };

  return (
    <div className={classes.profile}>
      <header className={classes.profile__heading}>
        <div className={classes.profile__heading_edit}>
          {/* EDIT PROFILE IMAGE BTN */}
          <input
            type="file"
            name="image-upload"
            id="input"
            accept="image/*"
            onChange={imageEditHandler}
            className={classes.profile__heading_editInput}
          />
          <label htmlFor="input" className={classes.profile__heading_editLabel}>
            <ImPencil2 />
          </label>
        </div>

        {/* DISPLAY PROFILE IMAGE */}
        <div className={classes.profile__heading_userPic}>
          <img
            src={profileImage}
            alt="Avatar"
            className={classes.profile__heading_avitar}
          ></img>
        </div>

        {/* UPLOAD COUNTER */}
        {showProgressCounter && (
          <h1 className={classes.profile__heading_uploading}>
            Uploading {imageProgress} %
          </h1>
        )}

        {/* REMEMBER CONTINUE ON THIS SPOT */}
        {newName ? (
          <NameChangeForm />
        ) : (
          <div className={classes.profile__heading_userDetails}>
            {/* SUBHEADING - USER NAME */}
            <p
              className={`${typography.paragraph} ${classes.profile__heading_subHeading}`}
            >
              User Name :
            </p>

            {/* USER NAME */}
            <p
              className={`${typography.paragraph} ${classes.profile__heading_userName}`}
            >
              {currentUser.displayName}
            </p>
          </div>
        )}
        {/* TOGGLE CHANGE USER NAME INPUT */}

        {/* SUBHEADING - NAVIGATION BTNS */}
        <div className={classes.profile__heading_btnContainer}>
          <NavLink
            to={"#"}
            onClick={nameEditHandler}
            className={`${button.btn__secondary} ${button.btn} ${classes.profile__heading_btnContainer_btn1}`}
          >
            change username
          </NavLink>

          <NavLink
            to={"/recipefeed"}
            className={`${button.btn__secondary} ${button.btn} ${classes.profile__heading_btnContainer_btn2}`}
          >
            looking for recipes
          </NavLink>

          <NavLink
            to={"/createrecipe"}
            className={`${button.btn__secondary} ${button.btn} ${classes.profile__heading_btnContainer_btn3}`}
          >
            create new recipe
          </NavLink>
        </div>
      </header>

      {/* BODY - USER RECIPE HOLDER */}
      <div className={classes.profile__body}>
        <div className={classes.profile__empty}>
          <p className={typography.paragraph}>
            No Items in profile.
            <br />
            To add a recipe to your profile, fill out and submit the recipe
            form.
          </p>
          <nav>
            <NavLink
              to={"/createrecipe"}
              className={`${button.btn__primary} ${button.btn}`}
            >
              Create new recipe
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

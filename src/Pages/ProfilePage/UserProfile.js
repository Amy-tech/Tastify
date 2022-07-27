import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { doc, updateDoc, getDoc } from "firebase/firestore";

// import { storage } from "../../utils/init-firebase";
// import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
// import { updateProfile } from "@firebase/auth";

import defaultPlaceholder from "../../images/placeholder.jpg";
import typography from "../../Components/Global Components/Global Sass/Typography.module.scss";
import button from "../../Components/Global Components/Buttons/Button.module.scss";
import classes from "./UserProfile.module.scss";
import { ImPencil2 } from "react-icons/im";

import UserStorage from "../../utils/UserStorage.js"; //Importing pages dont get Brackets
import { firestore } from "../../utils/init-firebase";

const UserProfile = () => {
  // STATE
  const [profileImage, setProfileImage] = useState(defaultPlaceholder);
  const [showUpload, setShowUpload] = useState(false);
  const [imageProgress, setImageProgress] = useState(0);
  // const [allDocs, setAllDocs] = useState([]);

  const authData = useSelector((state) => state.auth);

  // PROFILE IMAGE HANDLER
  const imageEditHandler = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    imageUploadHandler(file);
  };

  // PROFILE IMAGE LOGIC
  const imageUploadHandler = (file) => {
    if (!file) return;
    // const documentName = authData.user.idToken;
    // console.log(documentName);

    // ADDING IMAGE LOADING COUNTER

    // ADDING PROFILE IMAGE TO FIRESTORE
    const profileImageRef = doc(firestore, "usersList", authData.user.idToken);
    updateDoc(profileImageRef, {
      profileImage: file.name,
    }); //this only work if the user registers, but not when the user logs in again there after!
    // gives error ==> "uncaught (in promise) firebaseError: No document to update..."

    // ** THIS IS STORAGE CODE **
    // if (currentProfileImageSnap) {
    //   console.log(currentProfileImageSnap.data());
    // } else {
    //   console.log("no such document");
    // }

    // this currently stores all images to firebase storage
    // const storageRef = ref(storage, `/files/${file.name}`);
    // const uploadTask = uploadBytesResumable(storageRef, file);
    // setShowUpload(true);

    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     const progress = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     );

    //     setImageProgress(progress);
    //   },
    //   (err) => console.log(err),

    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then((url) => {
    //       setProfileImage(url);
    //       setShowUpload(false);
    //     });
    //   }
    // );

    // updateProfile(authData.user.idToken, { photoURL: profileImage });
  };

  return (
    <div className={classes.profile}>
      <header className={classes.profile__heading}>
        <div className={classes.profile__heading_edit}>
          <input
            type="file"
            name="image-upload"
            id="input"
            accept="image/*"
            onChange={imageEditHandler}
            className={classes.profile__heading_editInput}
          />

          {/* EDIT BTN */}
          <label htmlFor="input" className={classes.profile__heading_editLabel}>
            <ImPencil2 />
          </label>
        </div>

        {/* USER PROFILE IMAGE */}
        <div className={classes.profile__heading_userPic}>
          <img
            src={profileImage}
            alt="avitar placeholder"
            className={classes.profile__heading_avitar}
          ></img>
        </div>
        {showUpload && (
          <h1 className={classes.profile__heading_uploading}>
            Uploading {imageProgress} %
          </h1>
        )}

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
            {authData.user.displayName}
          </p>
        </div>

        {/* SUBHEADING - NAVIGATION BTNS */}
        <div className={classes.profile__heading_btnContainer}>
          <NavLink
            to={"#"}
            className={`${button.btn__secondary} ${button.btn} ${classes.profile__heading_btnContainer_btn1}`}
          >
            change password
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
      <body className={classes.profile__body}>
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
        <UserStorage />
      </body>
    </div>
  );
};

export default UserProfile;

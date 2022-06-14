import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import defaultPlaceholder from "../../images/placeholder.jpg";
import typography from "../../Components/Global Components/Global Sass/Typography.module.scss";
import button from "../../Components/Global Components/Buttons/Button.module.scss";
import classes from "./UserProfile.module.scss";
import { ImPencil2 } from "react-icons/im";

const UserProfile = () => {
  // STATE
  const [profileAvitar, setProfileAvitar] = useState(defaultPlaceholder);

  const authData = useSelector((state) => state.auth);
  console.log(authData); // this works

  // PROFILE PICTURE HANDLER
  const avitarEditHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileAvitar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
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
            onChange={avitarEditHandler}
            className={classes.profile__heading_editInput}
          />
          <label htmlFor="input" className={classes.profile__heading_editLabel}>
            <ImPencil2 />
          </label>
        </div>

        <div className={classes.profile__heading_userPic}>
          <img
            src={profileAvitar}
            alt="avitar placeholder"
            className={classes.profile__heading_avitar}
          ></img>
        </div>

        <div className={classes.profile__heading_userDetails}>
          <p
            className={`${typography.paragraph} ${classes.profile__heading_subHeading}`}
          >
            User Name :
          </p>
          <p
            className={`${typography.paragraph} ${classes.profile__heading_userName}`}
          >
            {authData.user.displayName}
          </p>
        </div>

        <button
          className={`${button.btn__secondary} ${button.btn} ${classes.profile__heading_changePassword}`}
        >
          Change Password
        </button>
        {/* THIS IS JUST TEMPORARY */}
        <nav>
          <NavLink
            to={"/recipefeed"}
            className={`${button.btn__secondary} ${button.btn} ${classes.profile__heading_changePassword}`}
          >
            look for recipes
          </NavLink>
        </nav>
      </header>
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
      </body>
    </div>
  );
};

export default UserProfile;

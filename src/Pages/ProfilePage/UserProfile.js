import React from "react";
import placeholder from "../../images/placeholder.jpg";
import typography from "../../Components/Global Components/Global Sass/Typography.module.scss";
import button from "../../Components/Global Components/Buttons/Button.module.scss";
import classes from "./UserProfile.module.scss";
const UserProfile = () => {
  return (
    <div className={classes.profile}>
      <header className={classes.profile__heading}>
        <div className={classes.profile__heading_userPic}>
          <img
            src={placeholder}
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
          {/* REMEMBER this is hard coded until I retrieve userName from sign up */}
          <p
            className={`${typography.paragraph} ${classes.profile__heading_userName}`}
          >
            Cheeken
          </p>
        </div>

        <button
          className={`${button.btn__secondary} ${button.btn} ${classes.profile__heading_changePassword}`}
        >
          Change Password
        </button>
      </header>
      <body className={classes.profile__body}>
        <div className={classes.profile__empty}>
          <p className={typography.paragraph}>
            No Items in profile.
            <br />
            To add a recipe to your profile, fill out and submit the recipe
            form.
          </p>
          <a
            href="/createrecipe"
            className={`${button.btn__primary} ${button.btn}`}
          >
            Create new recipe
          </a>
        </div>
      </body>
    </div>
  );
};

export default UserProfile;

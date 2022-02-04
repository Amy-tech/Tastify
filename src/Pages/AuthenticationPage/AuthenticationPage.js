import React from "react";
import Authentication from "../../Components/Authentication/Authentication";
import classes from "./AuthenticationPage.module.scss";
const AuthenticationPage = (props) => {
  return (
    <div
      className={classes.AuthenticationPage}
      style={{ left: props.open ? "0" : "-100vw" }}
    >
      <Authentication></Authentication>
    </div>
  );
};

export default AuthenticationPage;

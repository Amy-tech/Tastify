import React from "react";
import classes from "./Setup.module.scss";
const Setup = () => {
  return (
    <div className={classes.setup}>
      <div className={classes.setup_container}>
        <div className={classes.setup_sectionHeader}>
          <h1 className={classes.setup_sectionTitle}>
            You're almost all setup, just a few more details
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Setup;

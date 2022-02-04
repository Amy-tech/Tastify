import { Route, Switch } from "react-router-dom";
import { Fragment } from "react";

//  PAGES
import Homepage from "./Pages/Homepage/Homepage";
import AuthenticationPage from "./Pages/AuthenticationPage/AuthenticationPage";
import Navbar from "./Components/Navbar/Navbar";
import Authentication from "./Components/Authentication/Authentication";

import classes from "./sass/base.module.scss";

function App() {
  return (
    <Fragment className={classes.body}>
      <Navbar></Navbar>
      <Route exact path="/" component={Homepage}></Route>
      <Route exact path="/authenticate" component={AuthenticationPage}></Route>
    </Fragment>
  );
}

export default App;

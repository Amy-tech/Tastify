import { Route, Switch } from "react-router-dom";
import { Fragment } from "react";

//  PAGES

import Homepage from "./Pages/Homepage/Homepage";
import AuthenticationPage from "./Pages/AuthenticationPage/AuthenticationPage";
import RecipefeedPage from "./Pages/RecipefeedPage/RecipefeedPage";

import classes from "./Components/Global Components/Global Sass/Base.module.scss";

function App() {
  return (
    <Fragment className={classes.body}>
      <Route exact path="/" component={Homepage}></Route>
      <Route exact path="/authenticate" component={AuthenticationPage}></Route>
      <Route path="/recipefeed" component={RecipefeedPage}></Route>
    </Fragment>
  );
}

export default App;

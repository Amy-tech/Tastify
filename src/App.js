import { Route, Switch } from "react-router-dom";
import { Fragment } from "react";

//  IMPORTING PAGES
import Homepage from "./Pages/Homepage/Homepage";
import AuthenticationPage from "./Pages/AuthenticationPage/AuthenticationPage";
import RecipefeedPage from "./Pages/RecipefeedPage/RecipefeedPage";
import RecipeMethod from "./Components/Recipefeed/RecipeMethod";
import CreateRecipe from "./Components/CreateRecipe/CreateRecipe";

import classes from "./Components/Global Components/Global Sass/Base.module.scss";

function App() {
  return (
    <Fragment className={classes.body}>
      <Route exact path="/" component={Homepage}></Route>
      <Route exact path="/authenticate" component={AuthenticationPage}></Route>
      <Route exact path="/recipefeed" component={RecipefeedPage}></Route>
      <Route exact path="/recipemethod" component={RecipeMethod}></Route>
      <Route exact path="/createrecipe" component={CreateRecipe}></Route>
    </Fragment>
  );
}

export default App;

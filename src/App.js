import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

// import { connect } from "react-redux";

//  IMPORTING PAGES
import Homepage from "./Pages/HomePage/Homepage";
import AuthenticationPage from "./Pages/AuthenticationPage/AuthenticationPage";
import RecipefeedPage from "./Pages/RecipefeedPage/RecipefeedPage";
import RecipeMethod from "./Components/Recipefeed/RecipeMethod";
import PersonalRecipeMethod from "./Components/UserProfile/PersonalRecipeMethod";
import EditPersonalRecipe from "./Components/UserProfile/EditPersonalRecipe";
import CreateRecipe from "./Components/CreateRecipe/CreateRecipe";
import FavoritesPage from "./Pages/FavoritesPage/FavoritesPage";
import UserProfile from "./Pages/ProfilePage/UserProfile";

import classes from "./Components/Global Components/Global Sass/Base.module.scss";

function App({ dispatch, favRecipe }) {
  // console.log(dispatch);
  // console.log(favRecipe); // the result shows 0
  return (
    <Fragment className={classes.body}>
      <Route exact path="/" component={Homepage}></Route>
      <Route exact path="/authenticate" component={AuthenticationPage}></Route>
      <Route exact path="/recipefeed" component={RecipefeedPage}></Route>
      <Route exact path="/recipemethod" component={RecipeMethod}></Route>
      <Route
        exact
        path="/personalrecipemethod"
        component={PersonalRecipeMethod}
      ></Route>
      <Route
        exact
        path="/editpersonalrecipe"
        component={EditPersonalRecipe}
      ></Route>
      <Route exact path="/createrecipe" component={CreateRecipe}></Route>
      <Route exact path="/favoritespage" component={FavoritesPage}></Route>
      <Route exact path="/userprofile" component={UserProfile}></Route>
    </Fragment>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     favRecipe: state.recipe,
//   };
// };

// export default connect(mapStateToProps)(App);
export default App;

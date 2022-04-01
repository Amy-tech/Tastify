// REDUX STORE
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  recipe: 0,
};

const favRecipeData = (state = initialState, action) => {
  switch (action.type) {
    case "add_favorite_recipe":
      return {
        recipe: action.payload,
      };
    default:
      return state;
  }
};

export default createStore(favRecipeData, applyMiddleware(thunk));

export const addRecipeAction = () => async (dispatch, getState) => {
  const response = await fetch(
    "https://recipe-book-a37e0-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
  );
  const responseData = await response.json();

  const loadedRecipe = [];

  for (const key in responseData) {
    loadedRecipe.push({
      id: key,
      image: responseData[key].image,
      name: responseData[key].name,
      description: responseData[key].description,
      type: responseData[key].type,
      amount: responseData[key].amount,
      measurement: responseData[key].measurement,
      ingredient: responseData[key].ingredient,
      portion: responseData[key].portion,
      method: responseData[key].method,
      owner: responseData[key].userName,
    });
  }

  console.log(loadedRecipe); // This fetches all of the data on the data base!
};

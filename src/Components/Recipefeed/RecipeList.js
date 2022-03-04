import React from "react";
import RecipeItem from "./RecipeItem.js";
import classes from "./RecipeList.module.scss";

const DUMMY_RECIPES = [
  {
    id: "r1",
    image:
      "https://media.istockphoto.com/photos/closeup-photograph-of-a-pile-of-plain-naan-flatbreads-picture-id183564340?k=20&m=183564340&s=612x612&w=0&h=aMCmD-sj-AT0VqV8bxICw9F7Dj7kpATdTrX7-V_qPto=",
    name: "Machine made Naan bread",
    description:
      "delicious flat bread originating from nothern India, can be filled with various ingredients but the most popular is garlic butter.",
    ingredients: [
      {
        amount: 90,
        unitOfMeasurment: "ml",
        ingredient: "Water",
      },
      {
        amount: 3,
        unitOfMeasurment: "tbs",
        ingredient: "yoghurt",
      },
      {
        amount: 1,
        unitOfMeasurment: "tbs",
        ingredient: "butter",
      },
      {
        amount: 1,
        unitOfMeasurment: "tbs",
        ingredient: "olive oil",
      },
      {
        amount: 225,
        unitOfMeasurment: "g",
        ingredient: "flour",
      },
      {
        amount: 1,
        unitOfMeasurment: "tsp",
        ingredient: "salt",
      },
      {
        amount: 1,
        unitOfMeasurment: "tsp",
        ingredient: "sugar",
      },
      {
        amount: 1,
        unitOfMeasurment: "packet",
        ingredient: "yeast",
      },
    ],
    portion: 2,
    method: [
      "Place the water, yoghurt, butter and olive oil into the bread bin",
      "Add the flour to separate the wet ingredients from the dry ingredients",
      "Add the salt and sugar and create a small well in the middle for the yeast",
      "Place the bread bin back into the bread machine setting it to dough cycle then press start",
      "Once complete, take the dough out and gently fold to remove excess air",
      "Cut into 4 equal sized portions and roll out into an oval shape",
      "Coat the dough with garlic butter and place buttered side down into a pan on medium to low heat",
      "Coat the other side and flip when golden brown",
    ],
    owner: "This recipe was created by : Amy",
  },
  {
    id: "r2",
    image:
      "https://media.istockphoto.com/photos/tasty-pasta-with-pesto-served-on-plate-picture-id1045283212?k=20&m=1045283212&s=612x612&w=0&h=CxTgMpoXh8nKdEZEj9ZSASEBG0FOsU_Te-ovrVxYexs=",
    name: "Basil Pesto Pasta",
    description:
      "A thick creamy and saucy pasta dish that tastes bright and herby of basil, and rich with cheese.",
    ingredients: [
      {
        amount: 4,
        unitOfMeasurment: "unit",
        ingredient: "chicken breast fillets",
      },
      {
        amount: 1,
        unitOfMeasurment: "punnet ",
        ingredient: "mushrooms",
      },
      {
        amount: 1.5,
        unitOfMeasurment: "punnet",
        ingredient: "cherry tomatoes",
      },
      {
        amount: 1,
        unitOfMeasurment: "tsp",
        ingredient: "crushed garlic",
      },
      {
        amount: 250,
        unitOfMeasurment: "ml",
        ingredient: "fresh cream",
      },
      {
        amount: 100,
        unitOfMeasurment: "g",
        ingredient: "basil pesto",
      },
      {
        amount: 2,
        unitOfMeasurment: "slices",
        ingredient: "feta cheese",
      },
      {
        amount: 1,
        unitOfMeasurment: "packet",
        ingredient: "linguini pasta",
      },
    ],
    portion: 4,
    method: [
      "cut chicken into bite size strips and fry on medium heat until cooked though then set aside",
      "In the same frying pan, fry mushroom slices till they start to go brown then add tomatoes and garlic and fry for another minute or two",
      "Take the pan off the heat and add the chicken to the pan.",
      "In a separate pot cook the liguini pasta according to instructions on the package",
      "Drain the liguini pasta and add it to the frying pan with the chicken and veg",
      "Mix the fresh cream and basil pesto together in a mixing jug and pour the mixture over the ingredients in the pan",
      "add the feta cubes to the pan",
      "put back on heat for 2 to 3 minutes, stirring the ingredients to heat up the cream",
      "add salt and peper to taste and serve",
    ],
    owner: "This recipe was created by : Bron",
  },
  {
    id: "r3",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Sweet Potato Curry",
    description:
      "A Sweet Vietnamese curry dish seasoned in flavour with spices",
    ingredients: [
      {
        amount: 1,
        unitOfMeasurment: "big",
        ingredient: "onion",
      },
      {
        amount: 1,
        unitOfMeasurment: "small ",
        ingredient: "chilli",
      },
      {
        amount: 1,
        unitOfMeasurment: "tsp",
        ingredient: "tumaric",
      },
      {
        amount: 1.5,
        unitOfMeasurment: "tsp",
        ingredient: "coriander",
      },
      {
        amount: 1.5,
        unitOfMeasurment: "tsp",
        ingredient: "cumin",
      },
      {
        amount: 1,
        unitOfMeasurment: "tsp",
        ingredient: "sugar",
      },
      {
        amount: 1,
        unitOfMeasurment: "can",
        ingredient: "coconut cream",
      },
      {
        amount: 6,
        unitOfMeasurment: "medium",
        ingredient: "sweet potato",
      },
      {
        amount: 4,
        unitOfMeasurment: "unit",
        ingredient: "chicken breast fillets",
      },
      {
        amount: 1.5,
        unitOfMeasurment: "cup",
        ingredient: "basmati rice",
      },
      {
        amount: 1,
        unitOfMeasurment: "handful",
        ingredient: "fresh basil",
      },
    ],
    portion: 4,
    method: [
      "Rinse the rice in cold water until the starch is removed",
      "add the rice to a pot with 3 part salted water, once boiling reduse heat and cook for 15 minutes",
      "remove the rice off the heat and let it rest for another 5 minutes befor placing it into another bowl",
      "In a deep pan fry the onion strips until golden brown, and add the finely chopped chilli",
      "Add the curry spices to the pan and cook for a minute until you can smell the fragrant",
      "Add half of the coconut cream to create a paste and stop the spices from burning, then mix in the rest of the tin ",
      "stir in the sugar",
      "add the peeled and bite sized chopped sweet potato to the frying pan and stir until mixed",
      "reduse the heat and let simmer with the lid on until the sweet potato is tender",
      "cut the chicken into bite sized pieces and mix it into the curry",
      "add the lid and cook for 15 minutes or until chicken is cooked though",
      "once the chicken is cooked through take a frok and press the sweet potato against the side of the pan to make for a thicker curry",
      "tear a handful of fresh basil and stir in befor serving",
    ],
    owner: "This recipe was created by : Francois",
  },
];
const RecipeList = () => {
  // console.log(typeof DUMMY_RECIPES);
  const recipeList = DUMMY_RECIPES.map((recipe) => (
    <RecipeItem
      key={recipe.id}
      id={recipe.id}
      image={recipe.image}
      name={recipe.name}
      description={recipe.description}
      type={recipe.type} //newly added
      ingredients={recipe.ingredients}
      portion={recipe.portion}
      method={recipe.method}
      owner={recipe.owner}
    />
  ));

  return (
    <section>
      <ul className={classes.list}>{recipeList}</ul>
    </section>
  );
};

export default RecipeList;

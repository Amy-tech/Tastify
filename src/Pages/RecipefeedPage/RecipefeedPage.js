import React from "react";

import RecipeHeading from "../../Components/Recipefeed/RecipeHeading.js";
import RecipeList from "../../Components/Recipefeed/RecipeList.js";
import Scroll from "../../Components/Global Components/Scroll/Scroll.js";
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";

const RecipefeedPage = () => {
  return (
    <div>
      {/* HEADER */}
      <header>
        <RecipeHeading />
      </header>

      {/* RECIPE LIST */}
      <main>
        <RecipeList />
      </main>

      {/* SCROLL */}
      <Scroll showBelow={250} />
    </div>
  );
};

export default RecipefeedPage;

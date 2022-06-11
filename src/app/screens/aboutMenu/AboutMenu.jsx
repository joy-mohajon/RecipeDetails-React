import React, { useState } from "react";

import RecipeDetails from "../recipeDetails/RecipeDetails";

import classes from "./AboutMenu.module.css";

const AboutMenu = ({ chef }) => {
  const [menu, setMenu] = useState(true);

  return (
    <div className={classes.menu}>
      <h2>Menu</h2>
      <div>
        {chef.menu_140 ? (
          <>
            <span
              onClick={() => setMenu(true)}
              className={menu ? classes.haveUnderline : classes.noneUnderline}
            >
              $90 Menu ({chef.cuisine})
            </span>
            &nbsp;|&nbsp;
            <span
              onClick={() => setMenu(false)}
              className={menu ? classes.noneUnderline : classes.haveUnderline}
            >
              $140 Menu ({chef.cuisine})
            </span>
          </>
        ) : (
          <span>$90 Menu ({chef.cuisine})</span>
        )}
      </div>
      <div id="large-menu">
        {menu ? (
          <RecipeDetails recipeDetails={chef.menu_90} />
        ) : (
          <RecipeDetails recipeDetails={chef.menu_140} />
        )}
      </div>
    </div>
  );
};

export default AboutMenu;

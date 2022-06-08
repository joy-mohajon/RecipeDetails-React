import React, { useState } from "react";

import classes from "./ChefProfile.module.css";

import { AiFillForward } from "react-icons/ai";

import RecipeDetails from "../recipeDetails/RecipeDetails";
import { Link } from "react-router-dom";

const ChefProfile = ({ profile }) => {
  const [menu, setMenu] = useState(true);
  return (
    <div className={classes.chef_card}>
      <div className={classes.card_inner}>
        <div className={classes.card_front}>
          <div className={classes.recipe_img}>
            <img src={profile.recipeImage} alt="" />
          </div>
          <div className={classes.profileImg}>
            <img src={profile.profileImage} alt="lost" />
          </div>
          <div className={classes.profileDetail}>
            <h4>{profile.name}</h4>
            <p>Cuisine: {profile.cuisine}</p>
          </div>
        </div>
        <div className={classes.card_back}>
          <div className={classes.backDetails}>
            <p className={classes.backMenu}>
              {profile.menu_140 ? (
                <>
                  <span
                    onClick={() => setMenu(true)}
                    className={
                      menu ? classes.haveUnderline : classes.noneUnderline
                    }
                  >
                    $90 Menu
                  </span>
                  &nbsp;|&nbsp;
                  <span
                    onClick={() => setMenu(false)}
                    className={
                      menu ? classes.noneUnderline : classes.haveUnderline
                    }
                  >
                    $140 Menu
                  </span>
                </>
              ) : (
                <span>$90 Menu</span>
              )}
            </p>
            <div className={classes.backPera} id="large-menu">
              {menu ? (
                <RecipeDetails recipeDetails={profile.menu_90} />
              ) : (
                <RecipeDetails recipeDetails={profile.menu_140} />
              )}
            </div>
          </div>
          {/* <Link to={`${profile.id}/${profile.name}`}> */}
            <div className={classes.cardButton}>
              Book {profile.name} &nbsp;
              <AiFillForward />
            </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};
//
//

export default ChefProfile;

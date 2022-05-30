import React from "react";

import classes from "./RecipeDetailes.module.css";

// react icons
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { FaPrint } from "react-icons/fa";
import OrderDetails from "../orderDetailes/OrderDetails";
import PostDetails from "../postDetails/PostDetails";

export default function RecipeDetailes() {
  return (
    <div>
      <div className={classes.rating}>
        <span>
          <AiFillStar className={classes.starIcon} />
          <AiFillStar className={classes.starIcon} />
          <AiFillStar className={classes.starIcon} />
          <AiFillStar className={classes.starIcon} />
          <AiFillStar className={classes.starIcon} />
        </span>
        <p>
          Rating: 4.33/5. From 3 votes. <br /> You voted 4, 2 days ago.
        </p>
      </div>
      <OrderDetails />
      <PostDetails />
      <div>
        <div className={classes.favorite}>
          <AiFillHeart className={classes.otherIcon} />
          Add to favorites
        </div>
        <div className={classes.favorite}>
          <FaPrint className={classes.otherIcon} />
          Print recipe
        </div>
      </div>
    </div>
  );
}

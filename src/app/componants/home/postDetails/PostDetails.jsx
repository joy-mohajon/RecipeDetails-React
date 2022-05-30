import React from "react";
import classes from "./PostDetails.module.css";

export default function PostDetails() {
  return (
    <div className={classes.postDetails}>
      <div className={classes.row}>
        <div className={classes.right}>Meal course</div>
        <div className={classes.left}>Desert</div>
      </div>
      <div className={classes.row}>
        <div className={classes.right}>Posted by</div>
        <div className={classes.left}>muid</div>
      </div>
      <div className={classes.row}>
        <div className={classes.right}>Posted on</div>
        <div className={classes.left}>November 27, 2014</div>
      </div>
    </div>
  );
}

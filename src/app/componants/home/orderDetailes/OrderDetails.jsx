import React from "react";
import classes from "./OrderDetails.module.css";

export default function OrderDetails() {
  return (
    <div className={classes.orderDetails}>
      <div className={classes.row}>
        <div className={classes.left}>Preparation time</div>
        <div className={classes.right}>15 mins</div>
      </div>
      <div className={classes.row}>
        <div className={classes.left}>Cooking time</div>
        <div className={classes.right}>30 mins</div>
      </div>
      <div className={classes.row}>
        <div className={classes.left}>Difficulty</div>
        <div className={classes.right}>moderate</div>
      </div>
      <div className={classes.row}>
        <div className={classes.left}>Serves</div>
        <div className={classes.right}>4 people</div>
      </div>
    </div>
  );
}

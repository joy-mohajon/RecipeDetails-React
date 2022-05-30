import React from "react";
import classes from "./RecipeCategories.module.css";

export default function Categories() {
  return (
    <div className={classes.categoriesCard}>
      <h5>Recipe categories</h5>
      <div className={classes.categories}>
        <div>DESERTS</div>
        <div style={{ backgroundColor: "#FF7B74 " }}>EGGS</div>
        <div style={{ backgroundColor: "#F4716A " }}>EVENTS</div>
        <div style={{ backgroundColor: "#FF7B74 " }}>KIDS</div>
        <div style={{ backgroundColor: "#F4716A " }}>PIZZA</div>
      </div>
    </div>
  );
}

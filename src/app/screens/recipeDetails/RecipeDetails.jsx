import React from "react";
import classes from "./RecipeDetails.module.css";

const RecipeDetails = ({ recipeDetails }) => {
  console.log(recipeDetails.salad);
  return (
    <div>
      <h5>Appetizer</h5>
      <p className={classes.name}>{recipeDetails.appetizer}</p>
      {recipeDetails.salad ? (
        <>
          <h5>Salads</h5>
          <p className={classes.name}>{recipeDetails.salad}</p>
        </>
      ) : (
        ""
      )}
      {recipeDetails.entree ? (
        <>
          <h5>Entree</h5>
          <p className={classes.name}>{recipeDetails.entree}</p>
        </>
      ) : (
        ""
      )}
      {recipeDetails.main ? (
        <>
          <h5>Main</h5>
          <p className={classes.name}>{recipeDetails.main}</p>
        </>
      ) : (
        ""
      )}
      {recipeDetails.dessert ? (
        <>
          <h5>Dessert</h5>
          <p className={classes.name}>{recipeDetails.dessert}</p>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default RecipeDetails;

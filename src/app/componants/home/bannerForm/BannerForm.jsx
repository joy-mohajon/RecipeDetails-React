import React from "react";
import classes from "./BannerForm.module.css";

export default function BannerForm() {
  return (
    <div className={classes.bannerForm}>
      <h5>Recipe categories</h5>
      <div>
        <p>All you need to do is enter an ingredient, a dish or a keyword.</p>
        <p>You can also select a specific category from the dropdown.</p>
        <p>There's sure to be something tempting for you to try.</p>
        <p>Enjoy!</p>
      </div>
      <div>
        <form action="">
          <input
            type="search"
            placeholder="Enter your search term"
            name="search"
            className={classes.diff_input}
          />
          <select name="rcat" className={classes.diff_input}>
            <option value="0">Select category</option>
            <option value="46">Deserts</option>
            <option value="51">Eggs</option>
            <option value="53">Events</option>
            <option value="65">Kids</option>
            <option value="84">Pizza</option>
          </select>
          <select name="mc" className={classes.diff_input}>
            <option value="0">Select meal course</option>
            <option value="45">Desert</option>
            <option value="70">Lunch</option>
          </select>
          <select name="diff" className={classes.diff_input}>
            <option value="0">Select difficulty</option>
            <option value="77">moderate</option>
          </select>
          <div>
            <input
              type="submit"
              value="Start cooking!"
              className={classes.startButton}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

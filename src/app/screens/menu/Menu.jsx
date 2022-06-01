import React from "react";
import classes from "./Menu.module.css";

export default function Menu() {
  return (
    <div class={classes.menu_book} id="menu-book">
      <h1>Menu</h1>
      <p>Please click the link below your preferred menu to book the chef.</p>
      <div class={classes.menu_type}>
        <div>New American</div>
        <div>International/Mediterranean</div>
        <div>Family Style/Catering</div>
        <div>French/Italian</div>
        <div>Asian/Japanese</div>
        <div>Sushi Omakase</div>
      </div>
    </div>
  );
}

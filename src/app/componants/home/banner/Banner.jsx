import React from "react";
import classes from "./Banner.module.css";
import chickenImage from "../../../images/banner/chicken.jpg";
import BannerVideo from "../bannerVideo/BannerVideo";
import AboutRecipe from "../aboutRecipes/AboutRecipe";

export default function Banner() {
  return (
    <div>
      <img
        src={chickenImage}
        alt="img lost.."
        className={classes.responsiveImage}
      />
      <BannerVideo />
      <AboutRecipe />
    </div>
  );
}

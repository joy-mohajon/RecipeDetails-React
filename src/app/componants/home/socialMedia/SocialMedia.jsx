import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import classes from "./SocialMedia.module.css";
import RecipeCategories from "../recipeCategories/RecipeCategories";
import BannerForm from "../bannerForm/BannerForm";
export default function SocialMedia() {
  return (
    <div>
      <div className={classes.social}>
        <div className={classes.media}>
          <BsTwitter className={classes.socialIcon} />
          <span>SHARE ON TWITTER</span>
        </div>
        <div className={classes.media} style={{ backgroundColor: "#FF7B74 " }}>
          <FaFacebookF className={classes.socialIcon} />
          <span>SHARE ON FACEBOOK</span>
        </div>
        <div className={classes.media} style={{ backgroundColor: "#F4716A " }}>
          <FaPinterestP className={classes.socialIcon} />
          <span>SHARE ON PINTEREST</span>
        </div>
      </div>
      <RecipeCategories />
      <BannerForm />
    </div>
  );
}

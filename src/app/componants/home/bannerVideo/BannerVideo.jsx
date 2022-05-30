import React from "react";
import classes from "./BannerVideo.module.css";

export default function BannerVideo() {
  return (
    <div className={classes.iframeVideo}>
      <iframe
        width="100%"
        height="281"
        src="https://www.youtube.com/embed/YFAHltzDZGk"
        title="How To Make Chicken Jerky - Start To Finish"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

import { useState, useEffect } from "react";
import styles from "../styles/slideshow.module.css";
export default function SlideShow() {
  const images = [
    "/DUMMY/1.png",
    "/DUMMY/2.png",
    "/DUMMY/3.png",
    "/DUMMY/4.png",
    "/DUMMY/5.png",
  ];

  const slideElements = images.map((image) => {
    return (
      <div className={styles.slide} data-slideIndex="0">
        <div className={styles.slide - banner}>
          Tour the Empire State Building! <a href="">Buy tickets now.</a>
        </div>
        <img width="1200" height="600" src={image} />
      </div>
    );
  });
  return (
    <div id="carousel">
      <div id="slide-container">{slideElements}</div>
      <div id="back-button" class="arrow back">
        ←
      </div>
      <div id="forward-button" class="arrow forward">
        →
      </div>
      <div class="slide-indicators">
        <div class="slide-indicator active"></div>
        <div class="slide-indicator"></div>
        <div class="slide-indicator"></div>
        <div class="slide-indicator"></div>
        <div class="slide-indicator"></div>
      </div>
    </div>
  );
}

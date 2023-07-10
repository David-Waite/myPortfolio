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
      <div key={image} className={styles.slide} data-slideIndex="0">
        <img src={image} />
      </div>
    );
  });
  return (
    <div className={styles.carousel}>
      <div className={styles.slideContainer}>{slideElements}</div>
      <div className={`${styles.arrow} ${styles.arrowBack}`}>❮</div>
      <div className={`${styles.arrow} ${styles.arrowForward}`}></div>
    </div>
  );
}

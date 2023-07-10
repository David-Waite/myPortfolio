import { useState, useEffect } from "react";
import { useRef } from "react";
import styles from "../styles/slideshow.module.css";
export default function SlideShow() {
  const slideContainerRef = useRef(null);

  const images = [
    "/DUMMY/1.png",
    "/DUMMY/2.png",
    "/DUMMY/3.png",
    "/DUMMY/4.png",
    "/DUMMY/5.png",
  ];

  function handleBackArrow() {
    slideContainerRef.current.scrollLeft =
      slideContainerRef.current.scrollLeft -
      slideContainerRef.current.children[0].clientWidth;
    console.log(slideContainerRef.current.scrollLeft);
  }

  function handleFowardArrow() {
    slideContainerRef.current.scrollLeft =
      slideContainerRef.current.scrollLeft +
      slideContainerRef.current.children[0].clientWidth;
    console.log(slideContainerRef.current.scrollLeft);
  }
  const slideElements = images.map((image) => {
    return (
      <div key={image} className={styles.slide}>
        <img src={image} />
      </div>
    );
  });
  return (
    <div className={styles.carousel}>
      <div className={styles.slideContainer} ref={slideContainerRef}>
        {slideElements}
      </div>

      <div
        className={`${styles.arrow} ${styles.arrowBack}`}
        onClick={handleBackArrow}
      >
        <p>❮</p>
      </div>

      <div
        className={`${styles.arrow} ${styles.arrowForward}`}
        onClick={handleFowardArrow}
      >
        <p>❯</p>
      </div>
    </div>
  );
}

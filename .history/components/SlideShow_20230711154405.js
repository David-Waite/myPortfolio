import { useState, useEffect } from "react";
import { useRef } from "react";
import styles from "../styles/slideshow.module.css";
export default function SlideShow(props) {
  let images = [];

  if (!props.modalState) {
    slideContainerRef.current.scrollLeft = 0;
  }
  for (let i = 0; i < props.images.length; i++) {
    images.push(props.images[i].fields.file.url);
  }
  const slideContainerRef = useRef(null);
  const [hideLeft, setHideLeft] = useState("none");
  const [hideRight, setHideRight] = useState("");

  function handleBackArrow() {
    slideContainerRef.current.scrollLeft =
      slideContainerRef.current.scrollLeft -
      slideContainerRef.current.children[0].clientWidth;
  }

  function handleScroll() {
    const totalLength = slideContainerRef.current.children[0].clientWidth * 4;

    if (slideContainerRef.current.scrollLeft === 0) {
      setHideLeft("none");
    } else {
      setHideLeft("");
    }

    if (slideContainerRef.current.scrollLeft >= totalLength - 100) {
      setHideRight("none");
    } else {
      setHideRight("");
    }
  }
  function handleFowardArrow() {
    slideContainerRef.current.scrollLeft =
      slideContainerRef.current.scrollLeft +
      slideContainerRef.current.children[0].clientWidth;
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
      <div
        className={styles.slideContainer}
        ref={slideContainerRef}
        onScroll={handleScroll}
      >
        {slideElements}
      </div>

      <div
        style={{ display: hideLeft }}
        className={`${styles.arrow} ${styles.arrowBack}`}
        onClick={handleBackArrow}
      >
        <p>❮</p>
      </div>

      <div
        style={{ display: hideRight }}
        className={`${styles.arrow} ${styles.arrowForward}`}
        onClick={handleFowardArrow}
      >
        <p>❯</p>
      </div>
    </div>
  );
}

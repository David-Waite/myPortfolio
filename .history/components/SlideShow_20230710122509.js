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
      <div key={image} className={styles.slide}>
        <img className={styles.img} src={image} />
      </div>
    );
  });
  return (
    <div className={styles.container}>
      <a className={[`${styles.arrow}, ${styles.arrowLeft}`]}>❮</a>
      <div className={[`${styles.arrow}, ${styles.arrowRight}`]}>❯</div>
      {slideElements}
    </div>
  );
}

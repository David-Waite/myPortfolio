import { useState, useEffect } from "react";
import styles from "../styles/slideshow.module.css";
export default function SlideShow() {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    "/DUMMY/1.png",
    "/DUMMY/2.png",
    "/DUMMY/3.png",
    "/DUMMY/4.png",
    "/DUMMY/5.png",
  ];

  const slideElements = images.map((image) => {
    return (
      <div key={image}>
        <img className={styles.img} src={images[imageIndex]} />
      </div>
    );
  });
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <img
          className={`${styles.img} ${styles.imageOne}`}
          src={images[imageIndex]}
        />
        <img
          className={`${styles.img} ${styles.imageTwo}`}
          src={images[imageIndex + 1]}
        />
      </div>
    </div>
  );
}

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
        <img className={styles.img} src={image} />
      </div>
    );
  });
  return (
    <div className={styles.outerContainer}>
      {slideElements}
      <div></div>
    </div>
  );
}

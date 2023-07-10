import { useState, useEffect } from "react";
import styles from "../styles/slideshow.module.css";
export default function SlideShow() {
  const [imageIndexs, setImageIndexs] = useState({
    imageOne: 0,
    imageTwo: 1,
  });

  const images = [
    "/DUMMY/1.png",
    "/DUMMY/2.png",
    "/DUMMY/3.png",
    "/DUMMY/4.png",
    "/DUMMY/5.png",
  ];

  function updateImageOne() {
    setImageIndexs((prev) => {
      return {
        imageOne: prev.imageTwo + 1,
        imageTwo: prev.imageTwo,
      };
    });
  }
  function updateImageTwo() {
    setImageIndexs((prev) => {
      return {
        imageOne: prev.imageOne,
        imageTwo: prev.imageTwo + 1,
      };
    });
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setImageIndexs((prev) => {
        return {
          imageOne: prev.imageTwo + 1,
          imageTwo: prev.imageTwo,
        };
      });
    }, 4000);
    return () => clearTimeout(timer);
  }, [imageIndexs]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageIndexs((prev) => {
        return {
          imageOne: prev.imageOne,
          imageTwo: prev.imageTwo + 1,
        };
      });
    }, 8000);
    return () => clearTimeout(timer);
  }, [imageIndexs]);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <img
          className={`${styles.img} ${styles.imageOne}`}
          src={images[imageIndexs.imageOne]}
        />
        <img
          className={`${styles.img} ${styles.imageTwo}`}
          src={images[imageIndexs.imageTwo]}
        />
      </div>
    </div>
  );
}

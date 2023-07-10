import { useState, useEffect } from "react";
import styles from "../styles/slideshow.module.css";
export default function SlideShow() {
  const [imageOne, setImageOne] = useState(0);
  const [imageTwo, setImageTwo] = useState(1);

  const images = [
    "/DUMMY/1.png",
    "/DUMMY/2.png",
    "/DUMMY/3.png",
    "/DUMMY/4.png",
    "/DUMMY/5.png",
  ];

  useEffect(() => {
    setTimeout(() => {
      setImageOne((prev) => prev + 1);
    }, 8000);
  }, [imageOne]);

  // useEffect(() => {
  //   const timer2 = setTimeout(() => {
  //     setImageIndexs((prev) => {
  //       return {
  //         imageOne: prev.imageOne,
  //         imageTwo: prev.imageTwo + 1,
  //       };
  //     });
  //   }, 8000);
  //   return () => clearTimeout(timer2);
  // }, [imageIndexs]);

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

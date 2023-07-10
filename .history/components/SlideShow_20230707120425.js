import styles from "../styles/slideshow.module.css";
export default function SlideShow() {
  const images = [
    "/DUMMY/1.png",
    "/DUMMY/2.png",
    "/DUMMY/3.png",
    "/DUMMY/4.png",
    "/DUMMY/5.png",
  ];
  return (
    <div>
      <div className={styles.container}>
        <img className={`${styles.img} ${styles.imgCenter}`} src={images[0]} />
        <img className={`${styles.img} ${styles.imgRight}`} src={images[1]} />
      </div>
    </div>
  );
}

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
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <img className={styles.img} src={images[0]} />
        <img className={styles.img} src={images[0]} />
        <img className={styles.img} src={images[0]} />
      </div>
    </div>
  );
}

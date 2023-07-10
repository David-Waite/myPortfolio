import styles from "../styles/slideshow.module.css";
export default function SlideShow() {
  const images = [
    "/DUMMY/1.png",
    "/DUMMY/1.png",
    "/DUMMY/1.png",
    "/DUMMY/1.png",
    "/DUMMY/1.png",
  ];
  return (
    <div className={styles.container}>
      <img className={styles.img} src="/DUMMY/1.png" />
    </div>
  );
}

import styles from "../styles/slideshow.module.css";
export default function SlideShow({ props }) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src="/DUMMY/1.png" />
    </div>
  );
}

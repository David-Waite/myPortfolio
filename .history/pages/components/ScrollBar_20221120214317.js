import styles from "../../styles/scrollBar.module.css";
export default function ScrollBar() {
  return (
    <div className={styles.scrollBar}>
      <div className={styles.container}></div>
    </div>
  );
}

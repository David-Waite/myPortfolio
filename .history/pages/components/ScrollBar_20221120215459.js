import styles from "../../styles/scrollBar.module.css";
export default function ScrollBar() {
  return (
    <div className={styles.scrollBar}>
      <div className={styles.container}>
        <a>HOME</a>
        <a>ABOUT</a>
        <a>PROJECTS</a>
        <a>CONTACT</a>
      </div>
    </div>
  );
}

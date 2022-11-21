import styles from "../../styles/Projects.module.css";

export default function About() {
  return (
    <div className={styles.project}>
      <div className={styles.content}>
        <h2>Projects</h2>
        <div className={styles.projectsGrid}>
          <div>
            <img src="/edableLogoWhite.png" alt="" />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

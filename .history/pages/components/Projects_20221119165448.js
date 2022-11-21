import styles from "../../styles/projects.module.css";

export default function About() {
  return (
    <div className={styles.project}>
      <div className={styles.content}>
        <h2>Projects</h2>
        <div className={styles.projectsGrid}>
          <div>
            <img src="/edableLogoWhite.png" alt="edableLogo" />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

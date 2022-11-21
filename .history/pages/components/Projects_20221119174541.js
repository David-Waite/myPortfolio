import styles from "../../styles/projects.module.css";

export default function About() {
  return (
    <div className={styles.project}>
      <div className={styles.content}>
        <h2>Projects</h2>
        <div className={styles.projectsGrid}>
          <div>
            <img
              className={styles.projectImages}
              src="/edableLogoWhite.png"
              alt="edableLogo"
            />
            <div>
              <h3>
                A charity working on employing and educating in the field of
                autism
              </h3>
              <button>View Website</button>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

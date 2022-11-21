import styles from "../../styles/projects.module.css";
import { useState } from "react";

export default function About() {
  const [projectHover, setProjectHover] = useState(false);
  function projectMouseEnter() {
    setProjectHover(true);
  }
  function projectMouseLeave() {
    setProjectHover(false);
  }

  console.log(projectHover);
  return (
    <div className={styles.project}>
      <div className={styles.content}>
        <h2>Projects</h2>
        <div className={styles.projectsGrid}>
          <div
            onMouseEnter={projectMouseEnter}
            onMouseLeave={projectMouseLeave}
          >
            <img
              className={`${styles.projectsImages} ${
                projectHover ? "projectHover" : ""
              }`}
              src="/edableLogoWhite.png"
              alt="edableLogo"
            />

            <div className={styles.projectInfo}>
              <h3>
                A charity working on employing and educating in the field of
                autism
              </h3>
              <button>View Website</button>
              <button className={styles.lastButton}>How I Made It</button>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

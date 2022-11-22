import styles from "../styles/projects.module.css";
import { useState } from "react";
import { createClient } from "contentful";

export default function About({ projects }) {
  const projectCardsElement = projects.map((item) => {
    console.log("hi");
    return (
      <div key={item.sys.id} className={styles.projectsCard}>
        <div
          className={styles.projectImageContainer}
          style={{ display: projectHover ? "none" : "flex" }}
        >
          <img
            className={styles.projectImages}
            src={`https:${item.fields.image.fields.file.url}`}
            alt={item.fields.image.fields.description}
          />
        </div>
        <div
          className={styles.projectInfo}
          style={{ display: projectHover ? "flex" : "none" }}
        >
          <h3>{item.fields.description}</h3>
          <div className={styles.btnContainer}>
            <button>View Website</button>

            <button>How I Made It</button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className={styles.project}>
      <div className={styles.content}>
        <h2>Projects</h2>
        <div className={styles.projectsGrid}>{projectCardsElement}</div>
      </div>
    </div>
  );
}

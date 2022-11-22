import styles from "../styles/projects.module.css";
import { useState } from "react";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "animation" });

  return {
    props: {
      animations: res.items,
    },
  };
}

export default function About() {
  const [projectHover, setProjectHover] = useState(false);
  function projectMouseEnter() {
    setProjectHover(true);
  }
  function projectMouseLeave() {
    setProjectHover(false);
  }
  return (
    <div className={styles.project}>
      <div className={styles.content}>
        <h2>Projects</h2>
        <div className={styles.projectsGrid}>
          <div
            className={styles.projectsCard}
            onMouseEnter={projectMouseEnter}
            onMouseLeave={projectMouseLeave}
          >
            <div
              className={styles.projectImageContainer}
              style={{ display: projectHover ? "none" : "flex" }}
            >
              <img
                className={styles.projectImages}
                src="/edableLogoWhite.png"
                alt="edableLogo"
              />
            </div>

            <div
              className={styles.projectInfo}
              style={{ display: projectHover ? "flex" : "none" }}
            >
              <h3>
                A charity working on employing and educating in the field of
                autism
              </h3>
              <div className={styles.btnContainer}>
                <button>View Website</button>

                <button>How I Made It</button>
              </div>
            </div>
          </div>
          <div className={styles.projectsCard}></div>
          <div className={styles.projectsCard}></div>
        </div>
      </div>
    </div>
  );
}

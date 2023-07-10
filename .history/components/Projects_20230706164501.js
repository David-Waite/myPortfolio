import styles from "../styles/projects.module.css";
import Link from "next/link";
import Modal from "./Modal";
import { useState } from "react";

export default function About({ projects }) {
  const [modalState, setModalState] = useState(false);

  function modalHandler(action) {
    setModalState(action);
  }

  const projectCardsElement = projects.map((item) => {
    return (
      <div key={item.sys.id} className={styles.projectsCard}>
        <div className={styles.hideScroll}></div>
        <div className={styles.projectImageContainer}>
          <img
            className={styles.projectImages}
            src={`https:${item.fields.image.fields.file.url}`}
            alt={item.fields.image.fields.description}
          />
        </div>
        <div className={styles.projectInfo}>
          <h3>{item.fields.description}</h3>
          <div className={styles.btnContainer}>
            <a
              href={item.fields.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>View Website</button>
              <div onClick={modalHandler(true)}>View about</div>
            </a>
          </div>

          <ul className={styles.madeWith}>
            {item.fields.madeWith.map((madewith) => (
              <li key={item.sys.key}>
                {`${madewith}${
                  madewith ===
                  item.fields.madeWith[item.fields.madeWith.length - 1]
                    ? ""
                    : ","
                }`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  });
  return (
    <>
      <Modal modalState={modalState} onClick={modalHandler} />
      <div className={styles.project} id="projects">
        <div className={styles.content}>
          <h2>Projects</h2>
          <div className={styles.projectsGrid}>{projectCardsElement}</div>
        </div>
      </div>
    </>
  );
}

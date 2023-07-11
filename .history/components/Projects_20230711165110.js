import styles from "../styles/projects.module.css";
import Link from "next/link";
import Modal from "./Modal";
import { useState, useEffect } from "react";

export default function About({ projects }) {
  const [modalState, setModalState] = useState(false);
  const [modalItem, setModalItem] = useState();

  const [height, setHeight] = useState(999);
  useEffect(() => {
    setTimeout(() => {
      setHeight(window.innerHeight), 1;
    });
  });

  function modalHandler(action, item) {
    if (action) {
      setModalItem(item);
    } else {
      window.scrollTo({
        top: height * 2,
        behavior: "smooth",
      });
    }

    setModalState(action);
  }

  const projectCardsElement = projects.map((item) => {
    console.log(item.fields.isGitHib);
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
              <button>
                {item.fields.isGitHib ? "View on GitHub" : "View Website"}
              </button>
            </a>
            <button onClick={() => modalHandler(true, item)}>View about</button>
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
      <Modal modalState={modalState} onClick={modalHandler} item={modalItem} />
      <div className={styles.project} id="projects">
        <div className={styles.content}>
          <h2>Projects</h2>
          <div className={styles.projectsGrid}>{projectCardsElement}</div>
        </div>
      </div>
    </>
  );
}

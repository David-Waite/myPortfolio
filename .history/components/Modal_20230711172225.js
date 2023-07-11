import { X } from "react-bootstrap-icons";
import styles from "../styles/modal.module.css";
import SlideShow from "./SlideShow";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useState } from "react";

export default function Modal({ modalState, item, onClick }) {
  const [closed, setClosed] = useState(true);

  if (item === undefined) {
    return;
  }

  const madeWithElements = item.fields.madeWith.map((item) => {
    return (
      <p key={item} className={styles.madeWith}>
        {item}
      </p>
    );
  });
  return (
    <dialog className={styles.dialogContainer} open={modalState}>
      <div className={styles.closeBtnContainer}>
        <X
          className={styles.closeBtn}
          onClick={[() => onClick(false), setClosed((prev) => !prev)]}
        />
      </div>

      <div className={styles.innerContainer}>
        <h2 className={styles.title}>{item.fields.title}</h2>
        <h3 className={styles.secondTitle}>{item.fields.description}</h3>
        <div className={styles.modalContainerOuter}>
          <div className={styles.modalContainerInner}>
            <SlideShow
              images={item.fields.slideshowImages}
              reset={modalState}
            />
          </div>
        </div>
        <div className={styles.madeWithContainer}>
          <div>{madeWithElements}</div>
          <a className={styles.link} href={item.fields.websiteUrl}>
            {item.fields.isGitHub ? "View on GitHub" : "View Website"}
          </a>
        </div>

        <p className={styles.description}>
          {documentToReactComponents(item.fields.fullDescription)}
        </p>
      </div>
    </dialog>
  );
}

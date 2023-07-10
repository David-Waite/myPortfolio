import { X } from "react-bootstrap-icons";
import styles from "../styles/modal.module.css";
import { useState } from "react";
export default function Modal({ modalState, onClick, item }) {
  return (
    <dialog className={styles.dialogContainer} open={modalState}>
      <div className={styles.closeBtnContainer}>
        <X className={styles.closeBtn} onClick={() => onClick(false)} />
      </div>
      <h2>{item.title}</h2>
    </dialog>
  );
}

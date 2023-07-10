import { X } from "react-bootstrap-icons";
import styles from "../styles/modal.module.css";
import { useState } from "react";
export default function Modal({ modalState, onClick }) {
  return (
    <dialog className={styles.dialogContainer} open={false}>
      <div className={styles.closeBtnContainer}>
        <X className={styles.closeBtn} onClick={() => onClick(false)} />
      </div>
    </dialog>
  );
}

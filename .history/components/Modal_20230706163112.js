import { X } from "react-bootstrap-icons";
import styles from "../styles/modal.module.css";
import { useState } from "react";
export default function Modal() {
  const [modalState, setModalState] = useState(true);
  function closeModal() {}
  return (
    <dialog className={styles.dialogContainer} open>
      <div className={styles.closeBtnContainer}>
        <X className={styles.closeBtn} onClick={closeModal} />
      </div>
    </dialog>
  );
}

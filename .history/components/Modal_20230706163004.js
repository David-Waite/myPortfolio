import { X } from "react-bootstrap-icons";
import styles from "../styles/modal.module.css";
export default function Modal() {
  function closeModal() {}
  return (
    <dialog className={styles.dialogContainer} open>
      <div className={styles.closeBtnContainer}>
        <X className={styles.closeBtn} onClick={closeModal} />
      </div>
    </dialog>
  );
}

import { X } from "react-bootstrap-icons";
import styles from "../styles/modal.module.css";

export default function Modal({ modalState, onClick, item }) {
  console.log(item.fields);
  return (
    <dialog className={styles.dialogContainer} open={modalState}>
      <div className={styles.closeBtnContainer}>
        <X className={styles.closeBtn} onClick={() => onClick(false)} />
      </div>
      <h2 className={styles.title}>CassieFleming.com</h2>
      <h3>An amination Portfolio</h3>
    </dialog>
  );
}

import { X } from "react-bootstrap-icons";
import styles from "../styles/modal.module.css";
export default function Modal() {
  return (
    <dialog className={styles.dialogContainer} open>
      <div>
        <X />
      </div>
      <form method="dialog">
        <button>OK</button>
      </form>
    </dialog>
  );
}

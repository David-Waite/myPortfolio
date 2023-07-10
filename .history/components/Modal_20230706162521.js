import { X } from "react-bootstrap-icons";
export default function Modal() {
  return (
    <div className={styles.outerContainter}>
      <dialog className={styles.dialogContainer} open>
        <div>
          <X />
        </div>
        <form method="dialog">
          <button>OK</button>
        </form>
      </dialog>
    </div>
  );
}

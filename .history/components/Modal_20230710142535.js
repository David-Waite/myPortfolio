import { X } from "react-bootstrap-icons";
import styles from "../styles/modal.module.css";
import SlideShow from "./SlideShow";

export default function Modal({ modalState, onClick }) {
  return (
    <dialog className={styles.dialogContainer} open={modalState}>
      <div className={styles.closeBtnContainer}>
        <X className={styles.closeBtn} onClick={() => onClick(false)} />
      </div>

      <div className={styles.innerContainer}>
        <h2 className={styles.title}>CassieFleming.com</h2>
        <h3 className={styles.secondTitle}>An amination Portfolio</h3>
        <div className={styles.modalContainerOuter}>
          <div className={styles.modalContainerInner}>
            <SlideShow />
          </div>
        </div>

        <p className={styles.description}>
          This website showcases the works of Cassie Fleming.
          <br />
          <br />
          <span>Designing:</span> this website I chose to go the minimalistic
          route, to focus the attention to on the works. Working with the client
          we decided on what was the most important content and decided to
          display that front and center. <br /> <br />
          The duck animation was added to give the portfolio a bit of flare,
          while also give the user a surprise if they ventured over to click on
          it.
          <br /> <br />
          For the <span>development</span> of this website the client wanted to
          be able to updated the website herself, so because of this I chose to
          use Contentful CMS as i was familiar with the technology and we worked
          out we could avoid the pay limits if we chose to upload the
          video&apos;s to Vimeo and imbed them in iframes.
        </p>
      </div>
    </dialog>
  );
}

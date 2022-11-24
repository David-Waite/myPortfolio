import styles from "../styles/landing.module.css";
import ScrollBar from "./ScrollBar";

export default function Landing() {
  return (
    <div className={styles.container}>
      <ScrollBar style="light" />
      <div className={styles.home}>
        <div>
          <h1>
            <strong>G&apos;day,</strong>
            <br />
            I&apos;m David
          </h1>
          <h2>Frontend web developer</h2>
        </div>

        <img src="/DavidWaitePP.jpg" alt="" />
        <svg
          className={styles.arrow}
          width="60"
          height="60"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Frame 1">
            <circle
              className={styles.circle}
              cx="60.5"
              cy="60.5"
              r="45"
              fill="#3AB8FF"
              stroke="#3AB8FF"
              stroke-width="4"
            />

            <circle
              id="Ellipse 4"
              cx="60.5"
              cy="60.5"
              r="43.5"
              stroke="#3AB8FF"
              stroke-width="4"
            />
            <path
              className={`${styles.backArrow} ${styles.arrowPath}`}
              d="M51 47L59.9293 55.9293C59.9683 55.9683 60.0317 55.9683 60.0707 55.9293L69 47"
              stroke="#3AB8FF"
              stroke-width="5"
              stroke-linecap="round"
            />
            <path
              className={`${styles.midArrow} ${styles.arrowPath}`}
              d="M51 47L59.9293 55.9293C59.9683 55.9683 60.0317 55.9683 60.0707 55.9293L69 47"
              stroke="#3AB8FF"
              stroke-width="5"
              stroke-linecap="round"
            />
            <path
              className={`${styles.frontArrow} ${styles.arrowPath}`}
              d="M51 64L59.9293 72.9293C59.9683 72.9683 60.0317 72.9683 60.0707 72.9293L69 64"
              stroke="#3AB8FF"
              stroke-width="5"
              stroke-linecap="round"
            />
          </g>
        </svg>
        <svg
          width="91"
          height="91"
          viewBox="0 0 91 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="45.5"
            cy="45.5"
            r="43.5"
            stroke="#3AB8FF"
            stroke-width="4"
          />
          <circle cx="45" cy="45" r="2" fill="#3AB8FF" />
          <path
            d="M36 32L44.9293 40.9293C44.9683 40.9683 45.0317 40.9683 45.0707 40.9293L54 32"
            stroke="#3AB8FF"
            stroke-width="5"
            stroke-linecap="round"
          />
          <path
            d="M36 32L44.9293 40.9293C44.9683 40.9683 45.0317 40.9683 45.0707 40.9293L54 32"
            stroke="#3AB8FF"
            stroke-width="5"
            stroke-linecap="round"
          />
          <path
            d="M36 49L44.9293 57.9293C44.9683 57.9683 45.0317 57.9683 45.0707 57.9293L54 49"
            stroke="#3AB8FF"
            stroke-width="5"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

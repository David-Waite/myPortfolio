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
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Frame 1">
            <circle
              id="Ellipse 4"
              cx="60.5"
              cy="60.5"
              r="43.5"
              stroke="#3AB8FF"
              stroke-width="4"
            />
            <path
              id="backArrow"
              d="M51 47L59.9293 55.9293C59.9683 55.9683 60.0317 55.9683 60.0707 55.9293L69 47"
              stroke="#3AB8FF"
              stroke-width="5"
              stroke-linecap="round"
            />
            <path
              id="midArrow"
              d="M51 47L59.9293 55.9293C59.9683 55.9683 60.0317 55.9683 60.0707 55.9293L69 47"
              stroke="#3AB8FF"
              stroke-width="5"
              stroke-linecap="round"
            />
            <path
              id="fontArrow"
              d="M51 64L59.9293 72.9293C59.9683 72.9683 60.0317 72.9683 60.0707 72.9293L69 64"
              stroke="#3AB8FF"
              stroke-width="5"
              stroke-linecap="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

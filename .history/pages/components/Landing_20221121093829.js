import styles from "../../styles/landing.module.css";
import { Git, Github } from "react-bootstrap-icons";

export default function Landing() {
  return (
    <div className={styles.home}>
      <svg
        className={styles.topBackground}
        width="165"
        height="207"
        viewBox="0 0 165 207"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M159 -25.5C159 75.8442 76.8442 158 -24.5 158C-125.844 158 -208 75.8442 -208 -25.5C-208 -126.844 -125.844 -209 -24.5 -209C76.8442 -209 159 -126.844 159 -25.5Z"
          fill="#3AB8FF"
        />
        <line
          x1="28.0711"
          y1="71"
          x2="159.004"
          y2="201.933"
          stroke="#2C2C2C"
          stroke-width="10"
          stroke-linecap="round"
        />
        <line
          x1="-72.9289"
          y1="10"
          x2="58.0036"
          y2="140.933"
          stroke="#2C2C2C"
          stroke-width="10"
          stroke-linecap="round"
        />
        <line
          x1="-86.9289"
          y1="28"
          x2="44.0036"
          y2="158.933"
          stroke="#2C2C2C"
          stroke-width="10"
          stroke-linecap="round"
        />
      </svg>
      <div>
        <h1>
          <strong>G&apos;day,</strong>
          <br />
          I&apos;m David
        </h1>
        <h2>Frontend web developer</h2>
        <div className={styles.quickLink}></div>
        <Github />
      </div>
      <img src="/DavidWaitePP.jpg" alt="" />
    </div>
  );
}

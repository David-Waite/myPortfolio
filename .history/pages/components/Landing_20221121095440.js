import styles from "../../styles/landing.module.css";

export default function Landing() {
  return (
    <div className={styles.home}>
      <svg
        className={styles.topBackground}
        width="129"
        height="153"
        viewBox="0 0 129 153"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M129 -30.5C129 70.8442 46.8442 153 -54.5 153C-155.844 153 -238 70.8442 -238 -30.5C-238 -131.844 -155.844 -214 -54.5 -214C46.8442 -214 129 -131.844 129 -30.5Z"
          fill="#3AB8FF"
        />
        <line
          x1="25.5"
          y1="43.5"
          x2="62.5"
          y2="43.5"
          stroke="#2C2C2C"
          stroke-width="5"
          stroke-linecap="round"
        />
        <line
          x1="24.5"
          y1="56.5"
          x2="61.5"
          y2="56.5"
          stroke="#2C2C2C"
          stroke-width="5"
          stroke-linecap="round"
        />
        <line
          x1="25.5"
          y1="70.5"
          x2="62.5"
          y2="70.5"
          stroke="#2C2C2C"
          stroke-width="5"
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
      </div>
      <div>
        <img src="/DavidWaitePP.jpg" alt="" />
      </div>
    </div>
  );
}

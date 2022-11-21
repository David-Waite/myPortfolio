import styles from "../../styles/landing.module.css";

export default function Landing() {
  return (
    <div className={styles.home}>
      <div>
        <h1>
          <strong>G&apos;day,</strong>
          <br />
          I&apos;m David
        </h1>
        <h2>Frontend web developer</h2>
        <div className={styles.quickLink}>
          <a>ABOUT</a>
          <a>PROJECTS</a>
          <svg
            width="198"
            height="184"
            viewBox="0 0 198 184"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M198 0.5C198 101.844 115.844 184 14.5 184C-86.8442 184 -169 101.844 -169 0.5C-169 -100.844 -86.8442 -183 14.5 -183C115.844 -183 198 -100.844 198 0.5Z"
              fill="#3AB8FF"
            />
          </svg>

          <a>CONTACT</a>
        </div>
      </div>
      <img src="/DavidWaitePP.jpg" alt="" />
    </div>
  );
}

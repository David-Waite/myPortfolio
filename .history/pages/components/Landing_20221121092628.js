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
            width="204"
            height="233"
            viewBox="0 0 204 233"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M198 0.5C198 101.844 115.844 184 14.5 184C-86.8442 184 -169 101.844 -169 0.5C-169 -100.844 -86.8442 -183 14.5 -183C115.844 -183 198 -100.844 198 0.5Z"
              fill="#3AB8FF"
            />
            <line
              x1="67.0711"
              y1="97"
              x2="198.004"
              y2="227.933"
              stroke="#2C2C2C"
              stroke-width="10"
              stroke-linecap="round"
            />
            <line
              x1="-33.9289"
              y1="36"
              x2="97.0036"
              y2="166.933"
              stroke="#2C2C2C"
              stroke-width="10"
              stroke-linecap="round"
            />
            <line
              x1="-47.9289"
              y1="54"
              x2="83.0036"
              y2="184.933"
              stroke="#2C2C2C"
              stroke-width="10"
              stroke-linecap="round"
            />
          </svg>

          <a>CONTACT</a>
        </div>
      </div>
      <img src="/DavidWaitePP.jpg" alt="" />
    </div>
  );
}

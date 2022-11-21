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
          <a>CONTACT</a>
        </div>
      </div>
      <img src="/DavidWaitePP.jpg" alt="" />
    </div>
  );
}

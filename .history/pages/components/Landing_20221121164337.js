import styles from "../../styles/landing.module.css";

export default function Landing() {
  return (className={styles.topBackground}
    <div className={styles.container}>
      <div className={styles.home}>
      <svg width="88" height="94" viewBox="0 0 88 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M88 -33.5C88 36.9163 30.9163 94 -39.5 94C-109.916 94 -167 36.9163 -167 -33.5C-167 -103.916 -109.916 -161 -39.5 -161C30.9163 -161 88 -103.916 88 -33.5Z" fill="#3AB8FF"/>
<line x1="16.5" y1="17.5" x2="41.5" y2="17.5" stroke="#2C2C2C" stroke-width="5" stroke-linecap="round"/>
<line x1="16.5" y1="26.5" x2="40.5" y2="26.5" stroke="#2C2C2C" stroke-width="5" stroke-linecap="round"/>
<line x1="16.5" y1="35.5" x2="41.5" y2="35.5" stroke="#2C2C2C" stroke-width="5" stroke-linecap="round"/>
</svg>

        <div>
          <h1>
            <strong>G&apos;day,</strong>
            <br />
            I&apos;m David
          </h1>
          <h2>Frontend web developer</h2>
        </div>

        <img src="/DavidWaitePP.jpg" alt="" />
      </div>
    </div>
  );
}

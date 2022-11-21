import styles from "../../styles/about.module.css";

export default function About() {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: "url('/background.png'" }}
    >
      <div className={styles.about}>
        <div></div>
        <div></div>
        <div className={styles.aboutMe}>
          <h2>About me</h2>
          <p>
            I like to create simple clean websites that gets the user to where
            they wanna go without the clutter.
            <br />
            <br />
            I&apos;m currently studying frontend web development at Swinburne
            University in Melbourne, with the plans of doing computer science in
            2023.
          </p>
        </div>
        <div className={styles.aboutTech}>
          <h2>
            Technology&apos;s
            <br />
            <strong>I&apos;m comfortable in</strong>
          </h2>
          <div className={styles.techCon}>
            <img src="/JsIcon.png" alt="" />
            <br />
            <img src="/React-icon.png" alt="" />
            <img src="/nextJsIcon.png" alt="" />
            <br />
            <img src="/contentfulIcon.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

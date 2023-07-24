import styles from "../styles/landing.module.css";
import ScrollBar from "./ScrollBar";
import React, { useState, useEffect } from "react";
import { Github, Linkedin } from "react-bootstrap-icons";

export default function Landing() {
  const [btnHover, setBtnHover] = useState(false);

  function scroll(position) {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }
  const [height, setHeight] = React.useState(999);
  React.useEffect(() => {
    setTimeout(() => {
      setHeight(window.innerHeight), 1;
    });
  });

  function circleHoverIn() {
    setBtnHover(true);
  }
  function circleHoverOut() {
    setBtnHover(false);
  }
  return (
    <div className={styles.container} id="home">
      <ScrollBar style="light" />
      <div className={styles.home}>
        <div>
          <h1>
            <strong>G&apos;day,</strong>
            <br />
            I&apos;m David
          </h1>
          <h2>Frontend web developer</h2>
          <div className={styles.icons} style={{ display: "inline" }}>
            <a
              href="https://github.com/David-Waite"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <Linkedin />
          </div>
        </div>

        <img src="/DavidWaitePP.jpg" alt="" />
        <div className={styles.circleCon}>
          <div
            className={styles.circle}
            style={{
              height: btnHover ? "43.5px" : "0px",
              width: btnHover ? "43.5px" : "0px",
            }}
          ></div>
        </div>
        <svg
          onMouseEnter={circleHoverIn}
          onMouseLeave={circleHoverOut}
          onClick={() => scroll(height)}
          className={styles.arrow}
          width="60"
          height="60"
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
              strokeWidth="4"
            />
            <path
              className={`${styles.backArrow} ${styles.arrowPath}`}
              d="M51 47L59.9293 55.9293C59.9683 55.9683 60.0317 55.9683 60.0707 55.9293L69 47"
              stroke="#3AB8FF"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              className={`${styles.midArrow} ${styles.arrowPath}`}
              d="M51 47L59.9293 55.9293C59.9683 55.9683 60.0317 55.9683 60.0707 55.9293L69 47"
              stroke="#3AB8FF"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              className={`${styles.frontArrow} ${styles.arrowPath}`}
              d="M51 64L59.9293 72.9293C59.9683 72.9683 60.0317 72.9683 60.0707 72.9293L69 64"
              stroke="#3AB8FF"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

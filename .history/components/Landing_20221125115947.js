import styles from "../styles/landing.module.css";
import ScrollBar from "./ScrollBar";
import DownPageBtn from "./DownPageBtn";
import React, { useState, useEffect } from "react";

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
        </div>
        <DownPageBtn />
        <img src="/DavidWaitePP.jpg" alt="" />
      </div>
    </div>
  );
}

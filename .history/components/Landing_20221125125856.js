import styles from "../styles/landing.module.css";
import ScrollBar from "./ScrollBar";
import DownPageBtn from "./DownPageBtn";
import React, { useState, useEffect } from "react";

export default function Landing() {
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
        <DownPageBtn height={"20000vh"} style={"light"} />
        <img src="/DavidWaitePP.jpg" alt="" />
      </div>
    </div>
  );
}

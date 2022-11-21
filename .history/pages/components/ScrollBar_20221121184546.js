import styles from "../../styles/scrollBar.module.css";
import React, { useState, useEffect } from "react";
import {
  HouseFill,
  FilePersonFill,
  LaptopFill,
  EnvelopeFill,
} from "react-bootstrap-icons";

export default function ScrollBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [width, setWidth] = React.useState(999);
  React.useEffect(() => {
    setTimeout(() => {
      setWidth(window.innerWidth), 1;
    });
  });
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  const [height, setHeight] = React.useState(999);
  React.useEffect(() => {
    setTimeout(() => {
      setHeight(window.innerHeight), 1;
    });
  });
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
    });
  }, []);

  const navText =
    width > 575 ? (
      <>
        <a>HOME</a>
        <a>ABOUT</a>
        <a>PROJECTS</a>
        <a>CONTACT</a>
      </>
    ) : (
      <>
        <a>
          <HouseFill />
        </a>
        <a>
          <FilePersonFill />
        </a>
        <a>
          <LaptopFill />
        </a>
        <a>
          <EnvelopeFill />
        </a>
      </>
    );
  const scrollBallTop =
    width > 575
      ? (scrollPosition / 500) * 66 + 50
      : (scrollPosition / height) * 75 + 20;

  return (
    <div className={styles.scrollBar}>
      <div className={styles.container}>
        <div className={styles.linksContainer}>
          <div
            className={styles.scrollBall}
            style={{ top: scrollBallTop }}
          ></div>

          {navText}
        </div>
      </div>
    </div>
  );
}

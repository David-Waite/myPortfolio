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

  const navText =
    width > 575 ? (
      <>
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
  console.log(scrollPosition / 1000);
  return (
    <div className={styles.scrollBar}>
      <div className={styles.container}>
        <div className={styles.linksContainer}>
          <div
            className={styles.scrollBall}
            style={{ top: scrollPosition / 10.7 + 20 }}
          ></div>

          {navText}
        </div>
      </div>
    </div>
  );
}

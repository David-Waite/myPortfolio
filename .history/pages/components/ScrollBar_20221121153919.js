import styles from "../../styles/scrollBar.module.css";
import React, { useState, useEffect } from "react";
import { HouseFill } from "react-bootstrap-icons";

export default function ScrollBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
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

  return (
    <div className={styles.scrollBar}>
      <div className={styles.container}>
        <div className={styles.linksContainer}>
          <div
            className={styles.scrollBall}
            style={{ top: scrollPosition / 6.45 + 55 }}
          ></div>
          <a className={styles.active}>HOME</a>
          <a>ABOUT</a>
          <a>PROJECTS</a>
          <a>CONTACT</a>
        </div>
      </div>
    </div>
  );
}

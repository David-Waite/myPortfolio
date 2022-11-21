import styles from "../../styles/scrollBar.module.css";
import React, { useState, useEffect } from "react";

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
  console.log(scrollPosition);
  return (
    <div className={styles.scrollBar}>
      <div className={styles.container}>
        <div
          className={styles.scrollBall}
          style={{ top: scrollPosition / 4.5 }}
        ></div>
        <div className={styles.linksContainer}>
          <a>HOME</a>
          <a>ABOUT</a>
          <a>PROJECTS</a>
          <a>CONTACT</a>
        </div>
      </div>
    </div>
  );
}

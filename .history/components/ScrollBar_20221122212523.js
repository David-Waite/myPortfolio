import styles from "..//styles/scrollBar.module.css";
import React, { useState, useEffect } from "react";
import {
  HouseFill,
  FilePersonFill,
  LaptopFill,
  EnvelopeFill,
} from "react-bootstrap-icons";

export default function ScrollBar(props) {
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

  function scroll(position) {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }

  return (
    <div className={styles.scrollBar}>
      <div
        className={styles.container}
        style={{
          backgroundColor: props.style === "dark" ? "#2c2c2c" : "#3ab8ff",
        }}
      >
        <div className={styles.linksContainer}>
          <div
            className={styles.scrollBall}
            style={{
              top: (scrollPosition / height) * 75 + 20,
              backgroundColor: props.style === "dark" ? "#3ab8ff" : "#2c2c2c",
            }}
          ></div>

          <a>
            <HouseFill
              onClick={() => scroll(0)}
              style={{
                color: props.style === "dark" ? "#3ab8ff" : "#2c2c2c",
              }}
            />
          </a>
          <a>
            <FilePersonFill
              onClick={() => scroll(height)}
              style={{
                color: props.style === "dark" ? "#3ab8ff" : "#2c2c2c",
              }}
            />
          </a>
          <a>
            <LaptopFill
              style={{
                color: props.style === "dark" ? "#3ab8ff" : "#2c2c2c",
              }}
            />
          </a>
          <a>
            <EnvelopeFill
              style={{
                color: props.style === "dark" ? "#3ab8ff" : "#2c2c2c",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

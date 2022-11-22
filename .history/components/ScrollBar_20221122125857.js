import styles from "../styles/scrollBar.module.css";
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

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  let colors = {
    backgroundColor: "#3ab8ff",
    forgroundColor: "#2c2c2c",
  };
  if (scrollPosition / height > 2.3822805578342905) {
    colors.backgroundColor = "#2c2c2c";
    colors.forgroundColor = "#3ab8ff";
  }

  const onePer = scrollPosition / 4 / 100;

  console.log(onePer * 33.3333);

  return (
    <div className={styles.scrollBar}>
      <div
        className={styles.container}
        style={{
          background: colors.backgroundColor,
        }}
      >
        <div className={styles.linksContainer}>
          <div
            className={styles.scrollBall}
            style={{
              top: (scrollPosition / height) * 75 + 20,
              backgroundColor: colors.forgroundColor,
            }}
          ></div>

          <a>
            <HouseFill
              style={{
                color: colors.forgroundColor,
              }}
            />
          </a>
          <a>
            <FilePersonFill
              style={{
                color: colors.forgroundColor,
              }}
            />
          </a>
          <a>
            <LaptopFill
              style={{
                color: colors.forgroundColor,
              }}
            />
          </a>
          <a>
            <EnvelopeFill
              style={{
                color: colors.forgroundColor,
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

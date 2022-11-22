import styles from "../styles/scrollBar.module.css";
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

  const background = props.background;
  console.log(background);
  return (
    <div
      className={styles.scrollBar}
      style={{
        backgroundColor: `${background}`,
      }}
    >
      <div className={styles.container}>
        <div className={styles.linksContainer}>
          <div
            className={styles.scrollBall}
            style={{ top: (scrollPosition / height) * 75 + 20 }}
          ></div>

          <a>
            <HouseFill
              style={{
                color: props.forground,
              }}
            />
          </a>
          <a>
            <FilePersonFill
              style={{
                color: props.forground,
              }}
            />
          </a>
          <a>
            <LaptopFill
              style={{
                color: props.forground,
              }}
            />
          </a>
          <a>
            <EnvelopeFill
              style={{
                color: props.forground,
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

/* 
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

  let colors = {
    backgroundColor: "#3ab8ff",
    forgroundColor: "#2c2c2c",
    background: "rgb(58,184,255)",
    background:
      "linear-gradient(180deg, rgba(58,184,255,1) 50%, rgba(44,44,44,1) 50%)",
  };
  if (scrollPosition > height * 2 + height / 2 - 143.5) {
    colors.backgroundColor = "#2c2c2c";
    colors.forgroundColor = "#3ab8ff";
  }

  const messageChangeStart = height * 2 + height / 2 - 143.5;
  const messageChange = ((scrollPosition - messageChangeStart) / 280) * 100;
  console.log(messageChange);

  return (
    <div className={styles.scrollBar}>
      <div
        className={styles.container}
        style={{
          background: colors.backgroundColor,
          background: `linear-gradient(360deg, rgba(58,184,255,1) ${messageChange}%, rgba(44,44,44,1) ${messageChange}%)`,
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
*/

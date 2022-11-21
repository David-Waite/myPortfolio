import styles from "../../styles/scrollBar.module.css";
import React, { useState, useEffect } from 'react';

...
// inside component:

const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
export default function ScrollBar() {
  
  return (
    <div className={styles.scrollBar}>
      <div className={styles.container}>
        <a>HOME</a>
        <a>ABOUT</a>
        <a>PROJECTS</a>
        <a>CONTACT</a>
      </div>
    </div>
  );
}

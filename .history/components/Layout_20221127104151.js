import React, { useEffect, useState } from "react";
export default function Layout({ children }) {
  const [navState, setNavState] = useState({
    navClass: "unChange",
    linkClass: "link",
  });
  function toggleNav() {
    setNavState((navState) => {
      return navState.navClass === "change"
        ? {
            navClass: "unChange",
            linkClass: "linkHidden",
          }
        : {
            navClass: "change",
            linkClass: "link",
          };
    });
  }

  return (
    <div>
      \
      <div className="navbar-icon" onClick={toggleNav}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      {children}
    </div>
  );
}

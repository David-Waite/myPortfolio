import React, { useEffect, useState } from "react";
import { Github } from "react-bootstrap-icons";
export default function Layout({ children }) {
  const [navState, setNavState] = useState(false);

  function toggleNav() {
    setNavState((preNavState) => !preNavState);
  }
  return (
    <div>
      <div
        className={`${navState ? "change" : ""} navbar-icon`}
        onClick={toggleNav}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className="linksDropDown">
        <Github />
        <Github />
      </div>

      {children}
    </div>
  );
}

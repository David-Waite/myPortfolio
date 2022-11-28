import React, { useEffect, useState } from "react";
import { Github } from "react-bootstrap-icons";
export default function Layout({ children }) {
  const [navState, setNavState] = useState(false);

  function toggleNav() {
    setNavState((preNavState) => !preNavState);
  }
  return (
    <div>
      <svg
        className="topBackground"
        width="85"
        height="85"
        viewBox="0 0 85 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M85 -42.5C85 27.9163 27.9163 85 -42.5 85C-112.916 85 -170 27.9163 -170 -42.5C-170 -112.916 -112.916 -170 -42.5 -170C27.9163 -170 85 -112.916 85 -42.5Z"
          fill="#3AB8FF"
        />
      </svg>
      <svg
        className="topBackground two"
        width="85"
        height="85"
        viewBox="0 0 85 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M85 -42.5C85 27.9163 27.9163 85 -42.5 85C-112.916 85 -170 27.9163 -170 -42.5C-170 -112.916 -112.916 -170 -42.5 -170C27.9163 -170 85 -112.916 85 -42.5Z"
          fill="#3AB8FF"
        />
      </svg>
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

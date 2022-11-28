import React, { useEffect, useState } from "react";
import { Github } from "react-bootstrap-icons";
export default function Layout({ children }) {
  const [navState, setNavState] = useState(false);

  function toggleNav() {
    setNavState((preNavState) => !preNavState);
  }
  return (
    <div>
      <div className="linksDropDown">
        <Github />
        <Github />
      </div>

      {children}
    </div>
  );
}

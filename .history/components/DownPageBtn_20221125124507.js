import DPstyles from "../styles/DownPageBtn.module.css";
import React, { useState } from "react";
export default function DownPageBtn(props) {
  const [btnHover, setBtnHover] = useState(false);

  function scroll(position) {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }
  const [height, setHeight] = React.useState(999);
  React.useEffect(() => {
    setTimeout(() => {
      setHeight(window.innerHeight), 1;
    });
  });

  function circleHoverIn() {
    setBtnHover(true);
  }
  function circleHoverOut() {
    setBtnHover(false);
  }
  return (
    <>
      <div className={DPstyles.circleCon}>
        <div
          className={DPstyles.circle}
          style={{
            height: btnHover ? "43.5px" : "0px",
            width: btnHover ? "43.5px" : "0px",
          }}
        ></div>
      </div>
      <svg
        onMouseEnter={circleHoverIn}
        onMouseLeave={circleHoverOut}
        onClick={() => scroll(height)}
        className={DPstyles.arrow}
        width="60"
        height="60"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Frame 1">
          <circle
            id="Ellipse 4"
            cx="60.5"
            cy="60.5"
            r="43.5"
            stroke="#3AB8FF"
            stroke-width="4"
          />
          <path
            className={`${DPstyles.backArrow} ${DPstyles.arrowPath}`}
            d="M51 47L59.9293 55.9293C59.9683 55.9683 60.0317 55.9683 60.0707 55.9293L69 47"
            stroke="#3AB8FF"
            stroke-width="5"
            stroke-linecap="round"
          />
          <path
            className={`${DPstyles.midArrow} ${DPstyles.arrowPath}`}
            d="M51 47L59.9293 55.9293C59.9683 55.9683 60.0317 55.9683 60.0707 55.9293L69 47"
            stroke="#3AB8FF"
            stroke-width="5"
            stroke-linecap="round"
          />
          <path
            className={`${DPstyles.frontArrow} ${DPstyles.arrowPath}`}
            d="M51 64L59.9293 72.9293C59.9683 72.9683 60.0317 72.9683 60.0707 72.9293L69 64"
            stroke="#3AB8FF"
            stroke-width="5"
            stroke-linecap="round"
          />
        </g>
      </svg>
    </>
  );
}

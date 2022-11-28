import React, { useState } from "react";
export default function DownPageBtn(props) {
  const [btnHover, setBtnHover] = useState(true);

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
      <div className="circleCon">
        <div
          className="circle"
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
            className={`backArrow arrowPath`}
            d="M51 47L59.9293 55.9293C59.9683 55.9683 60.0317 55.9683 60.0707 55.9293L69 47"
            stroke="#3AB8FF"
            stroke-width="5"
            stroke-linecap="round"
          />
          <path
            className={`midArrow arrowPath`}
            d="M51 47L59.9293 55.9293C59.9683 55.9683 60.0317 55.9683 60.0707 55.9293L69 47"
            stroke="#3AB8FF"
            stroke-width="5"
            stroke-linecap="round"
          />
          <path
            className={`frontArrow arrowPath`}
            d="M51 64L59.9293 72.9293C59.9683 72.9683 60.0317 72.9683 60.0707 72.9293L69 64"
            stroke="#3AB8FF"
            stroke-width="5"
            stroke-linecap="round"
          />
        </g>
      </svg>
      <style jsx>{`
        .arrow {
          position: absolute;
          top: ${props.height}
          left: calc(50vw - 222.7px);
          cursor: pointer;
          z-index: 1;
        }
        .circleCon {
          position: absolute;
          top: ${props.height}
          width: 43.5px;
          height: 43.5px;
          left: calc(50vw - 21.7px);
          z-index: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .circle {
          width: 43.5px;
          height: 43.5px;
          background-color: #3ab8ff;
          border-radius: 50%;
          transition: 0.4s ease-in-out;
        }
        .circleCon:hover .circle {
          width: 0px;
          height: 0px;
        }

        .arrow:hover .arrowPath {
          stroke: #2c2c2c;
        }

        .midArrow {
          animation: moveDownMid 1s forwards infinite;
        }
        .frontArrow {
          animation: moveDownFront 1s forwards infinite;
        }

        .backArrow {
          animation: moveDownBack 1s forwards infinite;
        }

        @keyframes moveDownFront {
          0% {
            transform: translateY(0%);
            opacity: 100%;
          }

          50% {
            transform: translateY(20%);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes moveDownMid {
          from {
            transform: translateY(0%);
            opacity: 100%;
          }

          to {
            transform: translateY(15%);
            opacity: 100%;
          }
        }

        @keyframes moveDownBack {
          0%,
          40% {
            transform: translateY(-20%);
            opacity: 0;
          }

          100% {
            transform: translateY(0%);
            opacity: 100%;
          }
        }

        @media (max-width: 700px) {
          .circleCon,
          .arrow {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

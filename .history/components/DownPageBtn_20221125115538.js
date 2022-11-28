export default function DownPageBtn(){
    <div className={styles.circleCon}>
          <div
            className={styles.circle}
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
          className={styles.arrow}
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
              className={`${styles.backArrow} ${styles.arrowPath}`}
              d="M51 47L59.9293 55.9293C59.9683 55.9683 60.0317 55.9683 60.0707 55.9293L69 47"
              stroke="#3AB8FF"
              stroke-width="5"
              stroke-linecap="round"
            />
            <path
              className={`${styles.midArrow} ${styles.arrowPath}`}
              d="M51 47L59.9293 55.9293C59.9683 55.9683 60.0317 55.9683 60.0707 55.9293L69 47"
              stroke="#3AB8FF"
              stroke-width="5"
              stroke-linecap="round"
            />
            <path
              className={`${styles.frontArrow} ${styles.arrowPath}`}
              d="M51 64L59.9293 72.9293C59.9683 72.9683 60.0317 72.9683 60.0707 72.9293L69 64"
              stroke="#3AB8FF"
              stroke-width="5"
              stroke-linecap="round"
            />
          </g>
        </svg>
}
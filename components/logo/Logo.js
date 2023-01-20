
import styles from "./Logo.module.scss"

export default function Logo({ style }) {
  return (
    <svg
      className = {styles.logo}
      style={style}
      width="148px"
      height="148px"
      viewBox="0 0 148 148"
      version="1.1"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="prism" fill="#000000" fillRule="nonzero">
          <path
            d="M81.4,0 L148,100.64 L81.4,148 L81.4,0 Z M66.6,0 L0,100.64 L66.6,148 L66.6,0 Z"
            id="Shape"
          ></path>
        </g>
      </g>
    </svg>
  )
}

import styles from "./Icons.module.scss";

export default function WebDevelopmentIcon({ style }) {
  return (
    <svg
      style={style}
      className={styles.serviceIcon}
      width="46px"
      height="42px"
      viewBox="0 0 46 42"
      version="1.1"
    >
      <defs>
        <linearGradient
          x1="50%"
          y1="8.31758034%"
          x2="4.20523673%"
          y2="91.6824197%"
          id="linearGradient-1"
        >
          <stop stopColor="#08AEEA" offset="0%"></stop>
          <stop stopColor="#2AF598" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Desktop-HD-Copy-3"
          transform="translate(-211.000000, -600.000000)"
          fill="url(#linearGradient-1)"
          fillRule="nonzero"
        >
          <path
            d="M241.222857,635 L241.222857,639.162162 L248.628571,639.162162 C249.3856,639.162162 250,639.797838 250,640.581081 C250,641.364324 249.3856,642 248.628571,642 L248.628571,642 L219.371429,642 C218.6144,642 218,641.364324 218,640.581081 C218,639.797838 218.6144,639.162162 219.371429,639.162162 L219.371429,639.162162 L226.777143,639.162162 L226.777143,635 L241.222857,635 Z M254.304688,600 C255.790703,600 257,601.203128 257,602.681564 L257,602.681564 L257,629.318436 C257,630.796872 255.790703,632 254.304688,632 L254.304688,632 L213.695312,632 C212.209297,632 211,630.796872 211,629.318436 L211,629.318436 L211,602.681564 C211,601.203128 212.209297,600 213.695312,600 L213.695312,600 Z"
            id="brand-design"
          ></path>
        </g>
      </g>
    </svg>
  );
}

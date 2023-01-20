import styles from "./Icons.module.scss";

export default function AboutIcon({ style }) {
  return (
    <svg
      style={style}
      className={styles.companyIcon}
      width="49px"
      height="49px"
      viewBox="0 0 49 49"
      version="1.1"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fillRule="evenodd"
      >
        <g
          id="Desktop-HD-Copy-3"
          transform="translate(-736.000000, -521.000000)"
        >
          <path
            d="M760.5,521 C774.030976,521 785,531.969024 785,545.5 C785,559.030976 774.030976,570 760.5,570 C746.969024,570 736,559.030976 736,545.5 C736,531.969024 746.969024,521 760.5,521 Z M761.75,533 L761.75,558 L773,550 L761.75,533 Z M759.25,533 L748,550 L759.25,558 L759.25,533 Z"
            id="about"
          ></path>
        </g>
      </g>
    </svg>
  );
}


import {cancelIcon} from "./Icons.module.scss"


export default function CancelOutlined({color, size = "28px"}) {
  return (
    <svg
      className={cancelIcon}
      width={size}
      height={size}
      viewBox="0 0 30 30"
      version="1.1"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill={color}
        fillRule="evenodd"
      >
        <g
          id="Desktop-HD-Copy-6"
          transform="translate(-1059.000000, -511.000000)"
          fill={color}
          height={size}
          width={size}
          fillRule="nonzero"
        >
          <g id="close" transform="translate(1059.000000, 511.000000)">
            <polygon
              id="Rectangle"
              transform="translate(14.787890, 15.418815) rotate(-44.991897) translate(-14.787890, -15.418815) "
              points="-4.08276852 13.4994947 33.6406317 13.6844754 33.6585479 17.3381362 -4.06485235 17.1531554"
            ></polygon>
            <polygon
              id="Rectangle"
              transform="translate(14.792518, 15.417160) rotate(-45.008103) translate(-14.792518, -15.417160) "
              points="12.8731972 -3.45349816 16.5268579 -3.435582 16.7118386 34.2878182 13.0581779 34.2699021"
            ></polygon>
          </g>
        </g>
      </g>
    </svg>
  );
}

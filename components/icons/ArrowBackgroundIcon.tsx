import { IconsProps } from "@interfaces/uiProps";

interface ArrowBackgroundIconProps extends IconsProps {}
const ArrowBackgroundIcon = ({ className }: ArrowBackgroundIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="184.272"
      height="263.617"
      viewBox="0 0 184.272 263.617"
      className={className}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.219"
          y1="2.972"
          x2="0.69"
          y2="2.962"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#00aec5" />
        </linearGradient>
      </defs>
      <g id="img_right" transform="translate(128.89 51.295)">
        <path
          id="Path_12055"
          data-name="Path 12055"
          d="M47.117,60.561-56.474-43.03a28.218,28.218,0,0,0-39.906,0l-24.246,24.246a28.219,28.219,0,0,0,0,39.906L2.918,144.664l44.2-44.2A28.217,28.217,0,0,0,47.117,60.561Z"
          transform="translate(0)"
          fill="#37aefd"
        />
        <path
          id="Path_12056"
          data-name="Path 12056"
          d="M47.117,60.561-56.474-43.03a28.218,28.218,0,0,0-39.906,0l-24.246,24.246a28.219,28.219,0,0,0,0,39.906L2.918,144.664l44.2-44.2A28.217,28.217,0,0,0,47.117,60.561Z"
          transform="translate(0)"
          fill="url(#linear-gradient)"
          style={{ mixBlendMode: "multiply", isolation: "isolate" }}
        />
        <path
          id="Path_12057"
          data-name="Path 12057"
          d="M-120.626,157.257a28.219,28.219,0,0,0,0,39.906l24.246,24.246a28.217,28.217,0,0,0,39.906,0L47.117,117.818a28.218,28.218,0,0,0,0-39.906l-44.2-44.2h0L-21.757,9.038a34.9,34.9,0,0,1,0,49.353Z"
          transform="translate(0 -17.352)"
          fill="#37aefd"
        />
      </g>
    </svg>
  );
};

export default ArrowBackgroundIcon;

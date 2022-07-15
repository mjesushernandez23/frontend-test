import { IconsProps } from "@interfaces/uiProps";

interface InfoHelpIconProps extends IconsProps {}
const InfoHelpIcon = ({ className }: InfoHelpIconProps) => {
  return (
    <svg
      id="ico_avisoprivacidad"
      xmlns="http://www.w3.org/2000/svg"
      width="19.41"
      height="19.41"
      viewBox="0 0 19.41 19.41"
      className={className}
    >
      <circle
        id="Ellipse_149"
        data-name="Ellipse 149"
        cx="9"
        cy="9"
        r="9"
        transform="translate(1 1)"
        fill="none"
      />
      <g id="informacion">
        <path
          id="Path_11612"
          data-name="Path 11612"
          d="M9.7,0a9.7,9.7,0,1,0,9.7,9.7A9.716,9.716,0,0,0,9.7,0Zm0,17.645a7.94,7.94,0,1,1,7.94-7.94A7.949,7.949,0,0,1,9.7,17.645Z"
          fill="#37aefe"
        />
        <path
          id="Path_11613"
          data-name="Path 11613"
          d="M146.178,70a1.176,1.176,0,1,0,1.176,1.177A1.178,1.178,0,0,0,146.178,70Z"
          transform="translate(-136.473 -65.883)"
          fill="#37aefe"
        />
        <path
          id="Path_11614"
          data-name="Path 11614"
          d="M150.882,140a.882.882,0,0,0-.882.882v5.294a.882.882,0,1,0,1.765,0v-5.294A.882.882,0,0,0,150.882,140Z"
          transform="translate(-141.177 -131.766)"
          fill="#37aefe"
        />
      </g>
    </svg>
  );
};

export default InfoHelpIcon;

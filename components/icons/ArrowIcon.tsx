import { IconsProps } from "@interfaces/uiProps";

interface ArrowIconProps extends IconsProps {
  direction?: "left" | "right";
}
const ArrowIcon = ({ className, direction = "right" }: ArrowIconProps) => {
  return (
    <svg
      className={`${direction === "left" ? "rotate-180" : ""} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="15.135"
      height="27.486"
      viewBox="0 0 15.135 27.486"
    >
      <path
        id="ico_left"
        d="M23.761,26.2a.751.751,0,0,0,.529.222.726.726,0,0,0,.529-.222L37.3,13.715a.744.744,0,0,0,.007-1.052l-.007-.007L24.82.171a.749.749,0,1,0-1.094,1.024l.035.035L35.714,13.185,23.761,25.139a.746.746,0,0,0,0,1.056Z"
        transform="translate(-22.965 0.567)"
        fill="#bababa"
        stroke="#bababa"
        strokeLinecap="round"
        strokeWidth="1"
      />
    </svg>
  );
};

export default ArrowIcon;

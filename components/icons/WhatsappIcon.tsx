import { IconsProps } from "@interfaces/uiProps";

interface WhatsappIconProps extends IconsProps {}
const WhatsappIcon = ({ className }: WhatsappIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28.003"
      viewBox="0 0 28 28.003"
      className={className}
    >
      <g id="ico_tel" transform="translate(-11.168 -11.164)">
        <path
          id="Path_13138"
          data-name="Path 13138"
          d="M41.586,43.621c-.811-.173-3.67-1.083-6.478-5.435s-2.459-7.329-2.286-8.137a4.776,4.776,0,0,1,2.845-2.767l.972.21a.338.338,0,0,1,.261.265l.7,3.693a.344.344,0,0,1-.186.366c-1.572.722-2.084.939-2.205,1.448-.239,1.1,3.321,6.619,4.419,6.856.518.106.958-.262,2.264-1.4a.335.335,0,0,1,.411-.02l3.045,2.151a.338.338,0,0,1,.135.345l-.208.975A4.77,4.77,0,0,1,41.586,43.621Z"
          transform="translate(-13.774 -10.305)"
          fill="#fff"
        />
        <path
          id="Path_13139"
          data-name="Path 13139"
          d="M25.167,13.165a12,12,0,1,1-12,12,12,12,0,0,1,12-12m0-2a14,14,0,1,0,14,14,14.018,14.018,0,0,0-14-14Z"
          transform="translate(0 0)"
          fill="#fff"
        />
      </g>
    </svg>
  );
};

export default WhatsappIcon;

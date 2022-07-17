import { Typography } from "@mui/material";
import styles from "./CardHome.module.css";
interface CardHomeProps {}
const CardHome = (props: CardHomeProps) => {
  return (
    <div className={`mx-auto bg-white relative z-50 rounded-b-15 ${styles.cont_cardHome}`}>
      <Typography
        variant="h1"
        className="pt-26 text-blue-400 text-36 text-center font-black leading-11"
      >
        Campañas activas de vacunación <br /> contra Covid-19 (ZMG)
      </Typography>
      <div className={styles.cont_carousel}></div>
    </div>
  );
};

export default CardHome;

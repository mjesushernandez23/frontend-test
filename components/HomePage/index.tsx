import ArrowBackgroundIcon from "@icons/ArrowBackgroundIcon";
import PointBackgroundIcon from "@icons/PointBackgroundIcon";
import WhatsappIcon from "@icons/WhatsappIcon";

import styles from "./Home.module.css";

interface HomePageProps {
  telWhatsApp: string;
}
const HomePage = ({ telWhatsApp }: HomePageProps) => {
  return (
    <div className={`w-full absolute ${styles.content_home}`}>
      <ArrowBackgroundIcon className={`absolute ${styles.arrow_back_icon0}`} />
      <ArrowBackgroundIcon className={`absolute z-10 ${styles.arrow_back_icon1}`} />
      <a
        href={`https://wa.me/52${telWhatsApp.replace(/\W/g, "")}`}
        target="_blank"
        className={`absolute flex justify-between items-center bg-blue-100 text-white top-18 right-277 pl-6 pr-14 ${styles.whatsapp_icon}`}
        rel="noreferrer"
      >
        <WhatsappIcon className="w-28 h-28" />{" "}
        <span className="text-17 font-bold">{telWhatsApp}</span>
      </a>

      <div className={`absolute bottom-0 w-full flex bg-blue-800 ${styles.footer_background}`}>
        <PointBackgroundIcon className={`absolute ${styles.point_icon}`} />
      </div>
    </div>
  );
};

export default HomePage;

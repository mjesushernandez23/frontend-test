import styles from "./Footer.module.css";
const srcImages = [
  "https://www.google.com/",
  "https://www.google.com/",
  "https://www.google.com/",
  "https://www.google.com/",
  "https://www.google.com/",
  "https://www.google.com/",
  "https://www.google.com/",
];

const Footer = () => {
  return (
    <footer className={`w-full bg-gray-100 ${styles.cont_footer}`}>
      <div className={`mx-auto flex flex-wrap justify-between items-center ${styles.cont_icons}`}>
        {srcImages.map((item, index) => (
          <div key={`footer-icon-${index}`} className="h-fit">
            <a
              href={item}
              className={`background-png ${styles[`cont_image_${index}`]}`}
              target="_blank"
              style={{ backgroundImage: `url(/icons/footer-${index}.png)` }}
              rel="noreferrer"
            />
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
interface MyImageLocalProps {
  src: string;
  className: string;
  alt: string;
}
const MyImageLocal = (props: MyImageLocalProps) => {
  const { src, className, alt } = props;
  return (
    <div style={{ position: "relative" }} className={className}>
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
  );
};

export default MyImageLocal;

import classnames from "classnames";

interface ImageProps {
  src?: string;
  alt?: string;
  className?: string;
}

const Image = ({ src, alt, className }: ImageProps) => {
  const cl = classnames(
    "pb-[56.25%]",
    "h-0",
    "overflow-hidden",
    "relative max-w-full max-h-auto",
    "cursor-pointer",
    "hover:brightness-75",
    "transition-all",
    "ease-in",
    className
  );
  return (
    <div className={cl}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full absolute top-0 left-0"
      />
    </div>
  );
};

export default Image;

import { useState } from "react";

const ImageWithLoading = ({
  src,
  alt,
  className,
  onClick,
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative aspect-square bg-gray-200">
      {!loaded && (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="loader"></div> {/* Your loading spinner */}
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onClick={onClick}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        className={`${className} w-full h-full transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        } absolute inset-0`}
      />
    </div>
  );
};
export default ImageWithLoading;

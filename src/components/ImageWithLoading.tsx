import { useState } from "react";

const ImageWithLoading = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative">
      {!loaded && (
        <div className="flex justify-center items-center bg-gray-200 h-128">
          <div className="loader"></div> {/* Replace with your spinner */}
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${
          loaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};
export default ImageWithLoading;

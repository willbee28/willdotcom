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
    <div className="relative h-128 bg-gray-200">
      {!loaded && (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="loader"></div> {/* Your loading spinner */}
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`${className} w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        } absolute inset-0`}
      />
    </div>
  );
};
export default ImageWithLoading;

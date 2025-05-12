import { useEffect, useRef, useState } from "react";

const ImageWithLoading = ({
  src,
  alt,
  className,
  onClick,
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  // const [visible, setVisible] = useState(false);
  // const ref = useRef<HTMLImageElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       console.log("check intersection");
  //       if (entry.isIntersecting) {
  //         setVisible(true);
  //         observer.disconnect();
  //       }
  //     },
  //     { threshold: 0.1 }
  //   );
  //   if (ref.current) observer.observe(ref.current);
  //   return () => observer.disconnect();
  // }, []);

  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-128 bg-gray-200">
      {!loaded && (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="loader"></div> {/* Your loading spinner */}
        </div>
      )}
      <img
        // ref={ref}
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

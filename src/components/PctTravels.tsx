import { useMemo, useRef, useState } from "react";
import ImageWithLoading from "./ImageWithLoading";
import PctMap from "./PctMap";
import ImageModal from "./ImageModal";
import { LonLatType } from "../utils/getLatLonFromImg";
import IntroText from "./IntroText";
import { motion, useScroll, useTransform } from "framer-motion";

export const IMAGE_COUNT = 144;

const PctTravels = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedImgUrl, setSelectedImgUrl] = useState("");
  // latitude and longitude for point of specific image selected
  const [latLon, setLatLon] = useState<LonLatType>();
  const [scrollPosit, setScrollPosit] = useState<number>(0);

  const imageUrls = useMemo(() => {
    const images: string[] = [];
    for (let i = 1; i <= IMAGE_COUNT; i++) {
      const imagePath = `/pctThumbs/${i}.jpeg`;
      images.push(imagePath);
    }
    return images;
  }, []);

  const handlePrev = () => {
    const match = selectedImgUrl.match(/(\d+)(?=\.jpeg$)/);
    if (!match) return; // no number found in URL

    const currentIndex = parseInt(match[1]);
    const prevIndex = currentIndex - 1;

    // if no next image (end of bounds)
    if (prevIndex <= 0) return;

    const prevImgUrl = selectedImgUrl.replace(
      /(\d+)(?=\.jpeg$)/,
      `${prevIndex}`
    );
    setSelectedImgUrl(prevImgUrl);
  };

  const handleNext = () => {
    const match = selectedImgUrl.match(/(\d+)(?=\.jpeg$)/);
    if (!match) return; // no number found in URL

    const currentIndex = parseInt(match[1]);
    const nextIndex = currentIndex + 1;

    // if no next image (end of bounds)
    if (nextIndex >= IMAGE_COUNT) return;

    const nextImgUrl = selectedImgUrl.replace(
      /(\d+)(?=\.jpeg$)/,
      `${nextIndex}`
    );
    setSelectedImgUrl(nextImgUrl);
  };

  const mapContainerRef = useRef(null);

  // Watch scroll position relative to map container
  const { scrollYProgress } = useScroll({
    target: mapContainerRef,
    offset: ["start start", "end start"], // map shrinks as it leaves top
  });

  // Map scroll progress to scale
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="relative">
      <motion.div
        ref={mapContainerRef}
        style={{ scale }}
        className="mt-22 xxs:mt-16 sm:mt-14"
      >
        <IntroText showIntro={showIntro} setShowIntro={setShowIntro} />
        <PctMap latLon={latLon} scrollPosit={scrollPosit} />
      </motion.div>
      <div className="xl:w-3/5 lg:w-4/5 mx-auto text-[#283618] text-3xl leading-relaxed">
        <div className="grid grid-cols-3 gap-2 p-2 pb-24">
          {imageUrls.map((imageUrl, index) => (
            <ImageWithLoading
              key={index}
              className="h-full w-full object-cover image-color-ease-in hover:cursor-pointer"
              src={imageUrl}
              alt={`Image ${index}`}
              onClick={() => {
                setSelectedImgUrl(imageUrl);
                setShowModal(true);
              }}
            />
          ))}
        </div>
      </div>
      <ImageModal
        showModal={showModal}
        selectedImgUrl={selectedImgUrl}
        setShowModal={(e) => setShowModal(e)}
        handleShowOnMap={(gpsData: LonLatType) => {
          // hide intro text & modal
          setShowIntro(false);
          // scroll to top of page where map is
          setScrollPosit(window.scrollY);
          window.scrollTo({ top: 0, behavior: "smooth" });
          // get lat lon from image
          if (gpsData) {
            setLatLon(gpsData);
          }
        }}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
};

export default PctTravels;

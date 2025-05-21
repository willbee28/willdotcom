import { useMemo, useState } from "react";
import ImageWithLoading from "./ImageWithLoading";
import PctMap from "./PctMap";
import ImageModal from "./ImageModal";
import { LonLatType } from "../utils/getLatLonFromImg";
import IntroText from "./IntroText";

const PctTravels = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedImgUrl, setSelectedImgUrl] = useState("");
  // latitude and longitude for point of specific image selected
  const [latLon, setLatLon] = useState<LonLatType>(undefined);
  const [scrollPosit, setScrollPosit] = useState<number>(0);

  const imageUrls = useMemo(() => {
    const images: string[] = [];
    for (let i = 1; i < 145; i++) {
      const imagePath = `/pctPhotos/${i}.jpeg`;
      images.push(imagePath);
    }
    return images;
  }, []);

  return (
    <div className="relative">
      <IntroText showIntro={showIntro} setShowIntro={setShowIntro} />
      <div className="lg:mt-14 mt-20">
        <PctMap latLon={latLon} scrollPosit={scrollPosit} />
      </div>
      <div className="w-4/5 mx-auto text-[#283618] text-3xl leading-relaxed mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2 pb-24">
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
      />
    </div>
  );
};

export default PctTravels;

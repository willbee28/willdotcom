import { useState } from "react";
import ImageWithLoading from "./ImageWithLoading";
import PctMap from "./PctMap";
import ImageModal from "./ImageModal";
import getLatLonFromImg from "../utils/getLatLonFromImg";

const PctTravels = () => {
  const imageUrls: string[] = [];
  for (let i = 1; i < 145; i++) {
    const imagePath = `/pctPhotos/${i}.jpeg`;
    imageUrls.push(imagePath);
  }

  const [showIntro, setShowIntro] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<{
    imageUrl: string;
    index: number;
  } | null>({ imageUrl: `/pctPhotos/${1}.jpeg`, index: 0 });
  // latitude and longitude for point of specific image selected
  const [latLon, setLatLon] = useState<{ lat: number; lon: number } | null>(
    null
  );

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-1/2 transform -translate-x-1/2 lg:mt-40 mt-16">
        <PctMap latLon={latLon} />
      </div>
      <div className="w-4/5 mx-auto text-[#283618] text-3xl leading-relaxed">
        <div className="pt-64 grid lg:grid-cols-2 sm:my-64 my-28">
          <div
            className={`col-start-2 ${!showIntro ? "invisible" : "relative"}`}
          >
            <div className="bg-[#fefae0] border-2 border-[#283618] rounded-md p-5">
              <span className="font-bold">Below</span> you can find pictures of
              my travels from Mexico to Canada along the Pacific Crest Trail
              <button
                className="absolute bottom-2 right-2 text-xs px-2 py-1 hover:text-[#496629] hover:cursor-pointer transition"
                onClick={() => {
                  setShowIntro(false);
                }}
              >
                Hide
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2 pb-24">
          {imageUrls.map((imageUrl, index) => (
            <ImageWithLoading
              key={index}
              className="h-full w-full object-cover image-color-ease-in hover:cursor-pointer"
              src={imageUrl}
              alt={`Image ${index}`}
              onClick={() => {
                setModalData({
                  imageUrl: imageUrl,
                  index: index,
                });
                setShowModal(true);
              }}
            />
          ))}
        </div>
      </div>
      <ImageModal
        showModal={showModal}
        modalData={modalData}
        setShowModal={(e) => setShowModal(e)}
        handleShowOnMap={async () => {
          // hide intro text
          setShowIntro(false);
          if (modalData) {
            const gpsData = await getLatLonFromImg(modalData?.imageUrl);
            if (gpsData) {
              setLatLon(gpsData);
            }
          }
        }}
      />
    </div>
  );
};

export default PctTravels;

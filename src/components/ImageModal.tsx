import {
  IoDownloadOutline,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";
import getLatLonFromImg, { LonLatType } from "../utils/getLatLonFromImg";
import { useEffect, useState } from "react";
import { IMAGE_COUNT } from "./PctTravels";

type ImageModalProps = {
  showModal: boolean;
  selectedImgUrl: string;
  setShowModal: (bool: boolean) => void;
  handleShowOnMap: (lonLat: LonLatType) => void;
  handlePrev: () => void;
  handleNext: () => void;
};

const ImageModal = ({
  showModal,
  setShowModal,
  selectedImgUrl,
  handleShowOnMap,
  handlePrev,
  handleNext,
}: ImageModalProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [lonLat, setLonLat] = useState<LonLatType>();
  // index of picture selected
  const currentIndex = Number(
    selectedImgUrl.match(/(\d+)(?=\.jpeg$)/)?.[1] || "-1"
  );

  useEffect(() => {
    const checkLonLats = async () => {
      const lonLat = await getLatLonFromImg(selectedImgUrl);
      setLonLat(lonLat);
    };
    checkLonLats();
  }, [selectedImgUrl]);

  const closeModal = () => {
    setShowModal(false);
    setIsLoading(true);
    setLonLat(undefined);
  };

  // right/left/esc keys for accessibility in modal
  useEffect(() => {
    if (!showModal) return; // Only listen when modal is open

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        if (currentIndex !== 1) {
          handlePrev();
        }
      } else if (e.key === "ArrowRight") {
        if (currentIndex !== IMAGE_COUNT) {
          handleNext();
        }
      } else if (e.key === "Escape") {
        setShowModal(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [showModal, currentIndex, handlePrev, handleNext, setShowModal]);

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-20 flex items-center justify-center"
      onClick={closeModal}
    >
      {/* Left Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (currentIndex !== 1) handlePrev();
        }}
        disabled={currentIndex === 1}
        className={`absolute xl:left-25 lg:left-15 sm:left-8 xs:left-3 left-0 top-1/2 text-4xl 
          ${
            currentIndex === 1 ? "opacity-80" : "hover:text-gray-500 text-white"
          }`}
      >
        <IoChevronBack />
      </button>

      {/* Right Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (currentIndex !== IMAGE_COUNT) handleNext();
        }}
        disabled={currentIndex === IMAGE_COUNT}
        className={`absolute xl:right-25 lg:right-15 sm:right-8 xs:right-3 right-0 top-1/2 text-4xl 
          ${
            currentIndex === IMAGE_COUNT
              ? "opacity-80"
              : "hover:text-gray-500 text-white"
          }`}
      >
        <IoChevronForward />
      </button>

      <div className="z-10" onClick={(e) => e.stopPropagation()}>
        {/* Image */}
        <img
          src={selectedImgUrl}
          alt={`Image ${selectedImgUrl}`}
          onLoad={() => setIsLoading(false)}
          className="max-w-[80vw] max-h-[90vh] object-contain"
        />

        {/* Download and Show on Map Buttons */}
        {!isLoading && (
          <>
            <a
              href={selectedImgUrl}
              download={`selectedImgUrl`}
              className="absolute bottom-4 right-4 bg-[#fefae0] border px-2 py-2 rounded shadow hover:bg-gray-200 transition"
            >
              <IoDownloadOutline />
            </a>
            {lonLat !== undefined && (
              <button
                className={`absolute bottom-4 right-20 px-2 py-2 rounded text-xs border 
                  ${
                    lonLat !== null
                      ? "bg-[#fefae0] hover:bg-gray-200 transition"
                      : "bg-gray-300"
                  }
                `}
                onClick={() => {
                  if (lonLat !== null) handleShowOnMap(lonLat);
                  closeModal();
                }}
                disabled={lonLat === null}
              >
                {lonLat == null ? "No metadata" : "Show on Map"}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ImageModal;

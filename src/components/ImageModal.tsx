import { IoDownloadOutline } from "react-icons/io5";
import getLatLonFromImg, { LonLatType } from "../utils/getLatLonFromImg";
import { useEffect, useState } from "react";

type ImageModalProps = {
  showModal: boolean;
  selectedImgUrl: string;
  setShowModal: (bool: boolean) => void;
  handleShowOnMap: (lonLat: LonLatType) => void;
};

const ImageModal = ({
  showModal,
  setShowModal,
  selectedImgUrl,
  handleShowOnMap,
}: ImageModalProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [lonLat, setLonLat] = useState<LonLatType>();

  // only show "Show Map" button if latLon is not undefined, since some images lon lat data is unavailable
  useEffect(() => {
    const checkLonLats = async () => {
      const lonLat = await getLatLonFromImg(selectedImgUrl);
      console.log(lonLat);
      setLonLat(lonLat);
    };
    checkLonLats();
  }, [showModal]);

  const closeModal = () => {
    setShowModal(false);
    setIsLoading(true);
    setLonLat(undefined);
  };

  if (!showModal) return null;
  // check if modalData to make typescript below happy
  return (
    <div
      className="fixed inset-0 bg-black/80 z-30 flex items-center justify-center"
      onClick={closeModal}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <img
          src={selectedImgUrl}
          alt={`Image ${selectedImgUrl}`}
          onLoad={() => setIsLoading(false)}
          className="max-w-full max-h-[90vh] object-contain"
        ></img>
        {!isLoading && (
          <>
            <a
              href={selectedImgUrl}
              download={`selectedImgUrl`}
              className="absolute bottom-4 right-4 bg-[#fefae0] border-1 px-2 py-2 rounded shadow hover:bg-gray-200 transition"
            >
              <IoDownloadOutline />
            </a>
            {lonLat !== undefined && (
              <button
                className={`absolute bottom-4 right-14 border-1 px-2 py-2 rounded shadow  text-xs transition 
                  ${
                    lonLat !== null
                      ? "bg-[#fefae0] hover:bg-gray-200"
                      : "bg-gray-200"
                  }`}
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

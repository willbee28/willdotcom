import { IoDownloadOutline } from "react-icons/io5";
import getLatLonFromImg, { LonLatType } from "../utils/getLatLonFromImg";
import { useEffect, useState } from "react";

type ImageModalProps = {
  showModal: boolean;
  selectedImgUrl: string;
  setShowModal: (bool: boolean) => void;
  handleShowOnMap: (lonLat: LonLatType) => void;
};

let result: LonLatType;

const ImageModal = ({
  showModal,
  setShowModal,
  selectedImgUrl,
  handleShowOnMap,
}: ImageModalProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [lonLat, setLonLat] = useState<LonLatType | null>(null);

  // only show "Show Map" button if latLon is not undefined, since some images lon lat data is unavailable
  useEffect(() => {
    const validLonLats = async () => {
      setLonLat(await getLatLonFromImg(selectedImgUrl));
    };
    validLonLats();
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
            {lonLat && (
              <button
                className="absolute bottom-4 right-14 bg-[#fefae0] border-1 px-2 py-2 rounded shadow hover:bg-gray-200 text-xs transition"
                onClick={() => {
                  handleShowOnMap(lonLat);
                  closeModal();
                }}
              >
                Show on Map
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ImageModal;

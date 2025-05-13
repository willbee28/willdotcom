import { IoDownloadOutline } from "react-icons/io5";
import getLatLonFromImg from "../utils/getLatLonFromImg";
import { useEffect, useState } from "react";

type ModalDataType = {
  imageUrl: string;
  index: number;
} | null;

type ImageModalProps = {
  showModal: boolean;
  setShowModal: (bool: boolean) => void;
  modalData: ModalDataType;
  handleShowOnMap: () => void;
};

const ImageModal = ({
  showModal,
  setShowModal,
  modalData,
  handleShowOnMap,
}: ImageModalProps) => {
  const [showMapButton, setShowMapButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // only show "Show Map" button if latLon is not undefined, since some images lon lat data is unavailable
  useEffect(() => {
    if (modalData) {
      const validLonLats = async () => {
        const result = await getLatLonFromImg(modalData.imageUrl);
        setShowMapButton(!!result);
      };
      validLonLats();
    }
  }, [modalData?.imageUrl, showModal]);

  const closeModal = () => {
    setShowModal(false);
    setIsLoading(true);
    setShowMapButton(false);
  };

  if (!showModal) return null;
  // check if modalData to make typescript below happy
  if (modalData)
    return (
      <div
        className="fixed inset-0 bg-black/80 z-30 flex items-center justify-center"
        onClick={closeModal}
      >
        <div className="relative" onClick={(e) => e.stopPropagation()}>
          <img
            src={modalData.imageUrl}
            alt={`Image ${modalData.index}`}
            onLoad={() => setIsLoading(false)}
            className="max-w-full max-h-[90vh] object-contain"
          />
          {!isLoading && (
            <>
              <a
                href={modalData.imageUrl}
                download={`image-${modalData.index}.jpeg`}
                className="absolute bottom-4 right-4 bg-[#fefae0] border-1 px-2 py-2 rounded shadow hover:bg-gray-200 transition"
              >
                <IoDownloadOutline />
              </a>
              {showMapButton && (
                <button
                  className="absolute bottom-4 right-14 bg-[#fefae0] border-1 px-2 py-2 rounded shadow hover:bg-gray-200 text-xs transition"
                  onClick={() => {
                    closeModal();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    handleShowOnMap();
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

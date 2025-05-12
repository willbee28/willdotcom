type ModalDataType = {
  imageUrl: string;
  index: number;
} | null;

type ImageModalProps = {
  modalData: ModalDataType;
  setModalData: (m: ModalDataType) => void;
};

const ImageModal = ({ modalData, setModalData }: ImageModalProps) => {
  return (
    <div
      className="fixed inset-0 bg-black/80 z-30 flex items-center justify-center"
      onClick={() => setModalData(null)}
    >
      <div className="" onClick={(e) => e.stopPropagation()}>
        <img
          src={modalData?.imageUrl}
          alt={`Image ${modalData?.index}`}
          className="max-w-full max-h-[90vh] object-contain"
        />
      </div>
    </div>
  );
};

export default ImageModal;

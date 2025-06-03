import { useMemo } from "react";
import { IMAGE_COUNT } from "./PctTravels";
import ImageWithLoading from "./ImageWithLoading";

type ImageGridType = {
  setSelectedImgUrl: (url: string) => void;
  setShowModal: (show: boolean) => void;
};

function ImageGrid({ setSelectedImgUrl, setShowModal }: ImageGridType) {
  const imageUrls = useMemo(() => {
    const images: string[] = [];
    for (let i = 1; i <= IMAGE_COUNT; i++) {
      const imagePath = `/pctThumbs/${i}.jpeg`;
      images.push(imagePath);
    }
    return images;
  }, []);

  return (
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
  );
}

export default ImageGrid;

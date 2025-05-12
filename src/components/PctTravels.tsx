import { useState } from "react";
import ImageWithLoading from "./ImageWithLoading";
import PctMap from "./PctMap";

const PctTravels = () => {
  const imageUrls: string[] = [];
  for (let i = 1; i < 151; i++) {
    const imagePath = `/pctPhotos/${i}.png`;
    imageUrls.push(imagePath);
  }

  const [hideIntro, setHideeIntro] = useState(false);

  return (
    <div>
      <div className="w-3/5 mx-auto h-screen text-[#283618] text-3xl leading-relaxed">
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-44">
          <PctMap />
        </div>
        <div className="lg:pt-124 pt-64 grid lg:grid-cols-2">
          <div className={`col-start-2 ${hideIntro ? "hidden" : "relative"}`}>
            <div className="bg-[#fefae0] border-2 border-[#283618] rounded-md p-5">
              <span className="font-bold">Below</span> you can find pictures of
              my travels from Mexico to Canada along the Pacific Crest Trail
              <button
                className="absolute bottom-2 right-2 text-xs px-2 py-1 hover:text-[#496629] hover:cursor-pointer transition"
                onClick={() => {
                  setHideeIntro(true);
                }}
              >
                Hide
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 mx-auto w-4/5  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2">
          {imageUrls.map((imageUrl, index) => (
            <ImageWithLoading
              key={index}
              className="h-full w-full object-cover image-color-ease-in hover:cursor-pointer"
              src={imageUrl}
              alt={`Image ${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PctTravels;

import ImageWithLoading from "./ImageWithLoading";

const PctTravels = () => {
  const prelimImageUrls: string[] = [];
  const imageUrls: string[] = [];
  for (let i = 1; i < 9; i++) {
    const imagePath = `/pctPhotos/${i}.jpeg`;
    prelimImageUrls.push(imagePath);
  }
  for (let i = 9; i < 151; i++) {
    const imagePath = `/pctPhotos/${i}.jpeg`;
    imageUrls.push(imagePath);
  }

  return (
    <div>
      <div className="w-3/5 mx-auto mt-36 sm:my-64 text-[#283618] text-3xl leading-relaxed">
        <div>
          <span className="font-bold">Below</span> you can find picture of my
          travels from Mexico to Canada along the Pacific Crest Trail
        </div>
      </div>
      <div className="mt-24 mx-auto w-4/5  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2">
          {prelimImageUrls.map((imageUrl, index) => (
            <ImageWithLoading
              key={index}
              className="h-full w-full object-cover"
              src={imageUrl}
              alt={`Image ${index}`}
            />
          ))}
        </div>
        <div className="w-3/5 mx-auto my-8 sm:my-24 text-[#283618] text-3xl leading-relaxed">
          I hope that these pictures can bring you even a fraction of the joy
          that they have brought me
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2 ">
          {imageUrls.map((imageUrl, index) => (
            <ImageWithLoading
              key={index}
              className="h-full w-full object-cover"
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

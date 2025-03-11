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
            <img
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
            <img
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

// const ImageWithLoading = ({ src = "", ...imageAtts }: imageType) => {
//   const [loaded, setLoaded] = useState(false);
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     rootMargin: "100px",
//   });

//   useEffect(() => {
//     if (inView) {
//       const img = new Image();
//       img.src = src;
//       img.onload = () => {
//         setLoaded(true);
//       };
//     }
//   }, [inView, src]);

//   return (
//     <div ref={ref} className="relative w-40 h-40 m-4">
//       {!loaded && (
//         <div className="absolute inset-0 flex justify-center items-center bg-gray-200">
//           <div className="loader"></div>
//         </div>
//       )}
//       <img
//         {...imageAtts}
//         src={src}
//         className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
//           loaded ? "opacity-100 blur-0" : "opacity-0 blur-lg"
//         }`}
//         style={{ filter: loaded ? "none" : "blur(10px)" }}
//         onLoad={() => setLoaded(true)}
//       />
//     </div>
//   );
// };

const IntroText = ({
  showIntro,
  setShowIntro,
}: {
  showIntro: boolean;
  setShowIntro: (show: boolean) => void;
}) => {
  return (
    <div className="absolute grid lg:grid-cols-4 grid-cols-6 lg:mt-100 mt-50 z-10">
      <div
        className={`lg:col-start-3 lg:col-span-1 col-start-2 col-span-4 ${
          !showIntro ? "hidden" : "relative"
        }`}
      >
        <div className="text-xl bg-[#fefae0] border-2 border-[#283618] rounded-md p-5">
          <span className="font-bold">Below</span> you can find pictures of my
          travels from Mexico to Canada along the Pacific Crest Trail
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
  );
};

export default IntroText;

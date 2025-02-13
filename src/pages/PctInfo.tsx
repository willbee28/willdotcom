import "./../App.css";
import Footer from "./../components/Footer";
import PctTravels from "./../components/PctTravels";
import TopNav from "./../components/TopNav";

function PctInfo() {
  return (
    // google font: lato-regular https://fonts.google.com/selection/embed
    <div className="flex flex-col min-h-screen">
      <TopNav />
      <PctTravels />
      <Footer />
    </div>
  );
}

export default PctInfo;

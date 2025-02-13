import Footer from "./components/Footer";
import LandingText from "./components/LandingText";
import PctTravels from "./components/PctTravels";
import TopNav from "./components/TopNav";

function App() {
  return (
    // google font: lato-regular https://fonts.google.com/selection/embed
    <div className="flex flex-col min-h-screen">
      <TopNav />
      <LandingText />
      <Footer />
    </div>
  );
}

export default App;

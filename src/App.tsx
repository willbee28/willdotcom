import Footer from "./components/Footer";
import LandingText from "./components/LandingText";
import Projects from "./components/Projects";
import TopNav from "./components/TopNav";

function App() {
  return (
    // google font: lato-regular https://fonts.google.com/selection/embed
    <div className="flex flex-col">
      <TopNav />
      <LandingText />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

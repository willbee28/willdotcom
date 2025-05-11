import LandingText from "../components/LandingText";
import Projects from "../components/Projects";
import "./../App.css";

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingText />
      <Projects />
    </div>
  );
}

export default LandingPage;

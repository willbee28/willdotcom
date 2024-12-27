import "./App.css";
import Footer from "./components/Footer";
import TopNav from "./components/TopNav";

function App() {
  return (
    // google font: lato-regular https://fonts.google.com/selection/embed
    <div className="lato-regular flex flex-col min-h-screen">
      <TopNav />
      <div className="flex flex-col w-3/5 mx-auto mt-24 sm:mt-32 text-[#283618] flex-grow">
        <div className="text-4xl pb-8">Hello there</div>
        <div className=" text-xl pl-2">
          <p>
            My name is Will Borwegen and I am a software developer specializing
            in front-end and UI development. I have had the pleasure to work
            with various government contractors in DC, including working with
            esteemed clients such as NOAA and the DoD.
          </p>
          <p className="pt-6">
            After recently completing a five-and-a-half-month hike from Mexico
            to Canada known as the Pacific Crest Trail, I am excited to embark
            on my next professional journey. With a strong interest in
            sustainability and conservation, I am eager to contribute to
            meaningful projects in this field. I am open to exploring various
            roles where I can leverage my skills and experience. Feel free to
            reach out to me through any of the links below.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import TopNav from "./components/TopNav";

function App() {
  return (
    // google font: lato-regular https://fonts.google.com/selection/embed
    <div className="lato-regular">
      <TopNav />
      <div className="px-96 pt-44 text-[#283618]">
        <div className="text-4xl pb-12">Welcome to my site</div>
        <div className=" text-xl pl-2">
          Here you will find everything there is to know about Sir William
          Borwegen
        </div>
      </div>
    </div>
  );
}

export default App;

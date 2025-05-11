import { Outlet, ScrollRestoration } from "react-router";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import TopNav from "./components/TopNav";

export default function App() {
  return (
    <div className="flex flex-col">
      <ScrollRestoration />
      <TopNav />
      <Outlet />
      <Footer />
    </div>
  );
}

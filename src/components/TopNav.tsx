import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

function TopNav() {
  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <div className="text-[#FEFAE0]">
      <div className="sticky top-0 py-2 px-8 text-xl bg-[#283618] z-10">
        <div className="flex sm:w-11/12 mx-auto items-center justify-between">
          <div className="cols-3 flex gap-4 font-semibold text-3xl">
            <img width="40px" height="40px" src="/bear.svg"></img>
            Will Borwegen
          </div>
          {/* Conditionally render if viewport is >md */}
          <div className="hidden sm:flex cols-9 gap-5">
            <a
              href="/resume-borwegen.pdf"
              className="hover:underline"
              target="_blank"
            >
              Resume
            </a>
          </div>
          <div className="sm:hidden">
            <Hamburger onToggle={() => setNavOpen(!isNavOpen)} />
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`bg-[#283618] fixed right-0 w-44 text-3xl p-4
          shadow-lg transform transition-transform duration-300 ${
            isNavOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <a
          href="/resume-borwegen.pdf"
          className="hover:underline"
          target="_blank"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default TopNav;

import { Squash as Hamburger } from "hamburger-react";

function TopNav() {
  return (
    <div className="sticky top-0 bg-[#283618] text-[#FEFAE0] py-2 px-8 text-xl">
      <div className="flex sm:w-11/12 mx-auto items-center justify-between ">
        <div className="cols-3 flex gap-4 font-semibold text-3xl">
          <img width="40px" height="40px" src="./public/bear.svg"></img>
          Will Borwegen
        </div>
        {/* Conditionally render if viewport is >md */}
        <div className="hidden sm:flex cols-9 gap-5">
          <a
            href="./public/resume-borwegen.pdf"
            className="hover:underline"
            target="_blank"
          >
            Resume
          </a>
        </div>
        <div className="sm:hidden">
          <Hamburger />
        </div>
      </div>
    </div>
  );
}

export default TopNav;

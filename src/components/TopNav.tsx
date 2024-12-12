import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

function TopNav() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#283618] text-[#FEFAE0] py-2 px-8 text-xl">
      <div className="flex sm:w-11/12 mx-auto items-center justify-between ">
        <div className="cols-3 font-semibold">Will Borwegen</div>
        {/* Conditionally render if viewport is >md */}
        <div className="hidden sm:flex cols-9 gap-5">
          <div className="">About</div>
          <div className="">Resume</div>
          <div className="">Contact</div>
        </div>
        <div className="sm:hidden">
          <Hamburger />
        </div>
      </div>
    </div>
  );
}

export default TopNav;

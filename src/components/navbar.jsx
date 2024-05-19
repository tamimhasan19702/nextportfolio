/** @format */
"use client"; // This directive marks the file as a Client Component

import Link from "next/link";

const links = [
  {
    name: "Home",
    title: "Home page",
  },
  {
    name: "Portfolio",
    title: "Portfolio page",
  },
  {
    name: "About",
    title: "About me page",
  },
  {
    name: "Contact",
    title: "Contact me page",
  },
];

const Navbar = () => {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="relative">
        <Link
          href="/"
          className="relative text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center  overflow-hidden group">
          <span className="flex px-1 items-center justify-center w-15 h-5 relative z-20 text-white mr-2 bg-black rounded transition-all duration-500 group-hover:text-black group-hover:bg-white group-hover:px-2">
            Tareq
          </span>
          <span className="flex items-center justify-center px-2 relative z-20 bg-shadow w-15 h-5 rounded bg-white text-black transition-colors duration-500 group-hover:bg-black group-hover:text-white group-hover:px-1">
            Tamim
          </span>
          <span
            className="absolute inset-0 transition-transform duration-300 ease-in-out bg-white z-10 group-hover:translate-x-0"
            style={{ transform: "translateX(-100%)" }}></span>
        </Link>
      </div>
      <div>
        {/* Menu button */}
        <button className="w-8 h-5 flex flex-col  justify-between">
          <div className="w-full h-1 bg-black rounded"></div>
          <div className="w-full h-1 bg-black rounded"></div>
          <div className="w-full h-1 bg-black rounded"></div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

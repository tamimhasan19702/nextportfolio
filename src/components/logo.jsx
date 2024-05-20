/** @format */
import Link from "next/link";
const Logo = (url) => {
  return (
    <div className="relative">
      <Link
        href={url}
        className="relative text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center overflow-hidden group border-none">
        <span className="flex px-1 items-center justify-center w-15 h-5 relative z-20 text-white mr-1 bg-black rounded transition-all duration-500 group-hover:text-black group-hover:bg-white group-hover:px-2">
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
  );
};

export default Logo;

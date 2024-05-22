/** @format */

import Image from "next/image";
import { IoIosMail } from "react-icons/io";
import { IoCodeWorkingSharp } from "react-icons/io5";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Image container */}
      <div className="h-1/2 relative lg:h-full lg:w-1/2">
        <Image src={"/tamim.jpg"} alt="tamim" fill className="object-contain" />
      </div>
      {/* Text Container */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* title */}
        <h1 className="text-4xl md:text-6xl font-bold ">
          Crafting Digital Experiences, Designing Tomorrow
        </h1>
        {/* description */}
        <p className="md:text-xl">
          Welcome to my digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics and a mastery of code, my
          portfolio showcases a diverse collection of projects that reflect my
          commitment to excellence.
        </p>
        {/* buttons */}
        <div className="flex gap-4 w-full ml-4">
          <div className="group">
            <button className="p-4 rounded-lg ring-2 ring-black bg-black text-white transition-all duration-300 hover:bg-white hover:text-black font-bold  hover:pl-8">
              View My Work
              <IoCodeWorkingSharp
                className="ml-2 hidden group-hover:inline-block transition-all duration-300"
                size={25}
              />
            </button>
          </div>

          <div className="group">
            <button className="p-4 rounded-lg ring-2 ring-black text-black transition-all duration-300 hover:bg-black hover:text-white font-bold hover:pl-6 flex items-center">
              Contact Me
              <IoIosMail
                className="ml-2 hidden group-hover:inline-block transition-all duration-300"
                size={25}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

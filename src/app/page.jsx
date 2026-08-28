/** @format */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { animate, motion } from "framer-motion";
const Homepage = () => {
  const downloadRef = useRef();
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDownload = (e) => {
    e.preventDefault();
    if (downloading) return;
    setDownloading(true);
    setProgress(0);
    animate(0, 100, {
      duration: 1.6,
      ease: "easeInOut",
      onUpdate: (v) => setProgress(v),
      onComplete: () => {
        downloadRef.current?.click();
        setTimeout(() => {
          setDownloading(false);
          setProgress(0);
        }, 800);
      },
    });
  };

  return (
    <motion.div
      className="min-h-[calc(100vh-6rem)]"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="flex flex-col gap-8 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 pb-24 lg:pb-4 lg:min-h-[calc(100vh-6rem)]">
        {/* Image container */}
        <div className="relative h-[40vh] lg:h-auto lg:w-1/2">
          <Image
            src={"/tamim.jpg"}
            alt="tamim"
            fill
            className="object-contain"
          />
        </div>
        {/* Text Container */}
        <div className="lg:w-1/2 flex flex-col gap-6 md:gap-8 items-center justify-center py-10 lg:py-2">
          {/* title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center">
            Crafting Digital Experiences, Designing Tomorrow
          </h1>
          {/* description */}
          <p className="text-sm sm:text-base md:text-xl text-center">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="relative overflow-hidden p-3 sm:p-4 rounded-lg ring-2 ring-black bg-black text-white transition-all duration-500 hover:bg-white hover:text-black font-bold text-sm sm:text-base cursor-pointer disabled:cursor-wait">
              <span
                className="absolute inset-y-0 left-0 bg-zinc-700"
                style={{ width: `${downloading ? progress : 0}%` }}
              />
              <span className="relative z-10">
                {downloading
                  ? `Downloading ${Math.round(progress)}%`
                  : "Download CV"}
              </span>
            </button>
            <a
              ref={downloadRef}
              href="/cv.pdf"
              download
              aria-hidden="true"
              className="hidden"
            />

            <Link href="/portfolio" className="group">
              <button className="p-3 sm:p-4 rounded-lg ring-2 ring-black text-black transition-all duration-500 hover:bg-black hover:text-white font-bold hover:pl-6 sm:hover:pl-8 text-sm sm:text-base cursor-pointer">
                View My Work
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;

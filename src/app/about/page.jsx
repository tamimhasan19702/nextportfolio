/** @format */
"use client";
import Biography from "@/components/biography";
import Skills from "@/components/skills";
import { motion } from "framer-motion";
import Image from "next/image";
const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      {/* container */}
      <div className="">
        {/* text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* biography */}
          <Biography />

          {/* Skills container */}
          <Skills />

          {/* experience container */}
          <div className="">Experience</div>
        </div>
        {/* SVG Container */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;

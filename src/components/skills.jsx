/** @format */

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      {/* SKILL TITLE */}
      <motion.h1
        initial={{ x: "-300px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="font-bold text-2xl">
        SKILLS
      </motion.h1>
      {/* SKILL LIST */}
      <motion.div
        initial={{ x: "-300px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex gap-4 flex-wrap">
        <div className="rounded  px-4 py-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-110">
          JavaScript
        </div>
        <div className="rounded  px-4 py-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-110">
          ReactJS
        </div>
        <div className="rounded  px-4 py-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-110">
          ReactNative
        </div>
        <div className="rounded  px-4 py-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-110">
          NextJS
        </div>
        <div className="rounded  px-4 py-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-110">
          Node/Express
        </div>
        <div className="rounded  px-4 py-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-110">
          MongoDB
        </div>
        <div className="rounded  px-4 py-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-110">
          MySql
        </div>
        <div className="rounded  px-4 py-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-110">
          PHP
        </div>
        <div className="rounded  px-4 py-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-110">
          WordPress
        </div>
        <div className="rounded  px-4 py-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-110">
          Tailwind CSS
        </div>
        <div className="rounded  px-4 py-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-110">
          SCSS
        </div>
        <div className="rounded  px-4 py-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-110">
          Firebase
        </div>
        <div className="rounded  px-4 py-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-110">
          Redux
        </div>
        <div className="rounded  px-4 py-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-110">
          Framer Motion
        </div>
        <div className="rounded  px-4 py-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-110">
          Rest API
        </div>
        <div className="rounded  px-4 py-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-110">
          HTML
        </div>
        <div className="rounded  px-4 py-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-110">
          CSS
        </div>
      </motion.div>
    </>
  );
};

export default Skills;

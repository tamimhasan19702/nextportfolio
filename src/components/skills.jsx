/** @format */

import { motion } from "framer-motion";

const Skills = ({ isSkillRefInView }) => {
  return (
    <>
      {/* SKILL TITLE */}
      <motion.h1
        initial={{ x: "-300px" }}
        animate={isSkillRefInView ? { x: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="font-bold text-2xl">
        SKILLS
      </motion.h1>
      {/* SKILL LIST */}
      <motion.div
        initial={{ x: "-300px" }}
        animate={isSkillRefInView ? { x: 0 } : {}}
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
      {/* SKILL SCROLL SVG */}
      <motion.svg
        initial={{ opacity: 0.2, y: 0 }}
        animate={{ opacity: 1, y: "10px" }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}>
        <path
          d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
          stroke="#000000"
          strokeWidth="1"></path>
        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
        <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
      </motion.svg>
    </>
  );
};

export default Skills;

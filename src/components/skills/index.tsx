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
        {[
          "JavaScript",
          "ReactJS",
          "ReactNative",
          "NextJS",
          "Node/Express",
          "MongoDB",
          "MySql",
          "PHP",
          "WordPress",
          "Tailwind CSS",
          "SCSS",
          "Firebase",
          "Redux",
          "Framer Motion",
          "Rest API",
          "HTML",
          "CSS",
        ].map((skill) => (
          <div
            key={skill}
            className="rounded px-4 py-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-110">
            {skill}
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Skills;

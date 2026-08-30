/** @format */

import { motion } from "framer-motion";
import ExperienceListItem from "../experienceListItem";
import { experienceItems } from "./interface";

const Experience = () => {
  return (
    <>
      <motion.h1
        initial={{ x: "-300px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="font-bold text-2xl">
        EXPERIENCE
      </motion.h1>
      <motion.div
        initial={{ x: "-300px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
        <div className="flex flex-col gap-8 lg:gap-0">
          {experienceItems.map((item, i) => (
            <div
              key={i}
              className="flex flex-col lg:flex-row lg:justify-between lg:h-48">
              {item.side === "left" ? (
                <div className="lg:w-1/3 pl-8 lg:pl-0">
                  <ExperienceListItem {...item} />
                </div>
              ) : (
                <div className="lg:w-1/3 hidden lg:block"></div>
              )}
              <div
                className={`w-1 lg:w-1/6 flex justify-center py-4 lg:py-0 ${
                  item.side === "left"
                    ? "order-first lg:order-none"
                    : ""
                }`}>
                <div className="w-1 h-16 lg:h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-black bg-white -left-2"></div>
                </div>
              </div>
              {item.side === "right" ? (
                <div className="lg:w-1/3 pl-8">
                  <ExperienceListItem {...item} />
                </div>
              ) : (
                <div className="lg:w-1/3 hidden lg:block"></div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Experience;

/** @format */

import { motion } from "framer-motion";
import ExperienceListItem from "./experienceListItem";

const Experience = ({ isExperienceRefInView }) => {
  return (
    <>
      {/* EXPERIENCE TITLE */}
      <motion.h1
        initial={{ x: "-300px" }}
        animate={isExperienceRefInView ? { x: "0" } : {}}
        transition={{ delay: 0.2 }}
        className="font-bold text-2xl">
        EXPERIENCE
      </motion.h1>
      {/* EXPERIENCE LIST */}
      <motion.div
        initial={{ x: "-300px" }}
        animate={isExperienceRefInView ? { x: "0" } : {}}
        className="">
        {/* EXPERIENCE LIST ITEM */}
        <div className="flex justify-between h-48">
          {/* LEFT */}
          <div className="w-1/3 ">
            <ExperienceListItem
              name={"Senior React Developer"}
              desc={
                "I provided web solutions, applying a range of technologies to address client requirements."
              }
              time={"2010 - 2019"}
              company={"Apple"}
            />
          </div>
          {/* CENTER */}
          <div className="w-1/6 flex justify-center">
            {/* LINE */}
            <div className="w-1 h-full bg-gray-600 rounded relative">
              {/* LINE CIRCLE */}
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-1/3 "></div>
        </div>

        {/* EXPERIENCE LIST ITEM */}
        <div className="flex justify-between h-48">
          {/* LEFT */}

          <div className="w-1/3 "></div>
          {/* CENTER */}
          <div className="w-1/6 flex justify-center">
            {/* LINE */}
            <div className="w-1 h-full bg-gray-600 rounded relative">
              {/* LINE CIRCLE */}
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-1/3 ">
            <ExperienceListItem
              name={"Senior React Developer"}
              desc={
                "I provided web solutions, applying a range of technologies to address client requirements."
              }
              time={"2010 - 2019"}
              company={"Apple"}
            />
          </div>
        </div>

        {/* EXPERIENCE LIST ITEM */}
        <div className="flex justify-between h-48">
          {/* LEFT */}
          <div className="w-1/3 ">
            <ExperienceListItem
              name={"Senior React Developer"}
              desc={
                "I provided web solutions, applying a range of technologies to address client requirements."
              }
              time={"2010 - 2019"}
              company={"Apple"}
            />
          </div>
          {/* CENTER */}
          <div className="w-1/6 flex justify-center">
            {/* LINE */}
            <div className="w-1 h-full bg-gray-600 rounded relative">
              {/* LINE CIRCLE */}
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-1/3 "></div>
        </div>
      </motion.div>
    </>
  );
};

export default Experience;

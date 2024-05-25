/** @format */

import { motion } from "framer-motion";
import ExperienceListItem from "./experienceListItem";

const Experience = () => {
  return (
    <div className="flex flex-col gap-12 justify-center">
      {/* experience title */}
      <h1 className="font-bold text-2xl">Experience</h1>
      {/* experience list */}

      <div>
        {/* EXPERIENCE LIST ITEM */}
        <div className="flex justify-between h-48">
          {/* LEFT */}
          <div className="w-1/3 ">
            <ExperienceListItem
              name={"Senior JavaScript Engineer"}
              desc={
                "I led web development, offering expertise in JavaScript frameworks."
              }
              time={"2024 - Present"}
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
              name={" Freelancer"}
              desc={
                "I provided web solutions, applying a range of technologies to address client requirements."
              }
              time={"2010 - 2019"}
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
      </div>

      {/* experience svg */}
    </div>
  );
};

export default Experience;

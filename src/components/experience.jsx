/** @format */

import { motion } from "framer-motion";
import ExperienceListItem from "./experienceListItem";

const Experience = () => {
  return (
    <>
      {/* EXPERIENCE TITLE */}
      <motion.h1
        initial={{ x: "-300px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="font-bold text-2xl">
        EXPERIENCE
      </motion.h1>
      {/* EXPERIENCE LIST */}
      <motion.div
        initial={{ x: "-300px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
        {/* Mobile: stacked layout */}
        <div className="flex flex-col gap-8 lg:gap-0">
          {/* EXPERIENCE LIST ITEM 1 */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:h-48">
            <div className="lg:w-1/3 pl-8 lg:pl-0">
              <ExperienceListItem
                name={"Senior React Developer"}
                desc={
                  "I provided web solutions, applying a range of technologies to address client requirements."
                }
                time={"2010 - 2019"}
                company={"Apple"}
                companyUrl={"https://www.apple.com"}
              />
            </div>
            {/* CENTER LINE */}
            <div className="w-1 lg:w-1/6 flex justify-center py-4 lg:py-0 order-first lg:order-none">
              <div className="w-1 h-16 lg:h-full bg-gray-600 rounded relative">
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-black bg-white -left-2"></div>
              </div>
            </div>
            <div className="lg:w-1/3 hidden lg:block"></div>
          </div>

          {/* EXPERIENCE LIST ITEM 2 */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:h-48">
            <div className="lg:w-1/3 hidden lg:block"></div>
            {/* CENTER LINE */}
            <div className="w-1 lg:w-1/6 flex justify-center py-4 lg:py-0">
              <div className="w-1 h-16 lg:h-full bg-gray-600 rounded relative">
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-black bg-white -left-2"></div>
              </div>
            </div>
            <div className="lg:w-1/3 pl-8">
              <ExperienceListItem
                name={"Senior React Developer"}
                desc={
                  "I provided web solutions, applying a range of technologies to address client requirements."
                }
                time={"2010 - 2019"}
                company={"Apple"}
                companyUrl={"https://www.apple.com"}
              />
            </div>
          </div>

          {/* EXPERIENCE LIST ITEM 3 */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:h-48">
            <div className="lg:w-1/3 pl-8 lg:pl-0">
              <ExperienceListItem
                name={"Senior React Developer"}
                desc={
                  "I provided web solutions, applying a range of technologies to address client requirements."
                }
                time={"2010 - 2019"}
                company={"Apple"}
                companyUrl={"https://www.apple.com"}
              />
            </div>
            {/* CENTER LINE */}
            <div className="w-1 lg:w-1/6 flex justify-center py-4 lg:py-0 order-first lg:order-none">
              <div className="w-1 h-16 lg:h-full bg-gray-600 rounded relative">
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-black bg-white -left-2"></div>
              </div>
            </div>
            <div className="lg:w-1/3 hidden lg:block"></div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Experience;

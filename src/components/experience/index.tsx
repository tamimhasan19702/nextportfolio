/** @format */

import { motion } from "framer-motion";
import type { Experience } from "@/payload-types";
import ExperienceListItem from "../experienceListItem";

const formatRange = (start?: string | null, end?: string | null) => {
  const fmt = (d?: string | null) =>
    d ? new Date(d).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "";
  const s = fmt(start);
  const e = end ? fmt(end) : "Present";
  return [s, e].filter(Boolean).join(" - ");
};

const Experience = ({ experiences = [] }: { experiences?: Experience[] }) => {
  if (experiences.length === 0) {
    return null
  }
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
          {experiences.map((item, i) => {
            const side: "left" | "right" = i % 2 === 0 ? "left" : "right";
            return (
              <div
                key={item.id}
                className="flex flex-col lg:flex-row lg:justify-between lg:h-48">
                {side === "left" ? (
                  <div className="lg:w-1/3 pl-8 lg:pl-0">
                    <ExperienceListItem
                      name={item.designation}
                      desc={item.description || undefined}
                      time={formatRange(item.startDate, item.endDate)}
                      company={item.company}
                      companyLocation={item.companyLocation || undefined}
                    />
                  </div>
                ) : (
                  <div className="lg:w-1/3 hidden lg:block"></div>
                )}
                <div
                  className={`w-1 lg:w-1/6 flex justify-center py-4 lg:py-0 ${
                    side === "left" ? "order-first lg:order-none" : ""
                  }`}>
                  <div className="w-1 h-16 lg:h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-black bg-white -left-2"></div>
                  </div>
                </div>
                {side === "right" ? (
                  <div className="lg:w-1/3 pl-8">
                    <ExperienceListItem
                      name={item.designation}
                      desc={item.description || undefined}
                      time={formatRange(item.startDate, item.endDate)}
                      company={item.company}
                      companyLocation={item.companyLocation || undefined}
                    />
                  </div>
                ) : (
                  <div className="lg:w-1/3 hidden lg:block"></div>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Experience;

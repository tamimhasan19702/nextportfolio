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
      <div className="flex flex-col gap-6">
        {experiences.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}>
            <ExperienceListItem
              index={i + 1}
              name={item.designation}
              desc={item.description || undefined}
              time={formatRange(item.startDate, item.endDate)}
              company={item.company}
              companyLocation={item.companyLocation || undefined}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Experience;

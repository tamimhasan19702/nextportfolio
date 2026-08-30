/** @format */

import { motion } from "framer-motion";
import type { Hobby } from "@/payload-types";
import { HOBBY_ICON_MAP } from "../iconOptions";

const Title = ({ children }: { children: React.ReactNode }) => (
  <motion.h1
    initial={{ x: "-300px", opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
    className="font-bold text-2xl">
    {children}
  </motion.h1>
);

const Hobbies = ({ hobbies = [] }: { hobbies?: Hobby[] }) => {
  if (!hobbies?.length) {
    return null
  }
  return (
    <section id="hobbies" className="flex flex-col gap-6">
      <Title>HOBBIES</Title>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {hobbies.map((hobby) => {
          const Icon = HOBBY_ICON_MAP[hobby.icon as keyof typeof HOBBY_ICON_MAP];
          return (
            <div
              key={hobby.id}
              className="group flex items-start gap-4 rounded-xl border border-zinc-200 p-5 transition-all duration-300 hover:border-zinc-900 hover:shadow-lg">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white transition-colors group-hover:bg-white group-hover:text-zinc-900">
                {Icon ? <Icon size={18} /> : null}
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900">{hobby.text}</h3>
                {hobby.description && (
                  <p className="mt-1 text-sm text-zinc-500">{hobby.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Hobbies;

/** @format */

import { motion } from "framer-motion";
import { Camera, Gamepad2, Music, Plane } from "lucide-react";

const Title = ({ children }) => (
  <motion.h1
    initial={{ x: "-300px", opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
    className="font-bold text-2xl">
    {children}
  </motion.h1>
);

const hobbies = [
  {
    icon: Plane,
    name: "Travel",
    desc: "Exploring new cities, cultures, and cuisines.",
  },
  {
    icon: Camera,
    name: "Photography",
    desc: "Street and travel photography on weekends.",
  },
  {
    icon: Gamepad2,
    name: "Gaming",
    desc: "Retro platforms and strategy games.",
  },
  {
    icon: Music,
    name: "Music",
    desc: "Curating playlists and learning the guitar.",
  },
];

const Hobbies = () => {
  return (
    <section id="hobbies" className="flex flex-col gap-6">
      <Title>HOBBIES</Title>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {hobbies.map(({ icon: Icon, name, desc }) => (
          <div
            key={name}
            className="group flex items-start gap-4 rounded-xl border border-zinc-200 p-5 transition-all duration-300 hover:border-zinc-900 hover:shadow-lg">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white transition-colors group-hover:bg-white group-hover:text-zinc-900">
              <Icon size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900">{name}</h3>
              <p className="mt-1 text-sm text-zinc-500">{desc}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hobbies;
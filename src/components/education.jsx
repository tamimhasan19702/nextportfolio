/** @format */

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

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

const EducationRow = ({ title, org, time }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="border-b border-zinc-200 py-5 first:pt-0">
    <div className="flex items-baseline justify-between gap-4">
      <h3 className="font-medium text-zinc-900">{title}</h3>
      <span className="shrink-0 text-xs tabular-nums text-zinc-400">{time}</span>
    </div>
    <p className="mt-1 text-sm text-zinc-500">{org}</p>
  </motion.div>
);

const CertificateCard = ({ title, org, time, credential, url }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="group flex flex-col gap-3 rounded-xl border border-zinc-200 p-6 transition-all duration-300 hover:border-zinc-900 hover:shadow-lg">
    <div className="flex items-start justify-between gap-4">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-white shadow transition-colors group-hover:bg-white group-hover:text-zinc-900">
        <BadgeCheck size={18} />
      </div>
      <span className="text-xs tabular-nums text-zinc-400">{time}</span>
    </div>
    <h3 className="font-semibold text-zinc-900">
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-600 hover:underline">
          {title}
        </a>
      ) : (
        title
      )}
    </h3>
    <p className="text-sm text-zinc-500">{org}</p>
    <p className="mt-auto border-t border-zinc-100 pt-3 text-xs text-zinc-400">
      Verifiable ID <span className="font-mono">{credential}</span>
    </p>
  </motion.div>
);

const educationItems = [
  {
    title: "B.Sc. in Computer Science & Engineering",
    org: "North South University, Dhaka",
    time: "2012 - 2016",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    org: "Notre Dame College, Dhaka",
    time: "2010 - 2012",
  },
  {
    title: "Secondary School Certificate (SSC)",
    org: "Ideal School & College, Dhaka",
    time: "2008 - 2010",
  },
];

const certificationItems = [
  {
    title: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    time: "2023",
    credential: "AWS-CCP-2023-7A2F9C",
    url: "https://aws.amazon.com/certification/",
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    org: "Meta via Coursera",
    time: "2022",
    credential: "META-FED-2022-4B8D1E",
    url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
  },
  {
    title: "Full-Stack JavaScript Bootcamp",
    org: "freeCodeCamp",
    time: "2021",
    credential: "FCC-FSJS-2021-9C3A05",
    url: "https://www.freecodecamp.org/certification/",
  },
];

const Education = () => {
  return (
    <div className="flex flex-col gap-16">
      {/* EDUCATION */}
      <section className="flex flex-col gap-6">
        <Title>EDUCATION</Title>
        <div>
          {educationItems.map((item) => (
            <EducationRow key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="flex flex-col gap-6">
        <Title>CERTIFICATIONS</Title>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {certificationItems.map((item) => (
            <CertificateCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
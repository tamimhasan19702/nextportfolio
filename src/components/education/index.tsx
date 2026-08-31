/** @format */

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import type { Education, Certification } from "@/payload-types";

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

const formatRange = (start?: string | null, end?: string | null) => {
  const fmt = (d?: string | null) =>
    d ? new Date(d).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "";
  const s = fmt(start);
  const e = end ? fmt(end) : "Present";
  return [s, e].filter(Boolean).join(" - ");
};

const eduTime = (e: Education) => formatRange(e.startDate, e.endDate);
const certTime = (c: Certification) =>
  c.date ? new Date(c.date).toLocaleDateString("en-US", { year: "numeric" }) : "";

const EducationRow = ({ e }: { e: Education }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="border-b border-zinc-200 py-5 first:pt-0">
    <div className="flex items-baseline justify-between gap-4">
      <h3 className="font-medium text-zinc-900">{e.degree}</h3>
      <span className="shrink-0 text-xs tabular-nums text-zinc-400">{eduTime(e)}</span>
    </div>
    <p className="mt-1 text-sm text-zinc-500">{e.institution}</p>
{e.description && <p className="mt-1 text-sm text-zinc-400">{e.description}</p>}
        {e.grade && <p className="mt-1 text-sm text-zinc-400">Grade: {e.grade}</p>}
      </motion.div>
);

const CertificateCard = ({ c }: { c: Certification }) => (
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
      <span className="text-xs tabular-nums text-zinc-400">{certTime(c)}</span>
    </div>
    <h3 className="font-semibold text-zinc-900">
      {c.link ? (
        <a
          href={c.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-600 hover:underline">
          {c.name}
        </a>
      ) : (
        c.name
      )}
    </h3>
    <p className="text-sm text-zinc-500">{c.institution}</p>
    {c.certificateId && (
      <p className="mt-auto border-t border-zinc-100 pt-3 text-xs text-zinc-400">
        Verifiable ID <span className="font-mono">{c.certificateId}</span>
      </p>
    )}
  </motion.div>
);

const Education = ({
  education = [],
  certifications = [],
}: {
  education?: Education[];
  certifications?: Certification[];
}) => {
  if (education.length === 0 && certifications.length === 0) {
    return null
  }

  return (
    <div className="flex flex-col gap-16">
      {education.length > 0 && (
        <section className="flex flex-col gap-6">
          <Title>EDUCATION</Title>
          <div>
            {education.map((e) => (
              <EducationRow key={e.id} e={e} />
            ))}
          </div>
        </section>
      )}

      {certifications.length > 0 && (
        <section className="flex flex-col gap-6">
          <Title>CERTIFICATIONS</Title>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {certifications.map((c) => (
              <CertificateCard key={c.id} c={c} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Education;

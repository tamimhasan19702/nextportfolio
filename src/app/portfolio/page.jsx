/** @format */
"use client";

import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Brain from "@/components/brainSvg";
import { projects } from "@/data/projects";
import { Card, CardContent } from "@/components/ui/card";
import PageHeader from "@/components/pageHeader";

const formatIndex = (id) => String(id).padStart(2, "0");

const PortfolioPage = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="h-full bg-white text-zinc-900"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      {/* CONTAINER */}
      <div className="lg:flex">
        {/* PROJECTS CONTAINER */}
        <div className="flex flex-col gap-10 md:gap-14 p-4 sm:p-8 md:p-12 lg:p-20 xl:px-24 2xl:px-32 lg:w-3/5 xl:w-3/5 z-30 pb-24">
          {/* HEADER */}
          <PageHeader
            eyebrow={`Portfolio / ${String(projects.length).padStart(2, "0")} Projects`}
            title={
              <>
                Selected{" "}
                <span className="text-transparent [-webkit-text-stroke:1.5px_black]">
                  Work
                </span>
              </>
            }
            description="A curated collection of products I've designed and built — commerce, publishing, social, and productivity. Click any card to open its case study."
          />

          {/* BENTO GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:auto-rows-[15rem] gap-4 lg:gap-5">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.slug}`}
                className={`group relative block h-56 sm:h-64 lg:h-auto text-left ${
                  project.span
                }`}>
                <Card className="relative h-full w-full overflow-hidden rounded-xl bg-neutral-900 p-0 ring-1 ring-zinc-900">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover grayscale contrast-[1.05] opacity-90 transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

                  <span className="absolute top-4 left-4 font-mono text-[0.65rem] tracking-widest text-white/70">
                    {formatIndex(project.id)}
                  </span>
                  <span className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full border border-white/30 text-white/80 transition-all duration-300 group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-zinc-900">
                    <ArrowUpRight className="size-4" />
                  </span>

                  <CardContent className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5 text-white">
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-zinc-400">
                      {project.category} · {project.year}
                    </span>
                    <h3
                      className={`font-bold leading-tight tracking-tight ${
                        project.theme === "feature"
                          ? "text-2xl sm:text-3xl"
                          : "text-lg sm:text-xl"
                      }`}>
                      {project.title}
                    </h3>
                    <p className="line-clamp-2 max-w-md text-xs sm:text-sm text-zinc-300">
                      {project.desc}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}

            {/* CTA TILE */}
            <Link
              href="/contact"
              className="group relative block h-56 sm:h-64 lg:h-auto text-left sm:col-span-2 lg:col-span-2 xl:col-span-1">
              <Card className="relative h-full w-full overflow-hidden rounded-xl bg-zinc-900 p-0 ring-1 ring-zinc-900">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black" />
                <CardContent className="absolute inset-0 flex flex-col justify-between p-5 text-white">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-zinc-400">
                    Next Step
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg sm:text-xl font-bold leading-tight">
                      Have a project?
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300">
                      Let&apos;s build something together.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold">
                    Get in touch
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* SVG CONTAINER */}
        <div className="hidden lg:block lg:w-2/5 xl:w-2/5 relative z-50">
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            <Brain scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
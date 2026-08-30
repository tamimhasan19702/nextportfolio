"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Brain from "@/components/brainSvg";
import ProjectSlider from "@/components/projectSlider";
import { Card, CardContent } from "@/components/ui/card";
import PageHeader from "@/components/pageHeader";
import { useScroll } from "framer-motion";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { Portfolio, Work } from "@/payload-types";
import type { PortfolioContentProps } from "./interface";

const formatIndex = (id: number | string) => String(id).padStart(2, "0");

const getBento = (index: number) => {
  const cycle = Math.floor(index / 3);
  const slot = index % 3;
  const feature = cycle % 3;
  return slot === feature ? "lg:col-span-2 lg:row-span-2" : "lg:col-span-1 lg:row-span-1";
};

const getProjectImages = (project: Work) => {
  const images = project.images ?? [];
  if (images.length > 0) {
    return images
      .map((img) => {
        const url = img.image && typeof img.image !== "string" ? img.image.url : "";
        return url ? { url, alt: project.title } : null;
      })
      .filter(Boolean) as { url: string; alt: string }[];
  }
  return [{ url: `/projects/taskflow.svg`, alt: project.title }];
};

const PortfolioContent = ({
  works = [],
  portfolioGlobal = {} as Portfolio,
  worksWithYear,
}: PortfolioContentProps) => {
  const { scrollYProgress } = useScroll();

  const eyebrow = portfolioGlobal.eyebrowPrefix
    ? `${portfolioGlobal.eyebrowPrefix} / ${String(works.length).padStart(2, "0")} Projects`
    : `Portfolio / ${String(works.length).padStart(2, "0")} Projects`;

  const title = portfolioGlobal.title || "Selected Work";
  const description = portfolioGlobal.description;
  const ctaText = portfolioGlobal.ctaText || "Have a project?";
  const ctaLink = portfolioGlobal.ctaLink || "/contact";

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="lg:flex">
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-16 md:gap-24 lg:gap-32 xl:gap-40 lg:w-3/5 lg:pr-0 xl:w-3/5 z-30 pb-24 sm:pb-35 lg:pb-40">
          <PageHeader
            eyebrow={eyebrow}
            title={
              <>
                Selected{" "}
                <span className="text-transparent [-webkit-text-stroke:1.5px_black]">
                  Work
                </span>
              </>
            }
            description={description ? <RichText data={description as never} /> : null}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[15rem] gap-4 lg:gap-5 grid-flow-dense">
            {works.map((project, index) => {
              const images = getProjectImages(project);
              return (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.slug}`}
                  className={`group relative block h-56 sm:h-64 lg:h-auto text-left ${getBento(index)}`}
                >
                  <Card className="relative h-full w-full overflow-hidden rounded-xl bg-neutral-900 p-0 ring-1 ring-zinc-900">
                    <ProjectSlider
                      images={images.map((i) => i.url)}
                      alt={project.title}
                      dotPosition="top-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      imageClassName="object-cover grayscale contrast-[1.05] opacity-90 transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

                    <span className="absolute top-4 left-4 font-mono text-[0.65rem] tracking-widest text-white/70">
                      {formatIndex(project.sortOrder || project.id)}
                    </span>
                    <span className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full border border-white/30 text-white/80 transition-all duration-300 group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-zinc-900">
                      <ArrowUpRight className="size-4" />
                    </span>

                    <CardContent className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5 text-white">
                      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-zinc-400">
                        {project.category} · {project.year}
                      </span>
                      <h3 className="font-bold leading-tight tracking-tight text-lg sm:text-xl">
                        {project.title}
                      </h3>
                      <div className="line-clamp-2 max-w-md text-xs sm:text-sm text-zinc-300">
                        {project.excerpt ? <RichText data={project.excerpt as never} /> : null}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}

            <Link
              href={ctaLink}
              className="group relative block h-56 sm:h-64 lg:h-auto text-left sm:col-span-2 lg:col-span-1"
            >
              <Card className="relative h-full w-full overflow-hidden rounded-xl bg-zinc-900 p-0 ring-1 ring-zinc-900">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black" />
                <CardContent className="absolute inset-0 flex flex-col justify-between p-5 text-white">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-zinc-400">
                    Next Step
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg sm:text-xl font-bold leading-tight">
                      {ctaText}
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

        <div className="hidden lg:block lg:w-2/5 xl:w-2/5 relative z-50">
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            <Brain scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioContent;

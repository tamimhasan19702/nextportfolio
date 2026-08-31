"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ProjectSlider from "@/components/projectSlider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { Work } from "@/payload-types";
import type { LightboxProps, ProjectContentProps } from "./interface";

const Lightbox = ({ images, alt, index, onClose }: LightboxProps) => {
  const [current, setCurrent] = useState(index);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, images.length]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-black/95 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} full view`}
    >
      <div
        className="relative h-[70vh] w-full max-w-6xl overflow-hidden rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[current]}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 896px"
          className="object-contain"
        />
      </div>

      <div
        className="flex items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {images.length > 1 ? (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="flex size-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
            >
              <ChevronLeft className="size-5" />
            </button>
            <span className="min-w-12 text-center font-mono text-sm text-white">
              {current + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="flex size-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        ) : (
          <span className="font-mono text-sm text-white">1 / 1</span>
        )}
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
      >
        <X className="size-5" />
      </button>
    </motion.div>
  );
};

const getProjectImages = (project: Work) => {
  const images = project.images ?? [];
  if (images.length > 0) {
    return images
      .map((img) => {
        const url =
          img.image && typeof img.image !== "string" ? img.image.url : "";
        return url ? { url, alt: project.title } : null;
      })
      .filter(Boolean) as { url: string; alt: string }[];
  }
  return [{ url: `/projects/taskflow.svg`, alt: project.title }];
};

const ProjectContent = ({ project }: ProjectContentProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-white px-4 text-center text-zinc-900">
        <h1 className="text-3xl font-bold tracking-tight">Project not found</h1>
        <p className="max-w-sm text-sm text-zinc-500">
          The case study you&apos;re looking for doesn&apos;t exist or may have
          moved.
        </p>
        <Button asChild>
          <Link href="/portfolio">Back to Portfolio</Link>
        </Button>
      </div>
    );
  }

  const images = getProjectImages(project).map((i) => i.url);
  const additionalLinks = project.additionalLinks ?? [];

  return (
    <motion.div
      className="min-h-screen bg-white text-zinc-900"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-10 pb-24 sm:px-8 sm:pt-16 sm:pb-35 lg:pb-40">
        <Link
          href="/portfolio"
          className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>

        <header className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white">
              {project.category}
            </span>
            <span className="text-sm text-zinc-500">{project.year}</span>
            <span className="font-mono text-xs text-zinc-400">
              / {String(project.sortOrder ?? 0).padStart(2, "0")}
            </span>
          </div>
          <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
            {project.title}
          </h1>
          <RichText data={project.excerpt as never} />
        </header>

        <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-900 ring-1 ring-zinc-900">
          <ProjectSlider
            images={images}
            alt={project.title}
            dotPosition="bottom-center"
            sizes="(max-width: 1024px) 100vw, 896px"
            imageClassName="object-cover grayscale contrast-[1.05]"
            onImageClick={(i) => setLightboxIndex(i)}
          />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="flex min-w-0 flex-col gap-12">
            <section className="grid gap-10">
              {project.sections?.map((section) => (
                <div key={section.id} className="space-y-3">
                  {section.overline && (
                    <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
                      {section.overline}
                    </h2>
                  )}
                  {section.title && (
                    <h3 className="text-xl font-semibold tracking-tight">
                      {section.title}
                    </h3>
                  )}
                  <RichText data={section.content as never} />
                </div>
              ))}
            </section>

            <section className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
                Features
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.features?.map((feature) => (
                  <li
                    key={feature.feature}
                    className="flex items-start gap-3 rounded-lg border border-zinc-200 p-4 text-sm leading-relaxed">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-zinc-900" />
                    {feature.feature}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="flex flex-col gap-8 rounded-2xl border border-zinc-200 bg-zinc-50/60 p-6 lg:sticky lg:top-8">
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
                Links
              </h2>
              <div className="flex flex-col gap-2">
                {project.liveUrl && (
                  <Button size="lg" className="w-full" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <ExternalLink />
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                      GitHub
                    </a>
                  </Button>
                )}
                {additionalLinks.length > 0 &&
                  additionalLinks.map((link) => (
                    <a
                      key={link.url ?? link.label ?? ""}
                      href={link.url ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm font-medium transition-colors hover:bg-zinc-100"
                    >
                      <span className="flex items-center gap-2">
                        <ExternalLink className="size-4 text-zinc-400" />
                        {link.label}
                      </span>
                      <ArrowUpRight className="size-4 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ))}
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tagObj) => (
                  <span
                    key={typeof tagObj === 'object' ? (tagObj as { id: string }).id : tagObj}
                    className="inline-flex items-center rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 transition-all duration-300 hover:scale-105 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white hover:shadow-lg hover:shadow-zinc-900/20"
                  >
                    {typeof tagObj === 'object' ? (tagObj as { name: string }).name : tagObj}
                  </span>
                ))}
              </div>
            </div>

            <Separator />

            <div className="flex flex-col gap-4 rounded-xl bg-zinc-900 p-5 text-white">
              <div className="space-y-1">
                <h3 className="font-bold tracking-tight">
                  Have a project like this?
                </h3>
                <p className="text-sm text-zinc-400">
                  Let&apos;s talk about building something together.
                </p>
              </div>
              <Button
                asChild
                className="w-full gap-1.5 bg-white text-zinc-900 hover:bg-zinc-200"
              >
                <Link href="/contact">
                  Contact me
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
          </aside>
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-6 border-t border-zinc-200 pt-8">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
          >
            Contact me
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </footer>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            alt={project.title}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectContent;
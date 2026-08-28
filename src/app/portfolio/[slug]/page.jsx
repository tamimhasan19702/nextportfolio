/** @format */
"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { getProjectBySlug } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CaseStudyPage = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

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

  return (
    <motion.div
      className="min-h-screen bg-white text-zinc-900"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="mx-auto flex max-w-4xl flex-col gap-12 px-4 py-10 sm:px-8 sm:py-16">
        {/* BACK */}
        <Link
          href="/portfolio"
          className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900">
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>

        {/* HERO */}
        <header className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white">
              {project.category}
            </span>
            <span className="text-sm text-zinc-500">{project.year}</span>
            <span className="font-mono text-xs text-zinc-400">
              / {String(project.id).padStart(2, "0")}
            </span>
          </div>
          <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
            {project.title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            {project.desc}
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button size="lg" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
                <ExternalLink />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub />
                GitHub
              </a>
            </Button>
          </div>
        </header>

        {/* COVER */}
        <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-900 ring-1 ring-zinc-900">
          <Image
            src={project.img}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover grayscale contrast-[1.05]"
          />
        </div>

        {/* OVERVIEW / CHALLENGE */}
        <section className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
              Overview
            </h2>
            <h3 className="text-xl font-semibold tracking-tight">
              What it does
            </h3>
            <p className="leading-relaxed text-zinc-600">{project.overview}</p>
          </div>
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
              The Challenge
            </h2>
            <h3 className="text-xl font-semibold tracking-tight">
              What I solved
            </h3>
            <p className="leading-relaxed text-zinc-600">{project.challenge}</p>
          </div>
        </section>

        {/* FEATURES */}
        <section className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
            Features
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-lg border border-zinc-200 p-4 text-sm leading-relaxed">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-zinc-900" />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* STACK */}
        <section className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="rounded-full px-3 py-1 text-xs font-semibold">
                {tag}
              </Badge>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="flex flex-wrap items-center justify-between gap-6 border-t border-zinc-200 pt-8">
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
                <ArrowUpRight />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub />
                GitHub
              </a>
            </Button>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900">
            All Projects
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </footer>
      </div>
    </motion.div>
  );
};

export default CaseStudyPage;
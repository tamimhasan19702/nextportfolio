/** @format */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type {
  HeroButton,
  HeroDescription,
  HomeContentProps,
  ProgressButtonProps,
} from "./interface";

const fallbackDescription = {
  root: {
    type: "root",
    format: "",
    indent: 0,
    version: 1,
    direction: "ltr",
    children: [
      {
        type: "paragraph",
        version: 1,
        children: [
          {
            type: "text",
            version: 1,
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "Welcome to my digital canvas, where innovation and creativity converge. With a keen eye for aesthetics and a mastery of code, my portfolio showcases a diverse collection of projects that reflect my commitment to excellence.",
          },
        ],
      },
    ],
  },
};

export const fallbackHero: Partial<
  NonNullable<import("@/payload-types").Home["hero"]>
> = {
  image: null,
  title: "Crafting Digital Experiences, Designing Tomorrow",
  description: fallbackDescription as unknown as NonNullable<
    import("@/payload-types").Home["hero"]
  >["description"],
  buttons: [
    {
      label: "Download CV",
      variant: "primary",
      linkType: "external",
      externalUrl: "/cv.pdf",
    },
    {
      label: "View My Work",
      variant: "outline",
      linkType: "internal",
      internalLink: "/portfolio",
    },
  ],
};

const clamp = (v: number, min = 0, max = 100) => Math.min(max, Math.max(min, v || 0));

const ProgressButton = ({ btn }: ProgressButtonProps) => {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [filling, setFilling] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const target = clamp(btn.progressValue || 0, 0, 100);

  useEffect(() => {
    return () => clearInterval(timer.current || undefined);
  }, []);

  const doAction = () => {
    if (btn.linkType === "internal" && btn.internalLink) {
      router.push(btn.internalLink);
    } else {
      const url = btn.externalUrl || "#";
      const a = document.createElement("a");
      a.href = url;
      if (url.includes("/cv") || /\.(pdf|zip|docx)$/i.test(url)) {
        a.download = "";
      }
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.click();
    }
  };

  const handleClick = () => {
    if (filling) return;
    if (!btn.showProgress) {
      doAction();
      return;
    }
    setProgress(0);
    setFilling(true);
    const targetValue = target || 100;
    const duration = 1400;
    const start = Date.now();
    timer.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const next = clamp(Math.round((elapsed / duration) * targetValue));
      setProgress(next);
      if (elapsed >= duration) {
        clearInterval(timer.current || undefined);
        setFilling(false);
        doAction();
      }
    }, 30);
  };

  const cls =
    "relative overflow-hidden p-3 sm:p-4 rounded-lg ring-2 font-bold text-sm sm:text-base transition-all duration-500 cursor-pointer " +
    (btn.variant === "primary"
      ? "ring-black bg-black text-white hover:bg-white hover:text-black"
      : "ring-black text-black hover:bg-black hover:text-white");

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={filling}
      className={cls}>
      {filling && (
        <span
          className="absolute inset-y-0 left-0 bg-zinc-400"
          style={{ width: `${progress}%` }}
        />
      )}
      <span className="relative z-10">
        {filling ? `${btn.progressLabel || "Loading"} ${progress}%` : btn.label}
      </span>
    </button>
  );
};

const HomeContent = ({ hero = fallbackHero }: HomeContentProps) => {
  const heroData = { ...fallbackHero, ...hero };
  const imageUrl = (heroData.image as { url?: string } | null)?.url || "/tamim.jpg";
  const buttons = (heroData.buttons as HeroButton[] | undefined)?.filter((b) => b.label) ?? [];

  return (
    <motion.div
      className="min-h-[calc(100vh-6rem)]"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="flex flex-col gap-8 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 pb-24 sm:pb-35 lg:pb-40 lg:min-h-[calc(100vh-6rem)]">
        <div className="relative h-[40vh] lg:h-auto lg:w-1/2">
          <Image
            src={imageUrl}
            alt="Hero"
            fill
            priority
            className="object-contain"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col gap-6 md:gap-8 items-center justify-center py-10 lg:py-2">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center">
            {heroData.title}
          </h1>
          <div className="text-sm sm:text-base md:text-xl text-center">
            {heroData.description ? (
              <RichText data={heroData.description as never} />
            ) : (
              <RichText data={fallbackDescription as never} />
            )}
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {buttons.map((btn, i) => (
              <ProgressButton key={i} btn={btn} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeContent;

/** @format */

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ProjectSliderProps } from "./interface";

const DRAG_THRESHOLD = 32;

const ProjectSlider = ({
  images,
  alt,
  className,
  imageClassName = "object-cover",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  dotPosition = "bottom-center",
  interval = 3500,
  onImageClick,
}: ProjectSliderProps) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const drag = useRef({ startX: 0, moved: false, active: false });
  const suppressClick = useRef(false);
  const hovered = useRef(false);

  const advance = (next: number) => setIndex(((next % images.length) + images.length) % images.length);

  useEffect(() => {
    if (images.length <= 1 || paused) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images.length, paused, interval]);

  const stopDragging = (clientX: number) => {
    if (!drag.current.active) return;
    const dx = drag.current.startX - clientX;
    if (drag.current.moved && Math.abs(dx) > DRAG_THRESHOLD) {
      suppressClick.current = true;
      advance(index + (dx > 0 ? 1 : -1));
    }
    drag.current.active = false;
    drag.current.moved = false;
    setPaused(hovered.current);
  };

  return (
    <div
      className={cn(
        "relative h-full w-full touch-pan-y select-none overflow-hidden",
        onImageClick && "cursor-zoom-in",
        className
      )}
      onClick={(e) => {
        if (suppressClick.current) {
          e.preventDefault();
          e.stopPropagation();
          suppressClick.current = false;
          return;
        }
        onImageClick?.(index);
      }}
      onMouseEnter={() => {
        hovered.current = true;
        setPaused(true);
      }}
      onMouseLeave={() => {
        hovered.current = false;
        setPaused(false);
      }}
      onPointerDown={(e) => {
        drag.current = { startX: e.clientX, moved: false, active: true };
        e.currentTarget.setPointerCapture(e.pointerId);
        setPaused(true);
      }}
      onPointerMove={(e) => {
        if (!drag.current.active) return;
        if (Math.abs(e.clientX - drag.current.startX) > 4) {
          drag.current.moved = true;
          e.preventDefault();
        }
      }}
      onPointerUp={(e) => stopDragging(e.clientX)}
      onPointerCancel={(e) => {
        drag.current.active = false;
        setPaused(hovered.current);
      }}
      role="group"
      aria-label={`${alt} gallery`}>
      {images.map((src, i) => (
        <motion.div
          key={src}
          className="pointer-events-none absolute inset-0"
          style={{ opacity: i === index ? 1 : 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          aria-hidden={i !== index}>
          <Image
            src={src}
            alt={i === index ? alt : ""}
            fill
            sizes={sizes}
            className={imageClassName}
          />
        </motion.div>
      ))}

      {images.length > 1 && (
        <div
          className={cn(
            "absolute z-10 flex gap-1.5",
            dotPosition === "top-center" &&
              "top-4 left-1/2 -translate-x-1/2",
            dotPosition === "bottom-center" &&
              "bottom-3 left-1/2 -translate-x-1/2"
          )}>
          {images.map((_, i) => (
            <button
              key={`dot-${i}`}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIndex(i);
              }}
              className={cn(
                "h-1.5 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.5)] transition-all duration-300",
                i === index
                  ? "w-4 bg-white"
                  : "w-1.5 bg-white/50 hover:bg-white/80"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectSlider;
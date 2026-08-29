/** @format */

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ProjectSlider = ({
  images,
  alt,
  className,
  imageClassName = "object-cover",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  dotPosition = "bottom-center",
  interval = 3500,
  onImageClick,
}) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || paused) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images.length, paused, interval]);

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden",
        onImageClick && "cursor-zoom-in",
        className
      )}
      onClick={() => onImageClick?.(index)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="group"
      aria-label={`${alt} gallery`}>
      {images.map((src, i) => (
        <motion.div
          key={src}
          className="absolute inset-0"
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
              key={i}
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
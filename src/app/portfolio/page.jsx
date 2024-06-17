/** @format */
"use client";
import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { items } from "@/components/portfolios";
import Image from "next/image";
import Link from "next/link";
const PortfolioPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-[600vh]" ref={containerRef}>
        <div className="w-screen h-[calc(100vh-6rem)] items-center flex justify-center text-8xl text-center">
          {" "}
          My Works{" "}
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center">
          <div className="flex">
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}>
                <div className="flex flex-col gap-8 text-white">
                  <h1>{item.title}</h1>
                  <div className="relative">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={500}
                      height={500}
                    />
                  </div>
                  <p>{item.desc}</p>
                  <Link href={item.link}>
                    <button>See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;

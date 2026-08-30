/** @format */
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { LogoProps } from "./interface";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Logo = ({ url, sequences }: LogoProps) => {
  const [display, setDisplay] = useState("");
  const seqRef = useRef(sequences);

  useEffect(() => {
    const currentSeqs = seqRef.current;
    let cancelled = false;

    const write = async (str: string, t = "") => {
      for (const ch of str) {
        if (cancelled) return t;
        t += ch;
        setDisplay(t);
        await delay(150);
      }
      return t;
    };

    const erase = async (t: string) => {
      for (let i = 0; i < t.length; i++) {
        if (cancelled) return "";
        t = t.slice(0, -1);
        setDisplay(t);
        await delay(150);
      }
      return "";
    };

    const play = async () => {
      let t = "";
      setDisplay(t);
      for (const seq of currentSeqs) {
        if (cancelled) return;
        t = await write(seq, t);
        if (cancelled) return;
        await delay(750);
        t = await erase(t);
        if (cancelled) return;
        await delay(300);
      }
      if (!cancelled) {
        setTimeout(play, 1200);
      }
    };

    play();
    return () => {
      cancelled = true;
    };
  }, [seqRef]);

  return (
    <Link
      href={url}
      className="flex items-center text-lg sm:text-xl font-bold text-zinc-900 whitespace-nowrap transition-opacity duration-300 hover:opacity-70 select-none">
      <span>{display}</span>
      <span
        aria-hidden
        className="inline-block ml-1 h-[1em] w-[0.55em] bg-zinc-900 animate-pulse"
      />
    </Link>
  );
};

export default Logo;

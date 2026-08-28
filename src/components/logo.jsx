/** @format */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Logo = ({ url }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    let cancelled = false;

    const play = async () => {
      let t = "";
      setText(t);

      const write = async (str) => {
        for (const ch of str) {
          if (cancelled) return;
          t += ch;
          setText(t);
          await delay(150);
        }
      };

      const erase = async (n) => {
        for (let i = 0; i < n; i++) {
          if (cancelled) return;
          t = t.slice(0, -1);
          setText(t);
          await delay(150);
        }
      };

      await write("{{}}");
      await delay(500);
      await erase(2);
      await delay(300);
      await write("TAREQ MONOW");
      await delay(750);
      await erase(1);
      await delay(750);
      await write("WER}}");
      await delay(1500);
      if (!cancelled) play();
    };

    play();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Link
      href={url}
      className="flex items-center text-lg sm:text-xl font-bold text-zinc-900 whitespace-nowrap transition-opacity duration-300 hover:opacity-70 select-none">
      <span>{text}</span>
      <span
        aria-hidden
        className="inline-block ml-1 h-[1em] w-[0.55em] bg-zinc-900 animate-pulse"
      />
    </Link>
  );
};

export default Logo;
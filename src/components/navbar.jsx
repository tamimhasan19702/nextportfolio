/** @format */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Briefcase, Home, Mail, MoreHorizontal, User } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import Logo from "./logo";

const tabs = [
  { url: "/", label: "Home", Icon: Home },
  { url: "/portfolio", label: "Portfolio", Icon: Briefcase },
  { url: "/about", label: "About", Icon: User },
  { url: "/contact", label: "Contact", Icon: Mail },
];

const socials = [
  {
    href: "https://github.com/tamimhasan19702",
    Icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/tareq-monower-tamim/",
    Icon: IoLogoLinkedin,
    label: "LinkedIn",
  },
  { href: "mailto:tareqmonower21@gmail.com", Icon: SiGmail, label: "Email" },
];

const Navbar = () => {
  const pathName = usePathname();
  const [socialsOpen, setSocialsOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <div className="relative h-full flex items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Mobile: centered logo */}
        <div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Logo url={"/"} />
        </div>
        {/* Desktop: logo left */}
        <div className="hidden md:flex items-center">
          <Logo url={"/"} />
        </div>
        {/* Desktop: socials right */}
        <div className="hidden md:flex items-center gap-2 ml-auto">
          {socials.map(({ href, Icon, label }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="p-2 rounded-md transition-all duration-300 hover:bg-black hover:text-white">
              <Icon size={20} />
            </Link>
          ))}
        </div>
      </div>

      {/* Floating bottom tray */}
      <nav className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 sm:gap-2 rounded-full border border-zinc-200 bg-white/85 backdrop-blur p-2 sm:p-2.5 shadow-lg max-w-[calc(100vw-2rem)]">
        {tabs.map(({ url, label, Icon }) => {
          const active =
            pathName === url ||
            (url === "/portfolio" && pathName.startsWith("/portfolio"));
          return (
            <Link
              key={url}
              href={url}
              title={label}
              className={`flex items-center gap-2 rounded-full p-2 sm:px-4 sm:py-2 transition-all duration-300 ${
                active
                  ? "bg-black text-white"
                  : "text-zinc-600 hover:bg-zinc-100 hover:text-black"
              }`}>
              <Icon size={18} strokeWidth={active ? 2.5 : 2} />
              <span className="hidden sm:inline text-sm font-bold whitespace-nowrap">
                {label}
              </span>
            </Link>
          );
        })}

        {/* Socials (mobile only) */}
        <div className="md:hidden flex items-center">
          <span className="mx-1 h-6 w-px bg-zinc-200" />
          <div className="relative">
          <AnimatePresence>
            {socialsOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -12, height: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 flex flex-col items-center gap-2 rounded-2xl border border-zinc-200 bg-white p-2.5 shadow-lg">
                {socials.map(({ href, Icon, label }, i) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ delay: i * 0.06 }}
                    className="w-full">
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={label}
                      onClick={() => setSocialsOpen(false)}
                      className="flex items-center justify-center p-2 w-10 h-10 rounded-full text-zinc-600 transition-all duration-300 hover:bg-zinc-100 hover:text-black">
                      <Icon size={18} />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            aria-label="More links"
            aria-expanded={socialsOpen}
            onClick={() => setSocialsOpen((prev) => !prev)}
            className={`p-2 rounded-full transition-all duration-300 ${
              socialsOpen
                ? "bg-black text-white"
                : "text-zinc-600 hover:bg-zinc-100 hover:text-black"
            }`}>
            <MoreHorizontal size={18} />
          </button>
        </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
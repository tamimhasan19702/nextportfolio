/** @format */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

import { Briefcase, Home, Mail, MoreHorizontal, User } from "lucide-react";
import Logo from "../logo";
import { ICON_MAP } from "../iconOptions";
import type { NavbarProps, NavTab } from "./interface";

const tabs: NavTab[] = [
  { url: "/", label: "Home", Icon: Home },
  { url: "/portfolio", label: "Portfolio", Icon: Briefcase },
  { url: "/about", label: "About", Icon: User },
  { url: "/contact", label: "Contact", Icon: Mail },
];

const Navbar = ({ navbar }: NavbarProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  const logoText = navbar?.logoText || "";
  const sequences =
    navbar?.logoSequences?.map((s) => s.label).filter(Boolean) || [
      "{{}}",
      logoText,
      "{{TAREQ MONOWER}}",
    ];
  const links = navbar?.links?.filter((l) => l.url && l.label) ?? [];

  return (
    <>
      {/* Header */}
      <div className="relative h-full flex items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Mobile: centered logo */}
        <div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Logo url={"/"} sequences={sequences} />
        </div>
        {/* Desktop: logo left */}
        <div className="hidden md:flex items-center">
          <Logo url={"/"} sequences={sequences} />
        </div>
        {/* Desktop: links right */}
        <div className="hidden md:flex items-center gap-2 ml-auto">
          {links.map((link, i) => {
            const Icon = ICON_MAP[link.icon];
            return (
              <Link
                key={i}
                href={link.url}
                target={link.target === "new" ? "_blank" : undefined}
                rel={link.target === "new" ? "noopener noreferrer" : undefined}
                title={link.label}
                className="p-2 rounded-md transition-all duration-300 hover:bg-black hover:text-white">
                {Icon ? <Icon size={20} /> : null}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Floating bottom tray */}
      <nav className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 sm:gap-2 rounded-full border border-zinc-200 bg-white/85 backdrop-blur p-1 sm:p-1.5 shadow-lg max-w-[calc(100vw-2rem)]">
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

        {/* More links drawer toggle (mobile only) */}
        <div className="md:hidden flex items-center">
          <span className="mx-1 h-6 w-px bg-zinc-200" />
          <div className="relative">
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -12, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -12, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 flex flex-col items-center gap-2 rounded-2xl border border-zinc-200 bg-white p-2.5 shadow-lg">
                  {links.map((link, i) => {
                    const Icon = ICON_MAP[link.icon];
                    const isHash = link.url.startsWith("#");
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ delay: i * 0.06 }}
                        className="w-full">
                        {isHash ? (
                          <motion.button
                            type="button"
                            onClick={() => {
                              setOpen(false);
                              document
                                .getElementById(link.url.slice(1))
                                ?.scrollIntoView({
                                  behavior: "smooth",
                                });
                            }}
                            title={link.label}
                            className="flex items-center justify-center p-2 w-10 h-10 rounded-full text-zinc-600 transition-all duration-300 hover:bg-zinc-100 hover:text-black">
                            {Icon ? <Icon size={18} /> : null}
                          </motion.button>
                        ) : link.target === "new" ? (
                          <Link
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={link.label}
                            className="flex items-center justify-center p-2 w-10 h-10 rounded-full text-zinc-600 transition-all duration-300 hover:bg-zinc-100 hover:text-black">
                            {Icon ? <Icon size={18} /> : null}
                          </Link>
                        ) : (
                          <motion.button
                            type="button"
                            onClick={() => {
                              setOpen(false);
                              router.push(link.url);
                            }}
                            title={link.label}
                            className="flex items-center justify-center p-2 w-10 h-10 rounded-full text-zinc-600 transition-all duration-300 hover:bg-zinc-100 hover:text-black">
                            {Icon ? <Icon size={18} /> : null}
                          </motion.button>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              aria-label="More links"
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
              className={`p-2 rounded-full transition-all duration-300 ${
                open
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

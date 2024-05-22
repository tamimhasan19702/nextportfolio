/** @format */
"use client"; // This directive marks the file as a Client Component

import Link from "next/link";
import { useState } from "react";

import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import NavLink from "./navLink";
import Logo from "./logo";
import { motion } from "framer-motion";

const links = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/portfolio",
    title: "Portfolio",
  },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  // framer motion variants
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,

      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,

      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Logo */}
      <Logo url={"/"} />

      <div>
        {/* Menu button */}
        <div className="md:hidden">
          <button
            className="w-10 h-8 flex flex-col justify-between z-40 relative"
            onClick={() => setOpen((prev) => !prev)}>
            <motion.div
              variants={topVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded origin-left"></motion.div>
            <motion.div
              variants={centerVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded"></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded origin-left"></motion.div>
          </button>
        </div>

        {/* Mobile Menu List */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 right-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-30">
            {links.map((link) => (
              <motion.div key={link.url} variants={listItemVariants}>
                <Link
                  href={link.url}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    activeLink === link.url
                      ? "bg-white text-black px-5 py-2"
                      : "text-white hover:bg-white hover:text-black hover:px-6 hover:py-2"
                  }`}
                  onClick={() => setActiveLink(link.url)}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
            <motion.div className="flex gap-6 mt-4" variants={listItemVariants}>
              <Link
                href="https://github.com/tamimhasan19702"
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub size={35} color="white" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/tareq-monower-tamim/"
                target="_blank"
                rel="noopener noreferrer">
                <IoLogoLinkedin size={35} color="white" />
              </Link>
              <Link
                href="mailto:tareqmonower21@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                <SiGmail size={35} />
              </Link>
            </motion.div>
          </motion.div>
        )}

        {/* Desktop Menu List */}
        <div className="hidden md:flex gap-6 items-center">
          <div className="hidden md:flex gap-8 items-center">
            {links.map((link) => {
              return (
                <NavLink key={link.url} url={link.url} title={link.title} />
              );
            })}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex gap-4">
            <Link
              href="https://github.com/tamimhasan19702"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub size={25} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/tareq-monower-tamim/"
              target="_blank"
              rel="noopener noreferrer">
              <IoLogoLinkedin size={25} />
            </Link>
            <Link
              href="mailto:tareqmonower21@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
              <SiGmail size={25} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

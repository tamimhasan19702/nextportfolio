/** @format */
"use client"; // This directive marks the file as a Client Component

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { SiGmail } from "react-icons/si";

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

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Logo */}
      <div className="relative">
        <Link
          href="/"
          className="relative text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center overflow-hidden group border-none">
          <span className="flex px-1 items-center justify-center w-15 h-5 relative z-20 text-white mr-1 bg-black rounded transition-all duration-500 group-hover:text-black group-hover:bg-white group-hover:px-2">
            Tareq
          </span>
          <span className="flex items-center justify-center px-2 relative z-20 bg-shadow w-15 h-5 rounded bg-white text-black transition-colors duration-500 group-hover:bg-black group-hover:text-white group-hover:px-1">
            Tamim
          </span>
          <span
            className="absolute inset-0 transition-transform duration-300 ease-in-out bg-white z-10 group-hover:translate-x-0"
            style={{ transform: "translateX(-100%)" }}></span>
        </Link>
      </div>
      <div>
        {/* Menu button */}
        <div className="md:hidden">
          <button
            className="w-8 h-5 flex flex-col justify-between z-50 relative"
            onClick={() => setOpen((prev) => !prev)}>
            <div
              className="w-full h-1 bg-white rounded"
              style={{ backgroundColor: !open ? "black" : "white" }}></div>
            <div
              className="w-full h-1 bg-white rounded"
              style={{ backgroundColor: !open ? "black" : "white" }}></div>
            <div
              className="w-full h-1 bg-white rounded"
              style={{ backgroundColor: !open ? "black" : "white" }}></div>
          </button>
        </div>

        {/* Mobile Menu List */}
        {open && (
          <div className="absolute top-0 right-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link
                href={link.url}
                key={link.url}
                className={`p-2 rounded-md transition-all duration-300 ${
                  activeLink === link.url
                    ? "bg-white text-black pt-1 pb-1 pr-3 pl-3"
                    : "hover:bg-white hover:text-black  hover:pt-1 hover:pb-1 hover:pr-3 hover:pl-3"
                }`}
                onClick={() => setActiveLink(link.url)}>
                {link.title}
              </Link>
            ))}
          </div>
        )}

        <div className="hidden md:flex gap-8 items-center">
          {/* Desktop Menu List */}
          <div className="hidden md:flex gap-8 items-center">
            {links.map((link) => (
              <Link
                href={link.url}
                key={link.url}
                className={`p-2 rounded-md transition-ease duration-500 ${
                  activeLink === link.url
                    ? "bg-black text-white pt-1 pb-1 pr-3 pl-3"
                    : "hover:bg-black hover:text-white hover:pt-1 hover:pb-1 hover:pr-3 hover:pl-3"
                }`}
                onClick={() => setActiveLink(link.url)}>
                {link.title}
              </Link>
            ))}
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

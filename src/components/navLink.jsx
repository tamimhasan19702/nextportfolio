/** @format */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavLink = ({ url, title }) => {
  const pathName = usePathname();

  return (
    <Link
      href={url}
      key={url}
      className={`px-4 py-2 rounded-md transition-ease duration-500 ${
        pathName === url
          ? "bg-black text-white "
          : "text-black hover:bg-black hover:text-white hover:px-6 hover:py-2"
      }`}>
      {title}
    </Link>
  );
};

export default NavLink;

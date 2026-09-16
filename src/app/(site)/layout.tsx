/** @format */

import TransitionProvider from "@/components/transitionProvider";
import { getNavbar } from "@/lib/payload-cache";
import type { Navbar as NavbarType } from "@/payload-types";
import type { ReactNode } from "react";

export default async function SiteLayout({ children }: { children: ReactNode }) {
  let navbar: NavbarType | null = null;
  try {
    navbar = (await getNavbar()) as NavbarType;
  } catch (err) {
    console.error("Failed to load navbar global from Payload", err);
  }

  return <TransitionProvider navbar={navbar}>{children}</TransitionProvider>;
}

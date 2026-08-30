/** @format */

import type { ReactNode } from "react";
import { getPayload } from "payload";
import config from "@payload-config";
import TransitionProvider from "@/components/transitionProvider";
import type { Navbar as NavbarType } from "@/payload-types";

export default async function SiteLayout({ children }: { children: ReactNode }) {
  let navbar: NavbarType | null = null;
  try {
    const payload = await getPayload({ config });
    navbar = (await payload.findGlobal({ slug: "navbar", depth: 1 })) as NavbarType;
  } catch (err) {
    console.error("Failed to load navbar global from Payload", err);
  }

  return <TransitionProvider navbar={navbar}>{children}</TransitionProvider>;
}

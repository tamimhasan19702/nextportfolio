/** @format */

import type { ReactNode } from "react";
import { Courier_Prime } from "next/font/google";
import { getPayload } from "payload";
import config from "@payload-config";
import "../globals.css";
import TransitionProvider from "@/components/transitionProvider";
import Navbar from "@/components/navbar";
import type { Navbar as NavbarType } from "@/payload-types";

const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier",
});

export const metadata = {
  title: "Tareq Monower",
  description: "Professional Web Developer",
};

export default async function SiteLayout({ children }: { children: ReactNode }) {
  let navbar: NavbarType | null = null;
  try {
    const payload = await getPayload({ config });
    navbar = (await payload.findGlobal({ slug: "navbar", depth: 1 })) as NavbarType;
  } catch (err) {
    console.error("Failed to load navbar global from Payload", err);
  }

  return (
    <html lang="en" className={courier.variable} suppressHydrationWarning>
      <body className="overflow-x-hidden" suppressHydrationWarning>
        <TransitionProvider navbar={navbar}>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}

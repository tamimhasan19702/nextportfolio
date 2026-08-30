import type { Navbar } from "@/payload-types";
import type { LucideIcon } from "lucide-react";

export interface NavbarProps {
  navbar?: Navbar | null;
}

export interface NavTab {
  url: string;
  label: string;
  Icon: LucideIcon;
}

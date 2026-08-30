import type { ReactNode } from "react";
import type { Navbar } from "@/payload-types";

export interface TransitionProviderProps {
  children: ReactNode;
  navbar?: Navbar | null;
}

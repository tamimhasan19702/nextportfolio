import type { ReactNode } from "react";
import type { Work } from "@/payload-types";

export interface ProjectContentProps {
  project?: (Work & { year?: string | number | null }) | null;
}

export interface LightboxProps {
  images: string[];
  alt: string;
  index: number;
  onClose: () => void;
}

export interface ImageItem {
  url: string;
  alt: string;
  children?: ReactNode;
}

import type { Work } from "@/payload-types";

export interface PortfolioSlugParams {
  slug: string;
}

export type WorkWithYear = Work & { year?: number | null };

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

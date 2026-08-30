import type { Portfolio, Work } from "@/payload-types";
import type { WorkWithYear } from "@/types";

export interface PortfolioContentProps {
  works?: WorkWithYear[];
  portfolioGlobal?: Portfolio;
  worksWithYear?: WorkWithYear[];
}

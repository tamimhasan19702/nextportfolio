import PortfolioContent from "@/components/PortfolioContent";
import { getPortfolioData } from "@/lib/payload-cache";
import type { Portfolio, Work } from "@/payload-types";
import type { WorkWithYear } from "@/types";

const PortfolioPage = async () => {
  const [worksResult, portfolioGlobal] = await getPortfolioData();

  const selectedWorks = portfolioGlobal?.selectedWorks || [];
  const allWorks = worksResult.docs;

  const displayWorks: Work[] =
    selectedWorks.length > 0
      ? selectedWorks
          .map((sel: string | Work) =>
            typeof sel === "string" ? undefined : allWorks.find((w) => w.id === sel.id),
          )
          .filter((w): w is Work => Boolean(w))
      : [];

  const worksWithYear: WorkWithYear[] = displayWorks.map((work) => ({
    ...work,
    year: work.Date ? new Date(work.Date).getUTCFullYear() : null,
  }));

  return (
    <PortfolioContent
      works={worksWithYear}
      portfolioGlobal={portfolioGlobal as Portfolio}
      worksWithYear={worksWithYear}
    />
  );
};

export default PortfolioPage;

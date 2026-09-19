import ProjectContent from "@/components/ProjectContent";
import { getPortfolioData, getProjectBySlug } from "@/lib/payload-cache";
import type { PortfolioSlugParams } from "@/types";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const [worksResult] = await getPortfolioData();

  return worksResult.docs.flatMap(({ slug }) => (slug ? [{ slug }] : []));
}

const ProjectPage = async ({ params }: { params: Promise<PortfolioSlugParams> }) => {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectWithYear = {
    ...project,
    year: project.Date ? new Date(project.Date).getUTCFullYear() : null,
  };

  return <ProjectContent project={projectWithYear} />;
};

export default ProjectPage;

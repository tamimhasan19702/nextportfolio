import ProjectContent from "@/components/ProjectContent";
import { getProjectBySlug } from "@/lib/payload-cache";
import type { PortfolioSlugParams } from "@/types";
import { notFound } from "next/navigation";

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

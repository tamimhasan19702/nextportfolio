import { getPayload } from 'payload'
import config from '@payload-config'
import ProjectContent from '@/components/ProjectContent'
import { notFound } from 'next/navigation'
import type { PortfolioSlugParams } from '@/types'

export const dynamic = 'force-dynamic'

const ProjectPage = async ({ params }: { params: Promise<PortfolioSlugParams> }) => {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'work',
    where: { slug: { equals: slug } },
    depth: 2,
    limit: 1,
  })

  const project = docs[0]

  if (!project) {
    notFound()
  }

  const projectWithYear = {
    ...project,
    year: project.Date ? new Date(project.Date).getUTCFullYear() : null,
  }

  return <ProjectContent project={projectWithYear} />
}

export default ProjectPage

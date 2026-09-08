import { getPayload } from 'payload'
import config from '@payload-config'
import PortfolioContent from '@/components/PortfolioContent'
import type { Portfolio } from '@/payload-types'
import type { WorkWithYear } from '@/types'

export const dynamic = 'force-dynamic'

const PortfolioPage = async () => {
  const payload = await getPayload({ config })

  const [worksResult, portfolioGlobal] = await Promise.all([
    payload.find({
      collection: 'work',
      sort: 'sortOrder',
      depth: 1,
      limit: 0,
      pagination: false,
    }),
    payload.findGlobal({ slug: 'portfolio', depth: 1 }),
  ])

  const worksWithYear: WorkWithYear[] = worksResult.docs.map(work => ({
    ...work,
    year: work.Date ? new Date(work.Date).getUTCFullYear() : null,
  }))

  return <PortfolioContent works={worksWithYear} portfolioGlobal={portfolioGlobal as Portfolio} worksWithYear={worksWithYear} />
}

export default PortfolioPage
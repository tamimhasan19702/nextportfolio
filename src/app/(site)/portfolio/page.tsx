import { getPayload } from 'payload'
import config from '@payload-config'
import PortfolioContent from '@/components/PortfolioContent'
import type { Portfolio, Work } from '@/payload-types'
import type { WorkWithYear } from '@/types'

export const dynamic = 'force-dynamic'

const PortfolioPage = async () => {
  const payload = await getPayload({ config })

  const [worksResult, portfolioGlobal] = await Promise.all([
    payload.find({
      collection: 'work',
      sort: 'sortOrder',
      depth: 1,
      limit: 12,
    }),
    payload.findGlobal({ slug: 'portfolio', depth: 1 }),
  ])

  const selectedWorks = portfolioGlobal?.selectedWorks || []
  const allWorks = worksResult.docs

  const displayWorks: Work[] = selectedWorks.length > 0
    ? selectedWorks
        .map((sel: string | Work) =>
          typeof sel === "string"
            ? undefined
            : allWorks.find((w) => w.id === sel.id)
        )
        .filter((w): w is Work => Boolean(w))
    : allWorks

  const worksWithYear: WorkWithYear[] = displayWorks.map(work => ({
    ...work,
    year: work.Date ? new Date(work.Date).getUTCFullYear() : null,
  }))

  return <PortfolioContent works={worksWithYear} portfolioGlobal={portfolioGlobal as Portfolio} worksWithYear={worksWithYear} />
}

export default PortfolioPage

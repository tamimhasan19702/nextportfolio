/** @format */

import { getPayload } from 'payload'
import config from '@payload-config'
import AboutContent from '@/components/aboutContent'
import type { About } from '@/payload-types'

export const dynamic = 'force-dynamic'

const AboutPage = async () => {
  const payload = await getPayload({ config })
  const about = await payload.findGlobal({ slug: 'about', depth: 1 })

  return <AboutContent about={about as About} />
}

export default AboutPage

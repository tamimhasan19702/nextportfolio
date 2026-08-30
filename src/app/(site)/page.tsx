import { getPayload } from 'payload'
import config from '@payload-config'

import HomeContent, { fallbackHero } from '@/components/homeContent'
import type { Hero } from '@/components/homeContent/interface'

export const dynamic = 'force-dynamic'

const HomePage = async () => {
  let hero: Partial<Hero> = fallbackHero

  try {
    const payload = await getPayload({ config })
    const data = await payload.findGlobal({ slug: 'home', depth: 1 })
    if (data?.hero) {
      hero = { ...fallbackHero, ...data.hero }
    }
  } catch (err) {
    console.error('Failed to load home global from Payload', err)
  }

  return <HomeContent hero={hero} />
}

export default HomePage

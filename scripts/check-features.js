import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })
const { docs } = await payload.find({ collection: 'work', depth: 0 })
console.log('Works count:', docs.length)
for (const w of docs) {
  console.log(`- ${w.title} (${w.slug}) features: ${w.features?.length || 0}`)
  if (w.features?.length) {
    console.log('  Features:', w.features.map(f => f.feature))
  }
}
process.exit(0)
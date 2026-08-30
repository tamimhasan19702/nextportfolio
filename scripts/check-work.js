import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })
const { docs } = await payload.find({ collection: 'work', depth: 0 })
console.log('Works:', docs.length)
docs.forEach(w => console.log('- ', w.title, w.slug, w.sortOrder, 'tags:', w.tags?.length, 'images:', w.images?.length))
process.exit(0)
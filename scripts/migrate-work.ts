import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

const LEGACY_FIELDS = ['desc', 'overview', 'challenge', 'year']

const migrated = []
let skipped = 0
let page = 1
let hasNext = true

while (hasNext) {
  const result = await payload.find({
    collection: 'work',
    depth: 0,
    limit: 100,
    page,
  })

  for (const doc of result.docs) {
    const row = doc as unknown as Record<string, unknown>
    if ('excerpt' in row && 'sections' in row) {
      skipped++
      continue
    }

    const update: Record<string, unknown> = {}

    if ('desc' in row && row.desc) {
      update.excerpt = row.desc
    }

    if ('overview' in row || 'challenge' in row) {
      update.sections = [
        {
          overline: 'Overview',
          title: 'What it does',
          content: row.overview ?? undefined,
        },
        {
          overline: 'The Challenge',
          title: 'What I solved',
          content: row.challenge ?? undefined,
        },
      ]
        .filter((s) => s.content)
        .map((s) => ({
          overline: s.overline,
          title: s.title,
          content: s.content as object,
        }))
    }

    if (!row.Date && typeof row.year === 'string') {
      const year = Number(row.year)
      if (Number.isFinite(year)) {
        update.Date = new Date(Date.UTC(year, 6, 1)).toISOString()
      }
    }

    if (Object.keys(update).length > 0) {
      await payload.update({ collection: 'work', id: doc.id, data: update })
      migrated.push(doc.slug ?? doc.id)
    } else {
      skipped++
    }
  }

  hasNext = result.hasNextPage
  page++
}

if (migrated.length > 0) {
  const model = (
    payload.db as unknown as {
      collections: Record<string, { updateMany: (f: object, u: object) => Promise<{ modifiedCount?: number }> }>
    }
  ).collections['work']
  const result = await model.updateMany(
    {},
    { $unset: Object.fromEntries(LEGACY_FIELDS.map((f) => [f, ''])) }
  )
  console.log(`Unset legacy fields on ${result.modifiedCount ?? 0} rows.`)
} else {
  console.log('No legacy rows to clean.')
}

console.log(`Done. Migrated: ${migrated.length}, skipped/up-to-date: ${skipped}`)
process.exit(0)
import config from '@payload-config'
import { getPayload } from 'payload'

export default async function PayloadTestPage() {
  const payload = await getPayload({ config })
  const { docs, totalDocs } = await payload.find({
    collection: 'users',
    limit: 5,
  })

  return (
    <main style={{ padding: 40, fontFamily: 'monospace' }}>
      <h1>Payload Local API test</h1>
      <p>Connected to MongoDB. Total users in DB: {totalDocs}</p>
      <ul>
        {docs.map((u) => (
          <li key={u.id}>
            {u.email} — roles: {String(u.roles)}
          </li>
        ))}
      </ul>
    </main>
  )
}
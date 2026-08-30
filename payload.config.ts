import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Media } from './src/collections/Media'
import { Users } from './src/collections/Users'
import { Work } from './src/collections/Work'
import { Education } from './src/collections/Education'
import { Certification } from './src/collections/Certification'
import { Experience } from './src/collections/Experience'
import { Hobbies } from './src/collections/Hobbies'
import { Home } from './src/globals/Home'
import { Navbar } from './src/globals/Navbar'
import { Portfolio } from './src/globals/Portfolio'
import { About } from './src/globals/About'
import { Contact } from './src/globals/Contact'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname, 'src'),
    },
  },
  collections: [Users, Media, Work, Education, Certification, Experience, Hobbies],
  globals: [Home, Navbar, Portfolio, About, Contact],
  plugins: [
    ...(process.env.S3_BUCKET
      ? [
          s3Storage({
            collections: {
              media: true,
            },
            bucket: process.env.S3_BUCKET,
            config: {
              endpoint: process.env.S3_ENDPOINT,
              region: process.env.S3_REGION || 'auto',
              forcePathStyle: true,
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
              },
            },
          }),
        ]
      : []),
  ],
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  onInit: async (payload) => {
    try {
      const doc = await payload.findGlobal({ slug: 'navbar', depth: 1 })
      if (!doc) {
        await (payload as unknown as {
          createGlobal: (args: {
            slug: string
            data: Record<string, unknown>
          }) => Promise<unknown>
        }).createGlobal({
          slug: 'navbar',
          data: {
            logoText: 'TAREQ MONOWER',
            logoSequences: [
              { label: '{{}}' },
              { label: 'TAREQ MONOWER' },
              { label: 'WER}}' },
            ],
            links: [],
          },
        })
      }
    } catch (err) {
      console.error('Navbar global seed', err)
    }
  },
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
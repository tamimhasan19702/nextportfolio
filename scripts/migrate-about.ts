import { getPayload } from 'payload'
import type { CollectionSlug } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

const monthOnly = (year: number, month = 6) => new Date(Date.UTC(year, month - 1, 1, 12)).toISOString()

const EDUCATION = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'North South University, Dhaka',
    startDate: monthOnly(2012),
    endDate: monthOnly(2016),
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Notre Dame College, Dhaka',
    startDate: monthOnly(2010),
    endDate: monthOnly(2012),
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Ideal School & College, Dhaka',
    startDate: monthOnly(2008),
    endDate: monthOnly(2010),
  },
]

const CERTIFICATIONS = [
  {
    name: 'AWS Certified Cloud Practitioner',
    institution: 'Amazon Web Services',
    certificateId: 'AWS-CCP-2023-7A2F9C',
    date: monthOnly(2023),
    link: 'https://aws.amazon.com/certification/',
  },
  {
    name: 'Meta Front-End Developer Professional Certificate',
    institution: 'Meta via Coursera',
    certificateId: 'META-FED-2022-4B8D1E',
    date: monthOnly(2022),
    link: 'https://www.coursera.org/professional-certificates/meta-front-end-developer',
  },
  {
    name: 'Full-Stack JavaScript Bootcamp',
    institution: 'freeCodeCamp',
    certificateId: 'FCC-FSJS-2021-9C3A05',
    date: monthOnly(2021),
    link: 'https://www.freecodecamp.org/certification/',
  },
]

const EXPERIENCES = [
  {
    designation: 'Senior React Developer',
    description: 'I provided web solutions, applying a range of technologies to address client requirements.',
    startDate: monthOnly(2010),
    endDate: monthOnly(2019),
    company: 'Apple',
  },
  {
    designation: 'Full Stack Engineer',
    description: 'Built and shipped scalable web applications end to end, from database design to pixel-perfect UI.',
    startDate: monthOnly(2019),
    endDate: monthOnly(2022),
    company: 'Google',
    companyLocation: 'Mountain View, CA',
  },
  {
    designation: 'Frontend Lead',
    description: 'Led a team of engineers, owned the design system, and drove performance and accessibility improvements.',
    startDate: monthOnly(2022),
    endDate: monthOnly(2024),
    company: 'Microsoft',
    companyLocation: 'Redmond, WA',
  },
]

const HOBBIES = [
  { icon: 'Plane', text: 'Travelling', description: 'Exploring new cities, cultures, and cuisines.' },
  { icon: 'Camera', text: 'Photography', description: 'Street and travel photography on weekends.' },
  { icon: 'Gamepad2', text: 'Gaming', description: 'Retro platforms and strategy games.' },
  { icon: 'Music', text: 'Music', description: 'Curating playlists and learning the guitar.' },
]

const SKILLS = [
  'JavaScript',
  'ReactJS',
  'ReactNative',
  'NextJS',
  'Node/Express',
  'MongoDB',
  'MySql',
  'PHP',
  'WordPress',
  'Tailwind CSS',
  'SCSS',
  'Firebase',
  'Redux',
  'Framer Motion',
  'Rest API',
  'HTML',
  'CSS',
]

const hasAnyDocs = async (collection: CollectionSlug) => {
  const res = await payload.find({ collection, depth: 0, limit: 1 })
  return res.docs.length > 0
}

const seedCollection = async (collection: CollectionSlug, rows: Record<string, unknown>[]) => {
  if (await hasAnyDocs(collection)) {
    console.log(`Skipping ${collection} - already has data`)
    return []
  }
  const ids: string[] = []
  for (const row of rows) {
    const created = await payload.create({ collection, data: row })
    ids.push(created.id)
  }
  console.log(`Created ${ids.length} ${collection} docs`)
  return ids
}

const seedExperiences = async () => {
  const ids: string[] = []
  for (const row of EXPERIENCES) {
    const existing = await payload.find({
      collection: 'experience',
      where: { designation: { equals: row.designation } },
      depth: 0,
      limit: 1,
    })
    if (existing.docs.length > 0) {
      console.log(`Skipping experience ${row.designation} - already exists`)
      ids.push(existing.docs[0].id)
      continue
    }
    const created = await payload.create({ collection: 'experience', data: row })
    ids.push(created.id)
  }
  console.log(`Experiences: ${ids.length} total`)
  return ids
}

const educationIds = await seedCollection('education', EDUCATION)
const certificationIds = await seedCollection('certification', CERTIFICATIONS)
const experienceIds = await seedExperiences()
const hobbyIds = await seedCollection('hobbies', HOBBIES)

const about = await payload.findGlobal({ slug: 'about', depth: 0 })

const update: Record<string, unknown> = {
  overline: about?.overline || 'About',
  title: about?.title || 'Tareq Monower',
  skills: SKILLS.map((skill) => ({ skill })),
  experiences: experienceIds,
}

if (educationIds.length) update.education = educationIds
if (certificationIds.length) update.certifications = certificationIds
if (hobbyIds.length) update.hobbies = hobbyIds

await payload.updateGlobal({
  slug: 'about',
  data: update,
})
console.log('About global updated (overline, title, skills, relationships)')

process.exit(0)

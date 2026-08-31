import { getPayload } from 'payload'
import config from '@payload-config'
import fs from 'node:fs'
import path from 'node:path'

const payload = await getPayload({ config })

type SeedProject = {
  slug: string
  title: string
  category: string
  year: string
  images: string[]
  tags: string[]
  excerpt: unknown[]
  sections: { overline: string; title: string; content: unknown[] }[]
  features: { feature: string }[]
  liveUrl: string
  githubUrl: string
  additionalLinks: { label: string; url: string }[]
}

type SeedTag = { name: string; slug: string }

const toLexical = (children: unknown[]): any => ({
  root: {
    type: 'root',
    version: 1,
    format: '',
    indent: 0,
    direction: 'ltr',
    children,
  },
})

const allTags: SeedTag[] = [
  { name: 'React', slug: 'react' },
  { name: 'Redux', slug: 'redux' },
  { name: 'Tailwind CSS', slug: 'tailwind-css' },
  { name: 'Stripe', slug: 'stripe' },
  { name: 'Next.js', slug: 'nextjs' },
  { name: 'MDX', slug: 'mdx' },
  { name: 'Vercel', slug: 'vercel' },
  { name: 'JavaScript', slug: 'javascript' },
  { name: 'HTML', slug: 'html' },
  { name: 'CSS', slug: 'css' },
  { name: 'IndexedDB', slug: 'indexeddb' },
  { name: 'Web Audio API', slug: 'web-audio-api' },
  { name: 'Node.js', slug: 'nodejs' },
  { name: 'MongoDB', slug: 'mongodb' },
  { name: 'Socket.io', slug: 'socketio' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'DnD', slug: 'dnd' },
  { name: 'LocalStorage', slug: 'localstorage' },
]

const projects: SeedProject[] = [
  {
    slug: 'react-commerce',
    title: 'React Commerce',
    category: 'E-Commerce',
    year: '2024',
    images: ['react-commerce.svg', 'taskflow.svg', 'medium-blog.svg'],
    tags: ['React', 'Redux', 'Tailwind CSS', 'Stripe'],
    excerpt: [
      { type: 'paragraph', children: [{ type: 'text', text: 'A complete storefront with product catalogs, a cart, and a seamless checkout flow.' }] },
    ],
    sections: [
      { overline: 'Overview', title: 'What it does', content: [{ type: 'paragraph', children: [{ type: 'text', text: 'React Commerce is a full-featured e-commerce platform built to give merchants a lightning-fast storefront out of the box. It combines a fluid product catalog, persistent cart state, and a fully integrated checkout so customers can move from browsing to purchase without friction.' }] }] },
      { overline: 'The Challenge', title: 'What I solved', content: [{ type: 'paragraph', children: [{ type: 'text', text: 'The biggest challenge was keeping the cart and UI in perfect sync across dozens of product interactions while preserving snappy, optimistic updates. Performance on low-end devices was also a priority, so every image and route was tuned for lazy loading and code-splitting.' }] }] },
    ],
    features: [
      'Product catalog with filtering and search',
      'Persistent shopping cart powered by Redux',
      'Stripe checkout with order confirmation',
      'Responsive, mobile-first storefront UI',
      'Product quick-view and wishlist support',
    ].map((feature) => ({ feature })),
    liveUrl: '#',
    githubUrl: 'https://github.com/tamimhasan19702',
    additionalLinks: [{ label: 'Design File', url: 'https://www.figma.com' }],
  },
  {
    slug: 'nextjs-medium-blog',
    title: 'Next.js Medium Blog',
    category: 'Content Platform',
    year: '2024',
    images: ['medium-blog.svg'],
    tags: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    excerpt: [
      { type: 'paragraph', children: [{ type: 'text', text: 'A blazing-fast, SEO-friendly blog built with Next.js App Router and MDX.' }] },
    ],
    sections: [
      { overline: 'Overview', title: 'What it does', content: [{ type: 'paragraph', children: [{ type: 'text', text: "This is a modern publishing platform for long-form content. Built on the Next.js App Router, it delivers server-rendered articles with on-the-fly MDX compilation, automatic sitemaps, and a buttery reading experience from anywhere in the world." }] }] },
      { overline: 'The Challenge', title: 'What I solved', content: [{ type: 'paragraph', children: [{ type: 'text', text: "Authors wanted to write in Markdown without losing visual control. I built a custom MDX pipeline with a component collection that makes every article feel designed, and added edge caching so posts load instantly while staying simple to deploy." }] }] },
    ],
    features: [
      'MDX authoring with reusable content components',
      'Static generation with incremental revalidation',
      'SEO metadata, OpenGraph, and sitemap generators',
      'Reading-progress bar and search',
      'Tag-based discovery and related posts',
    ].map((feature) => ({ feature })),
    liveUrl: '#',
    githubUrl: 'https://github.com/tamimhasan19702',
    additionalLinks: [],
  },
  {
    slug: 'vanilla-book-app',
    title: 'Vanilla Book App',
    category: 'Utilities',
    year: '2023',
    images: ['book-app.svg'],
    tags: ['JavaScript', 'HTML', 'CSS', 'IndexedDB'],
    excerpt: [
      { type: 'paragraph', children: [{ type: 'text', text: 'A dependency-free personal library that organizes books entirely in the browser.' }] },
    ],
    sections: [
      { overline: 'Overview', title: 'What it does', content: [{ type: 'paragraph', children: [{ type: 'text', text: 'Vanilla Book App is a no-framework personal library manager. Books are stored locally with IndexedDB, so the app works fully offline and your collection never leaves your device. It proves that modern vanilla JavaScript still gets the job done.' }] }] },
      { overline: 'The Challenge', title: 'What I solved', content: [{ type: 'paragraph', children: [{ type: 'text', text: 'Without a framework, the entire rendering and state layer had to be hand-rolled and kept tiny. I wrote a small reactive render loop and made sure every interaction - search, sort, reading progress - felt as smooth as a framework app.' }] }] },
    ],
    features: [
      'Local-first storage with IndexedDB',
      'Offline support with a service worker',
      'Search, filter, and sort across your library',
      'Reading-progress and ratings tracking',
    ].map((feature) => ({ feature })),
    liveUrl: '#',
    githubUrl: 'https://github.com/tamimhasan19702',
    additionalLinks: [],
  },
  {
    slug: 'spotify-music-app',
    title: 'Spotify Music App',
    category: 'Media Player',
    year: '2023',
    images: ['spotify-app.svg'],
    tags: ['React', 'Web Audio API', 'CSS'],
    excerpt: [
      { type: 'paragraph', children: [{ type: 'text', text: 'A rich audio player with visualizations inspired by modern streaming apps.' }] },
    ],
    sections: [
      { overline: 'Overview', title: 'What it does', content: [{ type: 'paragraph', children: [{ type: 'text', text: 'A mood-driven music player that supports local playlists, gapless playback, and real-time audio visualizations rendered with the Web Audio API. The interface mirrors the polish of mainstream streaming apps while staying fully client-side.' }] }] },
      { overline: 'The Challenge', title: 'What I solved', content: [{ type: 'paragraph', children: [{ type: 'text', text: 'Rendering smooth, requestAnimationFrame-driven visualizations without draining battery required careful throttling. I also built a queue system so tracks, albums, and playlists mix seamlessly without interrupting playback.' }] }] },
    ],
    features: [
      'Real-time audio waveform visualizations',
      'Playlist and queue management',
      'Keyboard-driven controls and seekable progress',
      'Responsive player UI with smooth transitions',
    ].map((feature) => ({ feature })),
    liveUrl: '#',
    githubUrl: 'https://github.com/tamimhasan19702',
    additionalLinks: [],
  },
  {
    slug: 'easebook-social',
    title: 'Easebook Social',
    category: 'Social Platform',
    year: '2022',
    images: ['easebook.svg', 'spotify-app.svg'],
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io'],
    excerpt: [
      { type: 'paragraph', children: [{ type: 'text', text: 'A real-time social network with profiles, posts, reactions, and live chat.' }] },
    ],
    sections: [
      { overline: 'Overview', title: 'What it does', content: [{ type: 'paragraph', children: [{ type: 'text', text: 'Easebook is a real-time social platform where people create profiles, share posts, react, and message each other. Notifications stream in live over WebSockets so the feed always feels alive, whether users are at their desk or on the go.' }] }] },
      { overline: 'The Challenge', title: 'What I solved', content: [{ type: 'paragraph', children: [{ type: 'text', text: 'Building live interactions at scale meant architecting a WebSocket layer that syncs with MongoDB change streams. I designed the data model so feeds paginate cleanly and chats stay consistent across reconnect storms.' }] }] },
    ],
    features: [
      'Real-time posting, reactions, and notifications',
      'Direct messaging with Socket.io',
      'Profiles with avatars and cover photos',
      'Infinite-scroll activity feed',
    ].map((feature) => ({ feature })),
    liveUrl: '#',
    githubUrl: 'https://github.com/tamimhasan19702',
    additionalLinks: [],
  },
  {
    slug: 'taskflow-kanban',
    title: 'TaskFlow Kanban',
    category: 'Productivity',
    year: '2022',
    images: ['taskflow.svg'],
    tags: ['React', 'TypeScript', 'DnD', 'LocalStorage'],
    excerpt: [
      { type: 'paragraph', children: [{ type: 'text', text: 'A drag-and-drop kanban board that keeps projects moving with zero setup.' }] },
    ],
    sections: [
      { overline: 'Overview', title: 'What it does', content: [{ type: 'paragraph', children: [{ type: 'text', text: 'TaskFlow is a lightweight kanban board for teams and individuals who want to organize work without heavy ceremony. Boards, lists, and cards drag and drop instantly, and everything persists locally so it works from the first click.' }] }] },
      { overline: 'The Challenge', title: 'What I solved', content: [{ type: 'paragraph', children: [{ type: 'text', text: 'The drag-and-drop interactions needed to feel pixel-perfect across touch and mouse. I tailored the drop animations and added optimistic persistence so a misplaced card never adds friction to the workflow.' }] }] },
    ],
    features: [
      'Drag-and-drop cards across columns',
      'Custom labels, due dates, and checklists',
      'Local persistence with auto-save',
      'Keyboard-friendly board navigation',
    ].map((feature) => ({ feature })),
    liveUrl: '#',
    githubUrl: 'https://github.com/tamimhasan19702',
    additionalLinks: [],
  },
]

const mediaCache = new Map<string, string>()

const getMediaId = async (filename: string): Promise<string> => {
  const cached = mediaCache.get(filename)
  if (cached) return cached

  const existing = await payload.find({
    collection: 'media',
    where: { alt: { equals: filename } },
    depth: 0,
    limit: 1,
  })
  if (existing.docs[0]) {
    mediaCache.set(filename, existing.docs[0].id)
    return existing.docs[0].id
  }

  const filePath = path.join(process.cwd(), 'public', 'projects', filename)
  const data = fs.readFileSync(filePath)
  const created = await payload.create({
    collection: 'media',
    data: { alt: filename },
    file: {
      data,
      mimetype: 'image/svg+xml',
      name: filename,
      size: data.length,
    },
  })
  mediaCache.set(filename, created.id)
  return created.id
}

console.log('Seeding tags collection...')
const tagIdMap = new Map<string, string>()
for (const t of allTags) {
  const existing = await payload.find({
    collection: 'tags',
    where: { slug: { equals: t.slug } },
    depth: 0,
    limit: 1,
  })
  if (existing.docs[0]) {
    tagIdMap.set(t.name, existing.docs[0].id)
    console.log(`Tag exists: ${t.name}`)
    continue
  }
  const created = await payload.create({
    collection: 'tags',
    data: { name: t.name, slug: t.slug },
  })
  tagIdMap.set(t.name, created.id)
  console.log(`Created tag: ${t.name}`)
}

console.log('Seeding work collection...')
for (let i = 0; i < projects.length; i++) {
  const p = projects[i]
  try {
    const existing = await payload.find({
      collection: 'work',
      where: { slug: { equals: p.slug } },
      depth: 0,
      limit: 1,
    })
    if (existing.docs.length > 0) {
      console.log(`Skipping ${p.title} - already exists`)
      continue
    }

    const imageIds: string[] = []
    for (const filename of p.images) {
      imageIds.push(await getMediaId(filename))
    }

    await payload.create({
      collection: 'work',
      data: {
        slug: p.slug,
        title: p.title,
        category: p.category,
        Date: new Date(Date.UTC(Number(p.year), 6, 1)).toISOString(),
        excerpt: toLexical(p.excerpt),
        sections: p.sections.map((s) => ({ ...s, content: toLexical(s.content) })),
        images: imageIds.map((image) => ({ image })),
        features: p.features,
        tags: p.tags.map((tag) => tagIdMap.get(tag)).filter(Boolean),
        liveUrl: p.liveUrl,
        githubUrl: p.githubUrl,
        additionalLinks: p.additionalLinks,
        sortOrder: i + 1,
      },
    })
    console.log(`Created: ${p.title}`)
  } catch (error) {
    console.error(`Error creating ${p.title}:`, error)
  }
}

console.log('Seeding complete!')
process.exit(0)
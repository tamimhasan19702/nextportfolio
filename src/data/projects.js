/** @format */

export const projects = [
  {
    id: 1,
    slug: "react-commerce",
    title: "React Commerce",
    category: "E-Commerce",
    year: "2024",
    color: "from-red-300 to-blue-300",
    images: [
      "/projects/react-commerce.svg",
      "/projects/taskflow.svg",
      "/projects/medium-blog.svg",
    ],
    span: "sm:col-span-2 lg:col-span-2 xl:col-span-2 xl:row-span-2",
    theme: "feature",
    tags: ["React", "Redux", "Tailwind CSS", "Stripe"],
    additionalLinks: [
      { label: "Design File", url: "https://www.figma.com" },
    ],
    desc: "A complete storefront with product catalogs, a cart, and a seamless checkout flow.",
    overview:
      "React Commerce is a full-featured e-commerce platform built to give merchants a lightning-fast storefront out of the box. It combines a fluid product catalog, persistent cart state, and a fully integrated checkout so customers can move from browsing to purchase without friction.",
    challenge:
      "The biggest challenge was keeping the cart and UI in perfect sync across dozens of product interactions while preserving snappy, optimistic updates. Performance on low-end devices was also a priority, so every image and route was tuned for lazy loading and code-splitting.",
    features: [
      "Product catalog with filtering and search",
      "Persistent shopping cart powered by Redux",
      "Stripe checkout with order confirmation",
      "Responsive, mobile-first storefront UI",
      "Product quick-view and wishlist support",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/tamimhasan19702",
  },
  {
    id: 2,
    slug: "nextjs-medium-blog",
    title: "Next.js Medium Blog",
    category: "Content Platform",
    year: "2024",
    color: "from-blue-300 to-violet-300",
    images: ["/projects/medium-blog.svg"],
    span: "sm:col-span-2 lg:col-span-2 xl:col-span-2",
    theme: "wide",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    desc: "A blazing-fast, SEO-friendly blog built with Next.js App Router and MDX.",
    overview:
      "This is a modern publishing platform for long-form content. Built on the Next.js App Router, it delivers server-rendered articles with on-the-fly MDX compilation, automatic sitemaps, and a buttery reading experience from anywhere in the world.",
    challenge:
      "Authors wanted to write in Markdown without losing visual control. I built a custom MDX pipeline with a component collection that makes every article feel designed, and added edge caching so posts load instantly while staying simple to deploy.",
    features: [
      "MDX authoring with reusable content components",
      "Static generation with incremental revalidation",
      "SEO metadata, OpenGraph, and sitemap generators",
      "Reading-progress bar and search",
      "Tag-based discovery and related posts",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/tamimhasan19702",
  },
  {
    id: 3,
    slug: "vanilla-book-app",
    title: "Vanilla Book App",
    category: "Utilities",
    year: "2023",
    color: "from-violet-300 to-purple-300",
    images: ["/projects/book-app.svg"],
    span: "",
    tags: ["JavaScript", "HTML", "CSS", "IndexedDB"],
    desc: "A dependency-free personal library that organizes books entirely in the browser.",
    overview:
      "Vanilla Book App is a no-framework personal library manager. Books are stored locally with IndexedDB, so the app works fully offline and your collection never leaves your device. It proves that modern vanilla JavaScript still gets the job done.",
    challenge:
      "Without a framework, the entire rendering and state layer had to be hand-rolled and kept tiny. I wrote a small reactive render loop and made sure every interaction - search, sort, reading progress - felt as smooth as a framework app.",
    features: [
      "Local-first storage with IndexedDB",
      "Offline support with a service worker",
      "Search, filter, and sort across your library",
      "Reading-progress and ratings tracking",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/tamimhasan19702",
  },
  {
    id: 4,
    slug: "spotify-music-app",
    title: "Spotify Music App",
    category: "Media Player",
    year: "2023",
    color: "from-purple-300 to-red-300",
    images: ["/projects/spotify-app.svg"],
    span: "",
    tags: ["React", "Web Audio API", "CSS"],
    desc: "A rich audio player with visualizations inspired by modern streaming apps.",
    overview:
      "A mood-driven music player that supports local playlists, gapless playback, and real-time audio visualizations rendered with the Web Audio API. The interface mirrors the polish of mainstream streaming apps while staying fully client-side.",
    challenge:
      "Rendering smooth, requestAnimationFrame-driven visualizations without draining battery required careful throttling. I also built a queue system so tracks, albums, and playlists mix seamlessly without interrupting playback.",
    features: [
      "Real-time audio waveform visualizations",
      "Playlist and queue management",
      "Keyboard-driven controls and seekable progress",
      "Responsive player UI with smooth transitions",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/tamimhasan19702",
  },
  {
    id: 5,
    slug: "easebook-social",
    title: "Easebook Social",
    category: "Social Platform",
    year: "2022",
    color: "from-teal-300 to-emerald-300",
    images: [
      "/projects/easebook.svg",
      "/projects/spotify-app.svg",
    ],
    span: "sm:col-span-2 lg:col-span-2 xl:col-span-2",
    theme: "wide",
    tags: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
    desc: "A real-time social network with profiles, posts, reactions, and live chat.",
    overview:
      "Easebook is a real-time social platform where people create profiles, share posts, react, and message each other. Notifications stream in live over WebSockets so the feed always feels alive, whether users are at their desk or on the go.",
    challenge:
      "Building live interactions at scale meant architecting a WebSocket layer that syncs with MongoDB change streams. I designed the data model so feeds paginate cleanly and chats stay consistent across reconnect storms.",
    features: [
      "Real-time posting, reactions, and notifications",
      "Direct messaging with Socket.io",
      "Profiles with avatars and cover photos",
      "Infinite-scroll activity feed",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/tamimhasan19702",
  },
  {
    id: 6,
    slug: "taskflow-kanban",
    title: "TaskFlow Kanban",
    category: "Productivity",
    year: "2022",
    color: "from-amber-300 to-orange-300",
    images: ["/projects/taskflow.svg"],
    span: "sm:col-span-2 lg:col-span-2",
    theme: "wide",
    tags: ["React", "TypeScript", "DnD", "LocalStorage"],
    desc: "A drag-and-drop kanban board that keeps projects moving with zero setup.",
    overview:
      "TaskFlow is a lightweight kanban board for teams and individuals who want to organize work without heavy ceremony. Boards, lists, and cards drag and drop instantly, and everything persists locally so it works from the first click.",
    challenge:
      "The drag-and-drop interactions needed to feel pixel-perfect across touch and mouse. I tailored the drop animations and added optimistic persistence so a misplaced card never adds friction to the workflow.",
    features: [
      "Drag-and-drop cards across columns",
      "Custom labels, due dates, and checklists",
      "Local persistence with auto-save",
      "Keyboard-friendly board navigation",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/tamimhasan19702",
  },
];

export const getProjectById = (id) => projects.find((project) => project.id === id);

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);
# Tareq's Portfolio

A personal portfolio website built with Next.js 16 and Payload CMS.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/)
- **CMS:** [Payload CMS 3](https://payloadcms.com/)
- **Database:** MongoDB
- **Styling:** Tailwind CSS 4
- **UI:** Radix UI, shadcn
- **Animations:** Framer Motion
- **Icons:** Lucide React, React Icons
- **Storage:** AWS S3

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB instance
- AWS S3 bucket (for media storage)

### Development

```bash
pnpm install
cp .env.example .env.local  # configure env vars
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Database Setup

```bash
pnpm seed        # seed initial data
pnpm migrate     # run migrations
```

### Build & Deploy

```bash
pnpm build
pnpm start
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm seed` | Seed database with sample data |
| `pnpm migrate` | Run database migrations |
| `pnpm generate:types` | Generate Payload TypeScript types |

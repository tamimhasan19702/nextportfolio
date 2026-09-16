import config from "@payload-config";
import { unstable_cache } from "next/cache";
import { getPayload } from "payload";

const cacheRevalidate = Number(process.env.PAYLOAD_CACHE_REVALIDATE ?? 300);

type CachedGlobalSlug = "navbar" | "home" | "about" | "contact";

const getCachedGlobal = (slug: CachedGlobalSlug, depth: number) =>
  unstable_cache(
    async () => {
      const payload = await getPayload({ config });
      return payload.findGlobal({ slug, depth });
    },
    [`payload-global-${slug}-${depth}`],
    {
      revalidate: cacheRevalidate,
      tags: [`payload-global:${slug}`],
    },
  )();

export const getNavbar = () => getCachedGlobal("navbar", 1);
export const getHome = () => getCachedGlobal("home", 1);
export const getAbout = () => getCachedGlobal("about", 1);
export const getContact = () => getCachedGlobal("contact", 1);

export const getPortfolioData = unstable_cache(
  async () => {
    const payload = await getPayload({ config });

    return Promise.all([
      payload.find({
        collection: "work",
        sort: "sortOrder",
        depth: 1,
        limit: 0,
        pagination: false,
      }),
      payload.findGlobal({ slug: "portfolio", depth: 1 }),
    ]);
  },
  ["payload-portfolio"],
  {
    revalidate: cacheRevalidate,
    tags: ["payload-global:portfolio", "payload-collection:work"],
  },
);

export const getProjectBySlug = (slug: string) =>
  unstable_cache(
    async () => {
      const payload = await getPayload({ config });
      const { docs } = await payload.find({
        collection: "work",
        where: { slug: { equals: slug } },
        depth: 2,
        limit: 1,
      });

      return docs[0] ?? null;
    },
    [`payload-work-${slug}`],
    {
      revalidate: cacheRevalidate,
      tags: ["payload-collection:work", `payload-work:${slug}`],
    },
  )();

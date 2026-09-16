import { revalidateTag } from "next/cache";

type CacheDocument = {
  slug?: string | null;
};

export const revalidateSite = () => {
  revalidateTag("payload-site", "max");
};

export const createCollectionCacheHooks = () => ({
  afterChange: [revalidateSite],
  afterDelete: [revalidateSite],
});

export const createGlobalCacheHooks = (slug: string) => ({
  afterChange: [() => revalidateGlobal(slug)],
});

export const revalidateGlobal = (slug: string) => {
  revalidateTag(`payload-global:${slug}`, "max");
  revalidateSite();
};

export const revalidateWork = (doc?: CacheDocument | null) => {
  revalidateTag("payload-collection:work", "max");
  revalidateSite();

  if (doc?.slug) {
    revalidateTag(`payload-work:${doc.slug}`, "max");
  }
};

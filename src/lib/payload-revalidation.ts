import { revalidatePath, revalidateTag } from "next/cache";

type CacheDocument = {
  slug?: string | null;
};

export const revalidateSite = () => {
  revalidateTag("payload-site", { expire: 0 });
  revalidatePath("/", "layout");
};

export const createCollectionCacheHooks = () => ({
  afterChange: [revalidateSite],
  afterDelete: [revalidateSite],
});

export const createGlobalCacheHooks = (slug: string) => ({
  afterChange: [() => revalidateGlobal(slug)],
});

export const revalidateGlobal = (slug: string) => {
  revalidateTag(`payload-global:${slug}`, { expire: 0 });
  revalidateSite();
};

export const revalidateWork = (doc?: CacheDocument | null) => {
  revalidateTag("payload-collection:work", { expire: 0 });
  revalidateSite();

  if (doc?.slug) {
    revalidateTag(`payload-work:${doc.slug}`, { expire: 0 });
  }
};

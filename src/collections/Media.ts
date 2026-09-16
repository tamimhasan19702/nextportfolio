import { createCollectionCacheHooks } from "@/lib/payload-revalidation";
import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  hooks: createCollectionCacheHooks(),
  access: {
    read: () => true,
  },
  admin: {
    group: "Collections",
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
  upload: true,
};

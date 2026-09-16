import { createCollectionCacheHooks } from "@/lib/payload-revalidation";
import type { CollectionConfig } from "payload";
import { HOBBIES_ICON_OPTIONS } from "./hobbyIconOptions";

export const Hobbies: CollectionConfig = {
  slug: "hobbies",
  hooks: createCollectionCacheHooks(),
  admin: {
    group: "About",
    useAsTitle: "text",
    defaultColumns: ["icon", "text"],
  },
  orderable: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "icon",
      type: "select",
      required: true,
      options: HOBBIES_ICON_OPTIONS,
    },
    {
      name: "text",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
    },
  ],
};

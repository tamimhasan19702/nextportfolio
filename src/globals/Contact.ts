import { createGlobalCacheHooks } from "@/lib/payload-revalidation";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import type { GlobalConfig } from "payload";

export const Contact: GlobalConfig = {
  slug: "contact",
  hooks: createGlobalCacheHooks("contact"),
  admin: {
    group: "Pages",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "overline",
      type: "text",
      defaultValue: "Contact",
    },
    {
      name: "title",
      type: "text",
      defaultValue: "Let's Work Together",
    },
    {
      name: "description",
      type: "richText",
      editor: lexicalEditor(),
    },
    {
      name: "moreInfo",
      type: "richText",
      editor: lexicalEditor(),
      admin: {
        description: "Contact details shown on the left (email, phone, location, availability)",
      },
    },
  ],
};

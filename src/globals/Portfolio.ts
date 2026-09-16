import { createGlobalCacheHooks } from "@/lib/payload-revalidation";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import type { GlobalConfig } from "payload";

export const Portfolio: GlobalConfig = {
  slug: "portfolio",
  hooks: createGlobalCacheHooks("portfolio"),
  admin: {
    group: "Pages",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "eyebrowPrefix",
      type: "text",
      defaultValue: "Portfolio",
    },
    {
      name: "title",
      type: "text",
      defaultValue: "Selected Work",
    },
    {
      name: "description",
      type: "richText",
      editor: lexicalEditor(),
    },
    {
      name: "ctaText",
      type: "text",
      defaultValue: "Have a project?",
    },
    {
      name: "ctaLink",
      type: "text",
      defaultValue: "/contact",
    },
    {
      name: "selectedWorks",
      type: "relationship",
      relationTo: "work",
      hasMany: true,
      admin: {
        sortOptions: "sortOrder",
        description: "Select projects to display. If empty, nothing is shown.",
      },
    },
  ],
};

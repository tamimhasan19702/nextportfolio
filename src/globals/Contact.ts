import type { GlobalConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Contact: GlobalConfig = {
  slug: 'contact',
  admin: {
    group: 'Pages',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'overline',
      type: 'text',
      defaultValue: 'Contact',
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: "Let's Work Together",
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor(),
    },
    {
      name: 'moreInfo',
      type: 'richText',
      editor: lexicalEditor(),
      admin: {
        description: 'Contact details shown on the left (email, phone, location, availability)',
      },
    },
  ],
}

import type { GlobalConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Portfolio: GlobalConfig = {
  slug: 'portfolio',
  admin: {
    group: 'Pages',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'eyebrowPrefix',
      type: 'text',
      defaultValue: 'Portfolio',
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Selected Work',
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor(),
    },
    {
      name: 'ctaText',
      type: 'text',
      defaultValue: 'Have a project?',
    },
    {
      name: 'ctaLink',
      type: 'text',
      defaultValue: '/contact',
    },
    {
      name: 'selectedWorks',
      type: 'relationship',
      relationTo: 'work',
      hasMany: true,
      admin: {
        sortOptions: 'sortOrder',
        description: 'Select projects to display. If empty, nothing is shown.',
      },
    },
  ],
}
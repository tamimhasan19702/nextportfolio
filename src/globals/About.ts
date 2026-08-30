import type { GlobalConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const About: GlobalConfig = {
  slug: 'about',
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
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor(),
    },
    {
      name: 'signature',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Optional signature image',
      },
    },
    {
      name: 'education',
      type: 'relationship',
      relationTo: 'education',
      hasMany: true,
    },
    {
      name: 'certifications',
      type: 'relationship',
      relationTo: 'certification',
      hasMany: true,
    },
    {
      name: 'experiences',
      type: 'relationship',
      relationTo: 'experience',
      hasMany: true,
    },
    {
      name: 'skills',
      type: 'array',
      admin: {
        position: 'sidebar',
        description: 'Skills shown in the sidebar',
      },
      fields: [
        {
          name: 'skill',
          type: 'text',
        },
      ],
    },
    {
      name: 'hobbies',
      type: 'relationship',
      relationTo: 'hobbies',
      hasMany: true,
    },
  ],
}

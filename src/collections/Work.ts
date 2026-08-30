import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

export const Work: CollectionConfig = {
  slug: 'work',
  admin: {
    group: 'Projects',
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'year', 'sortOrder'],
    listSearchableFields: ['title', 'category'],
  },
  orderable: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      unique: true,
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'text',
      required: true,
    },
    {
      name: 'Date',
      type: 'date',
      required: true,
    },
    {
      name: 'excerpt',
      type: 'richText',
      editor: lexicalEditor(),
      admin: {
        description: 'Short card description',
      },
    },
    {
      name: 'images',
      type: 'array',
      maxRows: 12,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
      admin: {
        description: 'Drag to reorder (max 12)',
      },
    },
    {
      name: 'sections',
      type: 'array',
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
          name: 'content',
          type: 'richText',
          editor: lexicalEditor(),
        },
      ],
      admin: {
        description: 'Case study sections (overline, title, rich text)',
      },
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
        },
      ],
      admin: {
        description: 'Add features as individual items',
      },
    },
    {
      name: 'liveUrl',
      type: 'text',
       admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'githubUrl',
      type: 'text',
       admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'additionalLinks',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'url',
          type: 'text',
        },
      ],
       admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'sortOrder',
      type: 'number',
      admin: {
        position: 'sidebar',
        hidden: true,
      },
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
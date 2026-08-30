import type { GlobalConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Home: GlobalConfig = {
  slug: 'home',
  admin: {
    group: 'Pages',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
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
          name: 'buttons',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
            },
            {
              name: 'variant',
              type: 'select',
              defaultValue: 'primary',
              options: [
                { label: 'Primary', value: 'primary' },
                { label: 'Outline', value: 'outline' },
              ],
            },
            {
              name: 'linkType',
              type: 'radio',
              defaultValue: 'internal',
              options: [
                { label: 'Internal', value: 'internal' },
                { label: 'External', value: 'external' },
              ],
            },
            {
              name: 'internalLink',
              type: 'text',
              admin: {
                condition: (data, siblingData) => siblingData?.linkType === 'internal',
                placeholder: '/portfolio',
              },
            },
            {
              name: 'externalUrl',
              type: 'text',
              admin: {
                condition: (data, siblingData) => siblingData?.linkType === 'external',
                placeholder: 'https://...',
              },
            },
            {
              name: 'showProgress',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'progressLabel',
              type: 'text',
            },
            {
              name: 'progressValue',
              type: 'number',
              min: 0,
              max: 100,
              defaultValue: 0,
            },
          ],
        },
      ],
    },
  ],
}
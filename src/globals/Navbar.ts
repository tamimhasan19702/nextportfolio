import type { GlobalConfig } from 'payload'

import { ICON_OPTIONS } from '../components/iconOptions'

export const Navbar: GlobalConfig = {
  slug: 'navbar',
  admin: {
    group: 'Navbar',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logoText',
      type: 'text',
      defaultValue: '{{TAREQ MONOWER}}',
    },
    {
      name: 'logoSequences',
      type: 'array',
      labels: {
        singular: 'Sequence',
        plural: 'Typewriter Sequences',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { label: '{{}}' },
        { label: '{{TAREQ' },
        { label: '{{TAREQ MONOWER}}' },
      ],
    },
    {
      name: 'links',
      type: 'array',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'https://..., /page, mailto:..., tel:...',
          },
        },
        {
          name: 'target',
          type: 'radio',
          defaultValue: 'same',
          options: [
            { label: 'Same tab', value: 'same' },
            { label: 'New tab (external/social)', value: 'new' },
          ],
        },
        {
          name: 'icon',
          type: 'select',
          options: ICON_OPTIONS,
          required: true,
        },
      ],
    },
  ],
}

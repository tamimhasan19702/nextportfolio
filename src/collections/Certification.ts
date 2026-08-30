import type { CollectionConfig } from 'payload'

export const Certification: CollectionConfig = {
  slug: 'certification',
  admin: {
    group: 'About',
    useAsTitle: 'name',
    defaultColumns: ['name', 'institution', 'date'],
    listSearchableFields: ['name', 'institution'],
  },
  orderable: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'institution',
      type: 'text',
      required: true,
    },
    {
      name: 'certificateId',
      type: 'text',
      admin: {
        description: 'Verifiable credential ID (optional)',
      },
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'monthOnly',
        },
      },
    },
    {
      name: 'link',
      type: 'text',
      admin: {
        description: 'Public certificate URL link (optional)',
      },
    },
  ],
}

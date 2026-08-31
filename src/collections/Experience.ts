import type { CollectionConfig } from 'payload'

export const Experience: CollectionConfig = {
  slug: 'experience',
  admin: {
    group: 'About',
    useAsTitle: 'designation',
    defaultColumns: ['designation', 'company', 'startDate', 'endDate'],
    listSearchableFields: ['designation', 'company'],
  },
  orderable: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'designation',
      type: 'text',
      required: true,
    },
      {
        name: 'description',
        type: 'textarea',
      },
    {
      name: 'startDate',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'monthOnly',
          displayFormat: 'MMM yyyy',
        },
      },
    },
    {
      name: 'endDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'monthOnly',
          displayFormat: 'MMM yyyy',
        },
        description: 'Leave empty for "Present"',
      },
    },
    {
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'companyLocation',
      type: 'text',
    },
  ],
}

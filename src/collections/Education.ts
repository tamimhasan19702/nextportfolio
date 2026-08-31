import type { CollectionConfig } from 'payload'

export const Education: CollectionConfig = {
  slug: 'education',
  admin: {
    group: 'About',
    useAsTitle: 'degree',
    defaultColumns: ['degree', 'institution', 'startDate', 'endDate'],
    listSearchableFields: ['degree', 'institution'],
  },
  orderable: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'degree',
      type: 'text',
      required: true,
    },
    {
      name: 'institution',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
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
      name: 'currentlyStudying',
      type: 'checkbox',
      label: 'Currently studying',
    },
    {
      name: 'endDate',
      type: 'date',
      required: false,
      admin: {
          date: {
            pickerAppearance: 'monthOnly',
            displayFormat: 'MMM yyyy',
          },
        description: 'Leave empty for "Present"',
        condition: (data) => !data.currentlyStudying,
      },
    },
    {
      name: 'grade',
      type: 'text',
      label: 'Grade',
    },
  ],
}

import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    group: 'Collections',
  },
  auth: true,
  fields: [
    {
      name: 'roles',
      type: 'select',
      access: {
        update: ({ req: { user } }) => user?.roles?.includes('admin') ?? false,
      },
      admin: {
        description: 'Whether this user is an administrator or a regular site user.',
      },
      defaultValue: ['user'],
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
      required: true,
      saveToJWT: true,
    },
  ],
}
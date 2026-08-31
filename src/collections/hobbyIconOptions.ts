export const HOBBY_ICONS = [
  'Plane',
  'Camera',
  'Gamepad2',
  'Music',
  'BookOpen',
  'Dumbbell',
  'Palette',
  'Coffee',
  'Bike',
  'Code',
  'Film',
  'Pencil',
  'Volleyball',
] as const

export type HobbyIcon = (typeof HOBBY_ICONS)[number]

export const HOBBIES_ICON_OPTIONS = HOBBY_ICONS.map((value) => ({ label: value, value }))

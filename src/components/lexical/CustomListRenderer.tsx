"use client"

import { CheckCircle2 } from 'lucide-react'
import type { ReactNode } from 'react'

export const CustomList = ({ children }: { children: ReactNode }) => (
  <ul className="grid gap-3 sm:grid-cols-2">
    {children}
  </ul>
)

export const CustomListItem = ({ children }: { children: ReactNode }) => (
  <li className="flex items-start gap-3 rounded-lg border border-zinc-200 p-4 text-sm leading-relaxed">
    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-zinc-900" />
    {children}
  </li>
)
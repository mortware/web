import type { ReactNode } from 'react'
import { cn } from '../utils/cn'

type IconName = 'linkedin' | 'github' | 'globe' | 'mail' | 'phone' | 'printer'

type IconProps = {
  icon: IconName
  className?: string
}

const iconPaths: Record<IconName, ReactNode> = {
  linkedin: (
    <>
      <path d="M4 8h4v12H4z" />
      <path d="M6 4a2 2 0 1 0 0.001 4.001A2 2 0 0 0 6 4z" />
      <path d="M12 8h4v2.1c.6-1 1.7-2.3 4-2.3 3.1 0 4 2 4 5.2V20h-4v-5.4c0-1.3 0-3-1.9-3-1.9 0-2.1 1.5-2.1 2.9V20h-4V8z" />
    </>
  ),
  github: (
    <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.9.6-3.5-1.2-3.5-1.2-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 2.1 2.9 1.5.1-.7.4-1.2.7-1.5-2.3-.3-4.7-1.2-4.7-5.2 0-1.1.4-2 1-2.7-.1-.2-.4-1.3.1-2.7 0 0 .9-.3 2.9 1a10 10 0 0 1 5.2 0c2-1.3 2.9-1 2.9-1 .5 1.4.2 2.5.1 2.7.6.7 1 1.6 1 2.7 0 4-2.4 4.9-4.7 5.2.4.3.8 1 .8 2.1v3.1c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </>
  ),
  mail: (
    <>
      <path d="M4 6h16v12H4z" />
      <path d="m4 6 8 6 8-6" />
    </>
  ),
  phone: <path d="M6 3h4l2 5-3 2c1.2 2.5 3.2 4.6 5.8 5.8l2-3 5 2v4c0 1-1 2-2 2-9.4-.5-17-8.1-17-17 0-1 1-2 2-2z" />,
  printer: (
    <>
      <path d="M7 8V3h10v5" />
      <rect x="6" y="14" width="12" height="7" />
      <rect x="4" y="9" width="16" height="6" rx="2" />
    </>
  ),
}

export default function Icon({ icon, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="presentation"
      className={cn(['icon', className])}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[icon]}
    </svg>
  )
}

import type { CSSProperties } from 'react'
import { socials } from '../data/projects'
import { GitHub, LinkedIn, Mail, XIcon } from './Icons'

const iconMap = {
  GitHub,
  X: XIcon,
  LinkedIn,
  Email: Mail,
} as const

type SocialLinksProps = {
  label?: boolean
}

export function SocialLinks({ label = true }: SocialLinksProps) {
  return (
    <div className="socials">
      {label ? <span className="socials-label">Elsewhere</span> : null}
      {socials.map((social, index) => {
        const Icon = iconMap[social.label]
        const rotation = ['-3deg', '2deg', '-2deg', '3deg'][index] ?? '0deg'
        return (
          <a
            key={social.label}
            className="icon-btn"
            href={social.href}
            style={{ '--r': rotation } as CSSProperties}
            aria-label={`${social.label}: ${social.handle}`}
            target={social.href.startsWith('http') ? '_blank' : undefined}
            rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <Icon size={16} />
            <span className="mark-tip">{social.handle}</span>
          </a>
        )
      })}
    </div>
  )
}

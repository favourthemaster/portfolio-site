import type { ReactNode } from 'react'
import type { MarkName } from '../data/projects'

type MarkSpec = {
  bg: string
  glyph: ReactNode
}

const marks: Record<MarkName, MarkSpec> = {
  binn: {
    bg: '#1b2149',
    glyph: (
      <g fill="none" stroke="#f4f2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="11.2" y="14.2" width="12.6" height="13.2" rx="3.2" />
        <path d="M23.8 18.4v-3.1a4 4 0 0 1 8 0v2.2" />
        <circle cx="17.5" cy="20.8" r="1.45" fill="#f4f2ff" stroke="none" />
        <path d="M17.5 22.3v2" />
      </g>
    ),
  },
  lectry: {
    bg: '#5a4bff',
    glyph: (
      <g>
        <rect x="9.8" y="11.2" width="20.4" height="17.6" rx="3.6" fill="#fffefb" />
        <path d="M17.6 16.4 24.9 20l-7.3 3.6v-7.2Z" fill="#5a4bff" />
      </g>
    ),
  },
  vscode: {
    bg: '#2f6fed',
    glyph: (
      <g>
        <rect x="13.8" y="8.2" width="12.4" height="23.6" rx="3.2" fill="none" stroke="#fff" strokeWidth="1.9" />
        <path d="M18.1 16.2 22.4 19l-4.3 2.8v-5.6Z" fill="#a9c9ff" />
        <circle cx="20" cy="27.2" r=".9" fill="#fff" />
      </g>
    ),
  },
  agentpay: {
    bg: '#ff4500',
    glyph: (
      <g>
        <path d="M10.8 28.4 20 9.4l9.2 19h-3.7l-1.8-3.9h-7.4L14.5 28.4h-3.7Z" fill="#fff" />
        <path d="M18.6 21.2h2.8" stroke="#ff4500" strokeWidth="2" strokeLinecap="round" />
        <circle cx="31.4" cy="9.6" r="1.7" fill="#fff" opacity=".45" />
      </g>
    ),
  },
  twelvelabs: {
    bg: '#191811',
    glyph: null,
  },
  agy: {
    bg: '#23221d',
    glyph: (
      <g>
        <circle cx="20" cy="20" r="8.6" fill="none" stroke="#e8e1ca" strokeWidth="1.7" />
        <circle cx="20" cy="20" r="2.1" fill="#e8e1ca" />
        <circle cx="27.2" cy="12.4" r="2" fill="#ff7a45" />
        <path d="m11.6 28.4 16.8-16.8" stroke="#e8e1ca" strokeWidth="1" opacity=".22" />
      </g>
    ),
  },

}

type MarkProps = {
  name: MarkName
  size?: number
  className?: string
}

export function Mark({ name, size = 38, className }: MarkProps) {
  if (name === 'binn' || name === 'twelvelabs') {
    const src = name === 'binn' ? '/brand/binn.png' : '/brand/twelvelabs.png'
    return (
      <img
        className={`mark mark--${name} ${className ?? ''}`.trim()}
        src={src}
        width={size}
        height={size}
        alt=""
        aria-hidden="true"
      />
    )
  }

  const spec = marks[name]
  return (
    <svg
      className={`mark ${className ?? ''}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="10" fill={spec.bg} />
      <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="#fff" strokeOpacity=".14" />
      {spec.glyph}
    </svg>
  )
}

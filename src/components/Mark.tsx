import type { ReactNode } from 'react'
import type { MarkName } from '../data/projects'

type MarkSpec = {
  bg: string
  glyph: ReactNode
}

const marks: Record<MarkName, MarkSpec> = {
  binn: {
    bg: '#5651a1',
    glyph: (
      <g transform="translate(8, 8)">
        <circle cx="7.2" cy="9.8" r="1.9" fill="#2e2b2b" />
        <circle cx="16.8" cy="9.8" r="1.9" fill="#2e2b2b" />
        <path d="M 9.5 13.8 C 10.3 16.0, 13.7 16.0, 14.5 13.8" stroke="#2e2b2b" strokeWidth="2.1" strokeLinecap="round" fill="none" />
      </g>
    ),
  },
  coachly: {
    bg: '#0c1f19',
    glyph: (
      <g fill="none" stroke="#2dd4bf" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="11.5" r="2.2" fill="#2dd4bf" stroke="none" />
        <path d="M20 14.5v8" />
        <path d="M12.5 17.5l7.5 2.5 7.5-2.5" />
        <path d="M14.5 30l5.5-7.5 5.5 7.5" />
        <circle cx="10" cy="17.5" r="1.4" fill="#34d399" stroke="none" />
        <circle cx="30" cy="17.5" r="1.4" fill="#34d399" stroke="none" />
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
  agentbridge: {
    bg: '#161e2e',
    glyph: (
      <g fill="none" stroke="#38bdf8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 26h20" stroke="#64748b" strokeWidth="1.2" />
        <path d="M12 26c2.5-7 13.5-7 16 0" />
        <circle cx="12" cy="26" r="1.6" fill="#38bdf8" stroke="none" />
        <circle cx="28" cy="26" r="1.6" fill="#38bdf8" stroke="none" />
        <circle cx="20" cy="19.5" r="2" fill="#0ea5e9" stroke="none" />
        <path d="M20 12v5.5" stroke="#38bdf8" strokeDasharray="1.5 2" />
      </g>
    ),
  },
  memoryhub: {
    bg: '#141416',
    glyph: (
      <g>
        <circle cx="20" cy="20" r="5.6" fill="none" stroke="#f97316" strokeWidth="1.2" opacity=".4" />
        <line x1="20" y1="20" x2="20" y2="11.5" stroke="#71717a" strokeWidth="1.2" />
        <line x1="20" y1="20" x2="12.5" y2="26.5" stroke="#71717a" strokeWidth="1.2" />
        <line x1="20" y1="20" x2="27.5" y2="26.5" stroke="#71717a" strokeWidth="1.2" />
        <circle cx="20" cy="20" r="2.4" fill="#f97316" />
        <circle cx="20" cy="11.5" r="1.8" fill="#e4e4e7" />
        <circle cx="12.5" cy="26.5" r="1.8" fill="#e4e4e7" />
        <circle cx="27.5" cy="26.5" r="1.8" fill="#e4e4e7" />
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
  if (name === 'binn' || name === 'twelvelabs' || name === 'coachly') {
    const src =
      name === 'binn'
        ? '/brand/binn.png'
        : name === 'coachly'
          ? '/brand/coachly.png'
          : '/brand/twelvelabs.png'
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

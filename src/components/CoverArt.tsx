import type { CSSProperties } from 'react'
import type { CoverName } from '../data/projects'

type CoverArtProps = {
  variant: CoverName
}

const phoneStyle = (tilt: string, lift: string) =>
  ({ '--tilt': tilt, '--lift': lift }) as CSSProperties

function BrowserFrame({
  url,
  src,
  alt,
}: {
  url: string
  src: string
  alt: string
}) {
  return (
    <div className="browser">
      <div className="browser-bar">
        <span className="browser-dots">
          <span className="browser-dot" />
          <span className="browser-dot" />
          <span className="browser-dot" />
        </span>
        <span className="browser-url">{url}</span>
        <span style={{ width: 34 }} />
      </div>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}

export function CoverArt({ variant }: CoverArtProps) {
  if (variant === 'binn') {
    return (
      <div className="cover cover--binn">
        <div className="phone-stack">
          <img
            className="phone-shot"
            style={phoneStyle('-5deg', '12px')}
            src="/work/binn-home.webp"
            alt="Binn home screen showing blocked apps and recent courses"
            width="720"
            height="1560"
          />
          <img
            className="phone-shot"
            style={phoneStyle('0deg', '-6px')}
            src="/work/binn-quiz.webp"
            alt="Binn quiz screen asking a physics question"
            width="720"
            height="1560"
          />
          <img
            className="phone-shot"
            style={phoneStyle('5deg', '12px')}
            src="/work/binn-blocked.webp"
            alt="Binn blocked apps settings screen"
            width="720"
            height="1560"
          />
        </div>
        <span className="cover-label">Binn · Android · 2026</span>
      </div>
    )
  }

  if (variant === 'lectry') {
    return (
      <div className="cover cover--lectry">
        <span className="float-chip chip--a">PDF → 6 lessons</span>
        <BrowserFrame
          url="lectry.app/dashboard"
          src="/work/lectry-dashboard.webp"
          alt="Lectry dashboard with generated courses"
        />
        <span className="float-chip chip--b">auto-structured</span>
        <span className="cover-label">Lectry · 2025</span>
      </div>
    )
  }

  if (variant === 'agentpay') {
    return (
      <div className="cover cover--agentpay cover--dark">
        <div className="terminal">
          <div className="terminal-bar">agentpay · mcp server</div>
          <pre>
            <span className="t-dim">$</span> <span className="t-brand">tools</span>.pay({'{'}
            {'\n'}  to: <span className="t-str">"ada@example.com"</span>,
            {'\n'}  amount: <span className="t-num">2500</span>,
            {'\n'}  currency: <span className="t-str">"NGN"</span>,
            {'\n'}{'}'})
            {'\n\n'}<span className="t-ok">✓</span> <span className="t-key">mandate</span> valid · limit 2,500 / 10,000
            {'\n'}<span className="t-ok">✓</span> <span className="t-key">risk</span> low · identity resolved
            {'\n'}<span className="t-ok">✓</span> <span className="t-key">paid</span> · NUBAN 8123 4567 890
            {'\n\n'}<span className="t-dim">›</span> receipt written · user notified
          </pre>
        </div>
        <span className="cover-label">AgentPay · in development</span>
      </div>
    )
  }

  if (variant === 'vscode') {
    return (
      <div className="cover cover--vscode">
        <span className="fps-badge">60 FPS · 18ms</span>
        <div className="editor">
          <div className="editor-side">
            <span className="side-icon is-active" />
            <span className="side-icon" />
            <span className="side-icon" />
            <span className="side-icon" />
          </div>
          <div className="editor-main">
            <div className="editor-tabs">
              <span className="editor-tab is-active">Android Preview</span>
              <span className="editor-tab">app.ts</span>
            </div>
            <div className="editor-canvas">
              <div className="phone-preview">
                <div className="mini-status">
                  <span>10:09</span>
                  <span>LTE</span>
                </div>
                <div className="mini-greeting">Coffee first.</div>
                <div className="mini-sub">Good morning, Favour</div>
                <div className="mini-card">
                  <div className="mini-card-title">Apps are blocked</div>
                  <div className="mini-card-sub">Tap to unlock with a lesson</div>
                </div>
                <div className="mini-grid">
                  <div className="mini-tile">
                    <strong>20</strong>
                    Correct
                  </div>
                  <div className="mini-tile is-dark">
                    <strong>5</strong>
                    Blocked
                  </div>
                </div>
                <div className="mini-nav">
                  <span>HOME</span>
                  <span>STUDY</span>
                  <span>BLOCK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="cover-label">Android Emulator for VS Code · 2026</span>
      </div>
    )
  }

  return null
}

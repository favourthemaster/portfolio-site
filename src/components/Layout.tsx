import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Mail } from './Icons'

const navItems = [
  { to: '/work', label: 'Work' },
  { to: '/stack', label: 'Stack' },
  { to: '/about', label: 'About' },
]

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function useLagosTime() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(new Date())

    setTime(format())
    const interval = window.setInterval(() => setTime(format()), 30_000)
    return () => window.clearInterval(interval)
  }, [])

  return time
}

function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header id="top" className={`site-head${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav wrap">
        <NavLink to="/" className="brand" aria-label="Favour Nwachukwu, home">
          favour
        </NavLink>
        <div className="nav-right">
          <nav className="nav-links" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <a
            className="nav-mail"
            href="mailto:nwachukwufavs@gmail.com"
            aria-label="Send Favour an email"
          >
            <Mail size={14} />
          </a>
        </div>
      </div>
    </header>
  )
}

function SiteFooter() {
  const time = useLagosTime()

  return (
    <footer className="site-foot">
      <div className="wrap foot-row">
        <div className="foot-left">
          <span>© {new Date().getFullYear()} Favour Nwachukwu</span>
          <span className="foot-dot" />
          <span>Lagos, Nigeria</span>
        </div>
        <div className="foot-right">
          <span className="foot-live">{time ? `${time} WAT` : 'WAT'}</span>
          <span className="foot-dot" />
          <a href="#top" style={{ color: 'inherit' }}>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  )
}

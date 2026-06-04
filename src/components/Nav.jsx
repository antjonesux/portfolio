import { useState, useEffect, useRef, useId } from 'react'
import resumePdf from '../assets/resume.pdf'
import Logo from './Logo'

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M3 6.5h12M3 11.5h12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M4.5 4.5l9 9M13.5 4.5l-9 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navShellRef = useRef(null)
  const panelId = useId()

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }

    const onPointerDown = (e) => {
      if (navShellRef.current && !navShellRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [menuOpen])

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="nav-shell" ref={navShellRef}>
      <nav className="nav">
        <div
          className="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Logo />
          <span className="logo-name">Anthony Jones</span>
        </div>
        <div className="nav-links">
          <button type="button" className="nav-link" onClick={() => scrollTo('work')}>
            Work
          </button>
          <button type="button" className="nav-link" onClick={() => scrollTo('about')}>
            About
          </button>
          <button type="button" className="nav-link" onClick={() => scrollTo('contact')}>
            Contact
          </button>
          <a
            className="nav-link"
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
        <button
          type="button"
          className="nav-link nav-menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls={panelId}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div
        id={panelId}
        className={`nav-menu-panel${menuOpen ? ' nav-menu-panel--open' : ''}`}
        aria-hidden={!menuOpen}
        {...(!menuOpen ? { inert: '' } : {})}
      >
        <ul className="nav-menu-list">
          <li>
            <button type="button" className="nav-menu-item" onClick={() => scrollTo('work')}>
              <span className="nav-menu-item-label">Work</span>
              <span className="nav-menu-item-arrow" aria-hidden="true">
                →
              </span>
            </button>
          </li>
          <li>
            <button type="button" className="nav-menu-item" onClick={() => scrollTo('about')}>
              <span className="nav-menu-item-label">About</span>
              <span className="nav-menu-item-arrow" aria-hidden="true">
                →
              </span>
            </button>
          </li>
          <li>
            <button type="button" className="nav-menu-item" onClick={() => scrollTo('contact')}>
              <span className="nav-menu-item-label">Contact</span>
              <span className="nav-menu-item-arrow" aria-hidden="true">
                →
              </span>
            </button>
          </li>
          <li>
            <a
              className="nav-menu-item"
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <span className="nav-menu-item-label">Resume</span>
              <span className="nav-menu-item-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

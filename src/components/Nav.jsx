import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className="nav">
        <div
          className="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Logo />
          <span className="logo-name">Anthony Jones</span>
        </div>
        <div className="nav-links">
          <button className="nav-link" onClick={() => scrollTo('work')}>
            Work
          </button>
          <button className="nav-link" onClick={() => scrollTo('about')}>
            About
          </button>
          <button className="nav-link" onClick={() => scrollTo('contact')}>
            Contact
          </button>
        </div>
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {menuOpen && (
        <div className="nav-overlay">
          <button
            className="nav-overlay-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <span />
            <span />
          </button>
          <div className="nav-overlay-links">
            <button className="nav-overlay-link" onClick={() => scrollTo('work')}>
              Work
            </button>
            <button className="nav-overlay-link" onClick={() => scrollTo('about')}>
              About
            </button>
            <button className="nav-overlay-link" onClick={() => scrollTo('contact')}>
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  )
}

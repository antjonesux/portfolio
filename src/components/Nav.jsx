import Logo from './Logo'

export default function Nav() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
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
    </nav>
  )
}

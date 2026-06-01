import { useEffect, useRef } from 'react'
import { PROJECTS } from '../data/projects'
import Logo from './Logo'

function PlatformCard({ title, desc, image }) {
  return (
    <div className="platform-card">
      <div className="platform-card-img">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              color: 'rgba(255,255,255,0.2)',
              fontSize: 12,
            }}
          >
            Screenshot
          </span>
        )}
      </div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  )
}

export default function ProjectModal({ projectKey, onClose }) {
  const modalRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    if (modalRef.current) modalRef.current.scrollTop = 0
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const p = PROJECTS[projectKey]
  if (!p) return null

  return (
    <div className="modal-overlay" ref={modalRef}>
      <div className="modal-content">
        {/* Header */}
        <div className="modal-header">
          <div className="nav-logo">
            <Logo size={28} />
            <span className="logo-name">Anthony Jones</span>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="white" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        {/* Title */}
        <section className="modal-section">
          <h1 className="modal-title">{p.title}</h1>
          <p className="modal-subtitle">{p.subtitle}</p>
        </section>

        {/* Meta */}
        <section className="modal-section modal-meta-grid">
          <div>
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">{p.role}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Scope</span>
              <span className="meta-value">{p.scope}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Team</span>
              <span className="meta-value">{p.team}</span>
            </div>
          </div>
          <div>
            <div className="meta-item">
              <span className="meta-label">Timeline</span>
              <span className="meta-value">{p.timeline}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Overview</span>
              <span className="meta-value">{p.overview}</span>
            </div>
          </div>
        </section>

        {/* Background */}
        <section className="modal-section">
          <h2 className="section-heading">Background</h2>
          <p className="body-text">{p.background}</p>
        </section>

        {/* Design Challenge */}
        {p.designChallenge && (
          <section className="modal-section">
            <h2 className="section-heading">{p.designChallenge.title}</h2>
            {p.designChallenge.paragraphs.map((para, i) => (
              <p className="body-text" key={i}>
                {para}
              </p>
            ))}
          </section>
        )}

        {/* Impact */}
        <section className="modal-section">
          <h2 className="section-heading">Impact</h2>
          <div className="impact-grid">
            {p.impact.map((m, i) => (
              <div className="impact-card" key={i}>
                <div className="impact-value">{m.value}</div>
                <div className="impact-label">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* What I Focused On */}
        <section className="modal-section">
          <h2 className="section-heading">What I Focused On</h2>
          <div className="focused-grid">
            {p.focused.map((f, i) => (
              <div className="focused-item" key={i}>
                <span className="focused-num">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <strong>{f.title}</strong> {f.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cross-Platform Experience */}
        <section className="modal-section">
          <h2 className="section-heading">Cross-Platform Experience</h2>
          <div className="platform-grid">
            {p.platforms.map((pl, i) => (
              <PlatformCard
                key={i}
                title={pl.title}
                desc={pl.desc}
                image={pl.image}
              />
            ))}
          </div>
        </section>

        {/* What I Learned */}
        <section className="modal-section">
          <h2 className="section-heading">What I Learned</h2>
          <div className="focused-grid">
            {p.learned.map((l, i) => (
              <div className="focused-item" key={i}>
                <span className="focused-num">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>{l}</div>
              </div>
            ))}
          </div>
        </section>

        <footer className="modal-footer">
          © Copyright {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  )
}

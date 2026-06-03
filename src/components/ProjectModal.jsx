import { useEffect, useRef, useState } from 'react'
import { PROJECTS } from '../data/projects'
import Logo from './Logo'

function PlatformCard({ title, desc, image, placeholderLabel, onImageClick }) {
  return (
    <div className="platform-card">
      <div
        className={`platform-card-img${image ? ' platform-card-img--clickable' : ''}`}
        onClick={image ? () => onImageClick(image, title) : undefined}
        role={image ? 'button' : undefined}
        tabIndex={image ? 0 : undefined}
        onKeyDown={
          image
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onImageClick(image, title)
                }
              }
            : undefined
        }
      >
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <span className="platform-card-placeholder">
            {placeholderLabel || 'Screenshot'}
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
  const [lightboxImage, setLightboxImage] = useState(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    if (modalRef.current) modalRef.current.scrollTop = 0
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const openLightbox = (src, alt) => setLightboxImage({ src, alt })
  const closeLightbox = () => setLightboxImage(null)

  const p = PROJECTS[projectKey]
  if (!p) return null

  return (
    <div
      className={`modal-overlay${lightboxImage ? ' modal-overlay--lightbox-open' : ''}`}
      ref={modalRef}
    >
      <div className="modal-content">
        {/* Header */}
        <div className="modal-header">
          <div className="nav-logo">
            <Logo size={32} />
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
            {p.team && (
              <div className="meta-item">
                <span className="meta-label">Team</span>
                <span className="meta-value">{p.team}</span>
              </div>
            )}
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
          {p.backgroundSections ? (
            p.backgroundSections.map((section, i) => (
              <div className="background-subsection" key={i}>
                <h3 className="subsection-heading">{section.title}</h3>
                {section.paragraphs.map((para, j) => (
                  <p className="body-text" key={j}>
                    {para}
                  </p>
                ))}
              </div>
            ))
          ) : (
            <p className="body-text">{p.background}</p>
          )}
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

        {/* Product / Platform Experience */}
        <section className="modal-section">
          <h2 className="section-heading">
            {p.platformsSectionTitle || 'Cross-Platform Experience'}
          </h2>
          {p.platformsIntro && (
            <p className="body-text platforms-intro">{p.platformsIntro}</p>
          )}
          <div className="platform-grid">
            {p.platforms.map((pl, i) => (
              <PlatformCard
                key={i}
                title={pl.title}
                desc={pl.desc}
                image={pl.image}
                placeholderLabel={pl.placeholderLabel}
                onImageClick={openLightbox}
              />
            ))}
          </div>
        </section>

        {/* Design Decisions */}
        {p.designDecisions && (
          <section className="modal-section">
            <h2 className="section-heading">Design Decisions</h2>
            <div className="focused-grid">
              {p.designDecisions.map((d, i) => (
                <div className="focused-item" key={i}>
                  <strong>{d.title}</strong> {d.desc}
                </div>
              ))}
            </div>
          </section>
        )}

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

        {/* Technical Details */}
        {p.technicalDetails && (
          <section className="modal-section">
            <h2 className="section-heading">Technical Details</h2>
            <div className="technical-details">
              <div className="meta-item">
                <span className="meta-label">Stack</span>
                <span className="meta-value">{p.technicalDetails.stack}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Role</span>
                <span className="meta-value">{p.technicalDetails.role}</span>
              </div>
            </div>
          </section>
        )}

        <footer className="modal-footer">
          © Copyright {new Date().getFullYear()}
        </footer>
      </div>

      {lightboxImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button
            className="lightbox-close modal-close"
            onClick={closeLightbox}
            aria-label="Close image"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="white" strokeWidth="1.5" />
            </svg>
          </button>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

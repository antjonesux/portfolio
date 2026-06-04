import { useRef, useState, useEffect } from 'react'
import { PROJECTS, PROJECT_ORDER } from '../data/projects'
import PlaceholderImage from './PlaceholderImage'

function handleCardKeyDown(e, key, onProjectClick) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    onProjectClick(key)
  }
}

export default function Work({ onProjectClick }) {
  const railRef = useRef(null)
  const [hasOverflowRight, setHasOverflowRight] = useState(false)

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return

    const updateOverflow = () => {
      const hasOverflow = rail.scrollWidth > rail.clientWidth + 1
      const notAtEnd = rail.scrollLeft + rail.clientWidth < rail.scrollWidth - 1
      setHasOverflowRight(hasOverflow && notAtEnd)
    }

    updateOverflow()

    rail.addEventListener('scroll', updateOverflow, { passive: true })
    window.addEventListener('resize', updateOverflow)

    return () => {
      rail.removeEventListener('scroll', updateOverflow)
      window.removeEventListener('resize', updateOverflow)
    }
  }, [])

  return (
    <section id="work" className="work-section">
      <div className="work-container">
        <div
          className={`work-rail-window${hasOverflowRight ? ' has-overflow-right' : ''}`}
        >
          <div className="work-rail" role="list" ref={railRef}>
            {PROJECT_ORDER.map((key) => {
              const p = PROJECTS[key]
              return (
                <div
                  className="work-card"
                  key={key}
                  role="listitem"
                  tabIndex={0}
                  aria-label={`View ${p.title} case study`}
                  onClick={() => onProjectClick(key)}
                  onKeyDown={(e) => handleCardKeyDown(e, key, onProjectClick)}
                >
                  <div className="work-card-img">
                    {p.cardImage ? (
                      <img src={p.cardImage} alt={p.title} />
                    ) : (
                      <PlaceholderImage
                        label={p.cardImageLabel || `${p.title} — screenshot`}
                        aspect="1/0.82"
                      />
                    )}
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.cardSubtitle}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

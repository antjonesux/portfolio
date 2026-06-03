import { PROJECTS, PROJECT_ORDER } from '../data/projects'
import PlaceholderImage from './PlaceholderImage'

function handleCardKeyDown(e, key, onProjectClick) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    onProjectClick(key)
  }
}

export default function Work({ onProjectClick }) {
  return (
    <section id="work" className="work-section">
      <div className="work-container">
        <div className="work-rail-window">
          <div className="work-rail" role="list">
            {PROJECT_ORDER.map((key) => {
              const p = PROJECTS[key]
              return (
                <div
                  className="work-card"
                  key={key}
                  role="listitem"
                  tabIndex={0}
                  aria-label={`View case study: ${p.title}`}
                  onClick={() => onProjectClick(key)}
                  onKeyDown={(e) => handleCardKeyDown(e, key, onProjectClick)}
                >
                  <div className="work-card-img">
                    {p.cardImage ? (
                      <img src={p.cardImage} alt={p.title} />
                    ) : (
                      <PlaceholderImage
                        label={p.cardImageLabel || `${p.title} — screenshot`}
                      />
                    )}
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.cardSubtitle}</p>
                  <span className="work-card-cta">View Case Study →</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

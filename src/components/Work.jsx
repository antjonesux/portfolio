import { PROJECTS } from '../data/projects'
import PlaceholderImage from './PlaceholderImage'

export default function Work({ onProjectClick }) {
  return (
    <section id="work" className="work-section">
      <h2>Work</h2>
      <p className="work-intro">
        Two projects, two ends of the spectrum — building a design function from
        zero at a startup, and redesigning at massive scale for a federal agency.
        Together, they show how I think across contexts.
      </p>
      <div className="work-grid">
        {['usps', 'aimsplus'].map((key) => {
          const p = PROJECTS[key]
          return (
            <div
              className="work-card"
              key={key}
              onClick={() => onProjectClick(key)}
            >
              <div className="work-card-img">
                {p.cardImage ? (
                  <img src={p.cardImage} alt={p.title} />
                ) : (
                  <PlaceholderImage label={`${p.title} — screenshot`} />
                )}
              </div>
              <h3>{p.title}</h3>
              <p>{p.cardSubtitle}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

import aboutPhoto from '../assets/about.png'

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2>About</h2>
      <div className="about-grid">
        <div className="about-photo">
          <img src={aboutPhoto} alt="Anthony Jones" />
        </div>
        <div className="about-text">
          <h3>
            From building a design function at a startup to shipping products
            used by tens of millions — I work where complexity meets clarity.
          </h3>
          <p>
            I've done the zero-to-one work — creating design systems, processes,
            and culture where none existed — and I've operated at scale,
            designing for 74M+ users where every decision compounds. I work best
            at the intersection of those two things: where the system needs to
            grow but the experience needs to stay simple.
          </p>
        </div>
      </div>
    </section>
  )
}

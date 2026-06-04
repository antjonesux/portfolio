import aboutPhoto from '../assets/about.png'

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About</h2>
      <div className="about-grid">
        <div className="about-photo">
          <img src={aboutPhoto} alt="Anthony Jones" />
        </div>
        <div className="about-text">
          <h3 className="large-copy">
            From building a design function at a startup to shipping products
            used by tens of millions — I work where complexity meets clarity.
          </h3>
          <p>
            I've done the zero-to-one work — creating design systems, processes,
            and culture where none existed — and I've operated at scale,
            designing for 74M+ users where every decision compounds. I've also
            shipped products end-to-end, owning everything from strategy and UX
            to development and launch. The problems I'm most drawn to now are
            the ones where complexity is unavoidable — but clarity is still the
            goal.
          </p>
        </div>
      </div>
    </section>
  )
}

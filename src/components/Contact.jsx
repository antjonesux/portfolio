import resumePdf from '../assets/resume.pdf'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <div className="contact-card">
        <h3>Let's build something that scales.</h3>
        <p>
          I'm open to new opportunities — freelance, contract, or full-time.
          If you're working on something complex and need a designer who can
          think at a systems level, I'd like to hear about it.
        </p>
        <div className="contact-actions">
          <a
            href="mailto:anthonyjonesux@gmail.com"
            className="contact-cta"
          >
            Get in touch
          </a>
          <a
            href={resumePdf}
            className="contact-cta contact-cta--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/anthonyjonesatl/"
            className="contact-cta contact-cta--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

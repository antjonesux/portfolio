export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <div className="contact-grid">
        <div className="contact-card">
          <h3>Looking for a designer who thinks strategically?</h3>
          <p>
            I'm currently open to new opportunities — freelance, contract, or
            full-time. If you're building something and think I can help, let's
            talk.
          </p>
          <p style={{ margin: 0 }}>
            Shoot me a note with your details at{' '}
            <a href="mailto:anthonyjonesux@gmail.com" className="contact-email">
              anthonyjonesux@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-links">
          <h4>Links</h4>
          <a href="#" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

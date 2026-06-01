const capabilities = [
  { skill: 'Systems Thinking', proof: 'Cross-platform architecture across desktop, mobile & PDA' },
  { skill: 'UX Strategy', proof: 'Led design direction for a 74M-user product' },
  { skill: 'Product Design', proof: 'End-to-end ownership from research to shipped features' },
  { skill: 'UI Design', proof: 'Modernized legacy interfaces at enterprise scale' },
  { skill: 'Prototyping', proof: 'Prototype-driven validation that saved weeks of engineering' },
  { skill: 'Research', proof: 'Field research on warehouse floors and stakeholder interviews' },
  { skill: 'Design Systems', proof: "Built AIMSPlus's component library from zero" },
  { skill: 'Collaboration', proof: 'Partnered with PMs, BAs, and developers across both orgs' },
  { skill: 'Web Design', proof: 'Responsive consumer and business-facing web products' },
]

export default function Capabilities() {
  return (
    <section className="capabilities-section">
      <h2>Capabilities</h2>
      <div className="caps-grid">
        {capabilities.map((c) => (
          <div className="cap-item" key={c.skill}>
            <span className="cap-skill">{c.skill}</span>
            <span className="cap-proof">{c.proof}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

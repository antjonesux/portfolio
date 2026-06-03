const capabilities = [
  { skill: 'Systems Thinking', proof: 'Cross-platform architecture across desktop, mobile & PDA' },
  { skill: 'UX Strategy', proof: 'Led design direction for a product serving 74M+ users' },
  { skill: 'Design Systems', proof: "Built AIMSPlus's component library from zero" },
  { skill: 'Prototyping', proof: 'Prototype-driven validation that saved weeks of engineering' },
  { skill: 'Research', proof: 'Field research on warehouse floors that reshaped product direction' },
  { skill: 'Product Design', proof: 'End-to-end ownership from discovery through shipped features' },
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

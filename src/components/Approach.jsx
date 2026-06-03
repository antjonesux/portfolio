const approach = [
  {
    title: 'Audit before you act.',
    desc: 'At USPS, I mapped three undocumented product surfaces before proposing a single change. Understanding what exists is the first design decision.',
  },
  {
    title: 'Get off the screen.',
    desc: 'At AIMSPlus, what stakeholders described and what warehouse workers actually did were never the same. The best decisions came from the loading dock, not the conference room.',
  },
  {
    title: "Show, don't tell.",
    desc: 'I prototype early because opinions change when people can interact with something real. At USPS, every prototype went through stakeholder review before it touched engineering.',
  },
  {
    title: 'Build the system, not just the screen.',
    desc: 'At AIMSPlus, I built a component library from zero while shipping features. Every week I delayed formalizing a pattern, I paid for it in inconsistency.',
  },
  {
    title: 'Design for the handoff.',
    desc: "Clean, developer-ready files saved weeks at USPS. At this scale, design debt doesn't just slow you down — it compounds every sprint.",
  },
  {
    title: 'Earn the change.',
    desc: 'Redesigning legacy products at scale means proving every decision. I build the case before I build the interface.',
  },
]

export default function Approach() {
  return (
    <section className="approach-section">
      <h2>Approach</h2>
      <div className="approach-grid">
        {approach.map((a, i) => (
          <div className="approach-item" key={i}>
            <span className="approach-num">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="approach-body">
              <strong>{a.title}</strong> {a.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

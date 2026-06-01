const approach = [
  {
    title: 'Start together.',
    desc: "I bring teams in early — design is better when everyone's part of the conversation.",
  },
  {
    title: 'Move fast, stay sharp.',
    desc: 'Quick, focused iterations help us explore widely and zero in on what works.',
  },
  {
    title: "Show, don't tell.",
    desc: 'I prototype early and often to make ideas real and decisions faster.',
  },
  {
    title: 'Build for growth.',
    desc: 'I think in systems — every component should scale and support the bigger picture.',
  },
  {
    title: 'Design in context.',
    desc: 'I ground decisions in real workflows, not just edge cases or best guesses.',
  },
  {
    title: 'Stay flexible.',
    desc: "Not every idea will land. I test, refine, and move forward — always focused on the goal.",
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

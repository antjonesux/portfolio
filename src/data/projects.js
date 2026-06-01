/*
 * Project data — edit content here.
 *
 * Images: import from src/assets/ or public/images/
 * and assign to the relevant field. Placeholder strings
 * are used until you drop in real assets.
 */

export const PROJECTS = {
  usps: {
    id: 'usps',
    title: 'USPS Informed Delivery',
    subtitle: 'Modernizing how millions of Americans connect with their mail.',
    cardSubtitle: 'Designing for 74M Americans',
    cardImage: null, // replace with: import uspsCard from '../assets/usps-card.png'
    role: 'Senior UX Designer',
    timeline: 'Jan 2023 - Present',
    scope: 'Web, Email, & Dashboard Redesigns',
    team: 'PM, BA, Developers, SME',
    overview:
      'Informed Delivery — a digital tool helping USPS users preview, track, and interact with their mail before it hits the mailbox.',
    background:
      "Mail hasn't kept pace with the digital world. Consumers lacked visibility. Business mailers lacked tracking. USPS needed to modernize. My job was to help turn a legacy process into a daily, connected experience.",
    designChallenge: {
      title: 'The Hard Part',
      paragraphs: [
        "When I came onto Informed Delivery, I expected a product with 74 million users to have documentation, established patterns, and a clear design direction. It didn't. The Mailer Campaign Portal, Daily Digest, and Consumer Dashboard had all been built at different times by different teams — each with its own patterns, its own logic, and its own way of solving the same problems. Nothing was written down.",
        "So before I could redesign anything, I had to understand what actually existed. That meant auditing three separate product surfaces, mapping patterns nobody had documented, and figuring out which inconsistencies were bugs and which ones were load-bearing decisions that millions of people depended on. At this scale, you don't get to move fast and break things — every change has to survive stakeholder review, accessibility requirements, and the reality that a bad decision doesn't affect a handful of users. It affects millions.",
      ],
    },
    impact: [
      { value: '74M+', label: 'users and growing' },
      { value: '58.6%', label: 'daily open rate' },
      { value: '94%', label: 'user satisfaction' },
      { value: '7.9B', label: 'campaign impressions' },
    ],
    focused: [
      {
        title: 'Audit before you design.',
        desc: "Mapped existing patterns across MCP, Daily Digest, and Dashboard before touching anything — understanding what existed was the only way to know what actually needed to change.",
      },
      {
        title: 'Validate at every gate.',
        desc: "With 74M+ users, no assumption could go untested. Prototypes went through stakeholder review at every stage to catch problems before they became engineering costs.",
      },
      {
        title: 'Design for the developer, not just the user.',
        desc: "Clean, component-ready files meant the team shipped faster without losing fidelity. At this scale, design debt isn't a minor inconvenience — it compounds every sprint.",
      },
      {
        title: 'Modernize without alienating.',
        desc: 'Redesigning legacy interfaces at this scale means earning trust with every decision, not just pushing aesthetic updates.',
      },
    ],
    platforms: [
      {
        title: 'Mailer Campaign Portal',
        desc: 'The business portal behind 7.9B campaign impressions',
        image: null, // replace with imported image
      },
      {
        title: 'Daily Digest',
        desc: 'Redesigning the daily email experience for 74M Americans',
        image: null,
      },
      {
        title: 'Consumer Dashboard',
        desc: 'The consumer hub for 74M+ Informed Delivery users',
        image: null,
      },
    ],
    learned: [
      "USPS had years of established patterns that weren't wrong — they were undocumented. Building real consistency meant mapping what existed before deciding what to change. Auditing is designing.",
      "At 74 million users, an accessibility gap isn't a minor issue — it's millions of people excluded. Designing for the full range of human ability isn't a checkbox. At this scale, it's the baseline.",
      "Investing in clean, developer-ready files early paid dividends every sprint — fewer questions, fewer revisions, faster shipping. On a product this size, the cost of a late design change isn't days, it's months.",
      "Every problem caught in prototype review saved weeks of engineering time. The biggest leverage point in a project this size isn't the final design — it's how early you can surface the hard decisions.",
    ],
  },

  aimsplus: {
    id: 'aimsplus',
    title: 'AIMSPlus App',
    subtitle: 'Redesigning warehouse operations for the telecom industry.',
    cardSubtitle: 'Building a design system from zero',
    cardImage: null,
    role: 'UX Lead',
    timeline: 'June 2021 – May 2026',
    scope: 'Desktop, Mobile, & PDA Scanner',
    team: 'CIO, CTO, PM, BA, Developers, SME',
    overview:
      'AIMSPlus — a warehouse management system helping telecom teams track materials, reduce inventory loss, and streamline fulfillment across North America.',
    background:
      "AIMSPlus is a warehouse management system used by telecom clients like T-Mobile to track inventory, reduce loss, and streamline fulfillment. When I joined, the product was feature-heavy and lacked a clear experience. My role was to rethink the experience — simplify complex workflows, modernize the interface, and design a system that worked seamlessly across desktop, mobile, and PDA scanner.",
    designChallenge: {
      title: 'The Hard Part',
      paragraphs: [
        "When I joined AIMSPlus, there was no design function — no system, no patterns, no components, no shared language between design and engineering. The product had been built entirely by developers solving problems as they came, which meant every screen had its own logic, its own layout, and its own way of handling the same tasks.",
        "But the bigger challenge was the gap between the product and the people using it. Warehouse workers operating PDA scanners on loading docks don't have time for confusing interfaces. What stakeholders described as the workflow and what actually happened on the floor were rarely the same thing. I had to get out of the building — literally — to understand how work really moved, then design a system flexible enough to handle desktop scheduling, mobile field operations, and handheld scanning without forcing users to think differently on each device.",
      ],
    },
    impact: [
      { value: '100k+', label: 'pickups scheduled and deployed via app' },
      { value: '69%', label: 'drop in compromised inventory' },
      { value: '99%', label: 'reduction in manual processes' },
      { value: '$2M+', label: 'saved through load optimization' },
    ],
    focused: [
      {
        title: 'Design for clarity.',
        desc: 'Simplified complex, engineer-built workflows into intuitive, role-based experiences — reducing confusion and increasing task success across all user types.',
      },
      {
        title: 'Modernize the experience.',
        desc: "Warehouse workers had workflows that defied what documentation described. The only way to design something that actually worked was to get off the screen and into the field — what people said they did and what they actually did were rarely the same thing.",
      },
      {
        title: 'Reduce on-site training.',
        desc: "The features users adopted fastest weren't the most sophisticated ones — they were the ones that mapped exactly to how work happened on the floor. The lesson: complexity is invisible when the design is right.",
      },
      {
        title: 'Support the real work.',
        desc: "Validated ideas with warehouse teams and stakeholders to ensure the product aligned with how people actually work — not just how it was imagined.",
      },
    ],
    platforms: [
      {
        title: 'Order Management',
        desc: 'Scheduling 100k+ pickups across North America',
        image: null,
      },
      {
        title: 'Field Operations',
        desc: 'Scan-based mobile workflow for warehouse teams',
        image: null,
      },
      {
        title: 'Deployment Tracking',
        desc: 'Real-time status and signature capture in the field',
        image: null,
      },
    ],
    learned: [
      "There was no design system when I arrived — no components, no tokens, no shared patterns. Building one from scratch while simultaneously shipping features taught me that a design system isn't a side project. It's the infrastructure that makes everything else possible. Every week I delayed formalizing a pattern, I paid for it three times over in inconsistency.",
      "The gap between what stakeholders described and what warehouse workers actually did was enormous. I stopped designing from conference rooms and started designing from loading docks. The best design decisions I made at AIMSPlus came from watching someone struggle with a PDA scanner in one hand and a pallet in the other.",
      "Designing across desktop, mobile, and PDA scanner meant the same workflow had to feel native on three fundamentally different devices. I learned that cross-platform consistency isn't about making things look the same — it's about making them work the same way, even when the interaction model is completely different.",
      "When you're the only designer at a startup reporting to the CIO and CTO, every design decision is also a business conversation. I learned to frame design work in terms of operational cost, training time, and error reduction — because that's the language that gets design a seat at the table when there's no design culture to lean on.",
    ],
  },
}

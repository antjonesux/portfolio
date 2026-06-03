/*
 * Project data — edit content here.
 *
 * Images: import from src/assets/ or public/images/
 * and assign to the relevant field. Placeholder strings
 * are used until you drop in real assets.
 */

import uspsCard from '../assets/usps1.png'
import aimsplusCard from '../assets/aims1.png'
import uspsMCP from '../assets/usps2.png'
import uspsDailyDigest from '../assets/usps3.png'
import uspsConsumerDashboard from '../assets/usps4.png'
import aimsplusOrderManagement from '../assets/aims2.png'
import aimsplusFieldOperations from '../assets/aims3.png'
import aimsplusDeploymentTracking from '../assets/aims4.png'
import sidelineCard from '../assets/sideline1.png'

export const PROJECT_ORDER = ['usps', 'aimsplus', 'sideline']

export const PROJECTS = {
  usps: {
    id: 'usps',
    title: 'USPS Informed Delivery',
    subtitle: 'Modernizing how millions of Americans connect with their mail.',
    cardSubtitle:
      'Redesigned core USPS experiences used by 74M+ consumers nationwide.',
    cardImage: uspsCard,
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
        image: uspsMCP,
      },
      {
        title: 'Daily Digest',
        desc: 'Redesigning the daily email experience for 74M Americans',
        image: uspsDailyDigest,
      },
      {
        title: 'Consumer Dashboard',
        desc: 'The consumer hub for 74M+ Informed Delivery users',
        image: uspsConsumerDashboard,
      },
    ],
    learned: [
      "USPS had years of established patterns that weren't wrong — they were undocumented. Building real consistency meant mapping what existed before deciding what to change. Auditing is designing.",
      "At 74 million users, an accessibility gap isn't a minor issue — it's millions of people excluded. Designing for the full range of human ability isn't a checkbox. At this scale, it's the baseline.",
      "Investing in clean, developer-ready files early paid dividends every sprint — fewer questions, fewer revisions, faster shipping. On a product this size, the cost of a late design change isn't days, it's months.",
      "Every problem caught in prototype review saved weeks of engineering time. The biggest leverage point in a project this size isn't the final design — it's how early you can surface the hard decisions.",
    ],
  },

  sideline: {
    id: 'sideline',
    title: 'The Sideline',
    subtitle:
      'A coaching intelligence app for competitive College Football gamers.',
    cardSubtitle:
      'Designed and shipped a coaching intelligence SaaS product in 5 weeks, end-to-end.',
    // TODO: Replace with a phone mockup showing The Sideline Play Logger or Tendencies screen.
    cardImage: sidelineCard,
    cardImageLabel:
      'TODO: Replace with a phone mockup showing The Sideline Play Logger or Tendencies screen.',
    role: 'Founder · Product Designer · Developer',
    timeline: 'April 2026 – May 2026',
    scope: 'Product Strategy, UX/UI, Frontend, Backend',
    overview:
      'Designed and shipped a production coaching tool that helps competitive players study tendencies, build game plans, and make better play-calling decisions over time.',
    backgroundSections: [
      {
        title: 'The Problem',
        paragraphs: [
          'CFB26 has one of the deepest playbook systems in sports gaming — 134 team playbooks, hundreds of formations, and thousands of decisions across a season. Yet players have no way to study their own play-calling behavior.',
          'Competitive dynasty players care about scheme identity. They spend hours building rosters, scouting opponents, and learning playbooks, but when it comes to calling plays, most decisions are still driven by memory and instinct.',
          "The gap wasn't access to plays. The gap was intelligence.",
        ],
      },
      {
        title: 'The Opportunity',
        paragraphs: [
          'The existing ecosystem offered playbook browsers, recruiting tools, and roster management. Nobody was helping players understand what actually works for them.',
          'I saw an opportunity to create a coaching loop that turns play-calling decisions into actionable insight.',
        ],
      },
    ],
    designChallenge: {
      title: 'The Hard Part',
      paragraphs: [
        "The challenge wasn't building a play logger.",
        'It was solving the effort-to-value problem.',
        'The product only becomes valuable after users generate data. But generating that data requires effort. If logging feels like work, users stop. If users stop logging, there is no insight. Without insight, there is no product.',
        'Early testing revealed a critical insight: the app worked best when players chose their play inside the app before running it in-game. Logging became a byproduct of calling rather than a separate task.',
        'That insight fundamentally changed the product.',
        'The Sideline stopped being a logging tool and became a coaching tool.',
      ],
    },
    impact: [
      { value: '134+', label: 'Playbooks mapped and classified' },
      { value: '15', label: 'Situational coaching frameworks' },
      { value: '5 Weeks', label: 'From idea to production' },
      { value: '3', label: 'Iterations of the core interaction' },
    ],
    focused: [
      {
        title: 'Design the loop, not the features.',
        desc: 'The product is a compounding system. Play sheets feed logging. Logging feeds tendencies. Tendencies improve future game plans. Every feature had to strengthen that loop.',
      },
      {
        title: 'Make logging a byproduct.',
        desc: 'The biggest risk was user fatigue. Integrating play sheets directly into the logger transformed logging from a task into part of the coaching workflow.',
      },
      {
        title: "Match the user's mental model.",
        desc: 'Every surface uses coaching language and coaching structure. Film Room, Game Plan, and Tendencies mirror how coaches prepare, review, and adjust.',
      },
      {
        title: "Ship what's validated.",
        desc: 'Several features were intentionally removed or deferred before launch. The goal was proving the loop, not maximizing feature count.',
      },
    ],
    platformsSectionTitle: 'Three Pillars, One Loop',
    platformsIntro:
      'The app architecture mirrors how a real coaching staff operates: film room for data, game plan for preparation, tendencies for analysis.',
    platforms: [
      {
        title: 'Film Room',
        desc: 'The operational hub for game review and play logging. Players create games, track drives, and capture every play call while maintaining context around score, field position, and game situation.',
        image: null,
        // TODO: Film Room screenshot; TODO: Play Logger screenshot with YOUR CALLS visible
        placeholderLabel: 'TODO: Film Room / Play Logger screenshot',
      },
      {
        title: 'Game Plan',
        desc: 'A situational play sheet organized around fifteen coaching scenarios. Players build and refine a strategy before kickoff while performance data continuously improves recommendations.',
        image: null,
        // TODO: Game Plan / Play Sheet Editor screenshot
        placeholderLabel: 'TODO: Game Plan / Play Sheet Editor screenshot',
      },
      {
        title: 'Tendencies',
        desc: 'The intelligence layer. Cross-game analytics reveal what works, where players become predictable, and how behavior changes under pressure.',
        image: null,
        // TODO: Tendencies screenshot showing What's Working or Am I Predictable
        placeholderLabel: "TODO: Tendencies — What's Working or Am I Predictable",
      },
    ],
    designDecisions: [
      {
        title: 'Field Position Instead of Yardage',
        desc: 'Players naturally know where the ball ended up, not how many yards they gained. Switching to field position reduced friction and removed mental calculations during gameplay.',
      },
      {
        title: 'Three Logger Iterations',
        desc: 'The most important interaction in the product was redesigned three times before launch. Simplicity emerged through testing rather than assumptions.',
      },
      {
        title: 'Belief Before Effort',
        desc: 'Onboarding focuses on value first. Players see the coaching loop before being asked to configure teams, playbooks, or game plans.',
      },
      {
        title: 'Building With Multiple AI Agents',
        desc: 'Managing multiple AI coding agents introduced a new systems-design challenge. Shared contracts, ownership rules, and structured handoffs prevented architectural drift and maintained consistency across the product.',
      },
    ],
    learned: [
      "The hardest problem wasn't interface design. It was reducing the gap between effort and value.",
      'Domain expertise accelerates product decisions but can hide onboarding friction.',
      'Removing features is often more important than shipping them.',
      'The same systems thinking that creates design consistency can also create development consistency.',
    ],
    technicalDetails: {
      stack:
        'Next.js · React 19 · Supabase · Tailwind · shadcn/ui · Zustand · TanStack Query · Recharts · Vercel',
      role: 'Product Strategy · UX/UI Design · Frontend Development · Backend Development · QA · Launch Planning',
    },
  },

  aimsplus: {
    id: 'aimsplus',
    title: 'AIMSPlus App',
    subtitle: 'Redesigning warehouse operations for the telecom industry.',
    cardSubtitle:
      'Built the design function from scratch — systems, patterns, and workflows.',
    cardImage: aimsplusCard,
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
        image: aimsplusOrderManagement,
      },
      {
        title: 'Field Operations',
        desc: 'Scan-based mobile workflow for warehouse teams',
        image: aimsplusFieldOperations,
      },
      {
        title: 'Deployment Tracking',
        desc: 'Real-time status and signature capture in the field',
        image: aimsplusDeploymentTracking,
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

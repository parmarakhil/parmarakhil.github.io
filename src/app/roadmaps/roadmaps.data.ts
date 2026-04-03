export interface RoadmapStage {
  id: string;
  title: string;
  subtitle: string;
  focus: string;
  highlights: string[];
  flowSteps?: string[];
}

export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    id: 'college-students',
    title: 'College Students (1-2 years)',
    subtitle: 'Build depth early and compound fast.',
    focus: 'DSA, AI, Projects',
    flowSteps: ['Foundations', 'DSA', 'AI + Projects', 'LLD', 'HLD'],
    highlights: [
      'Master core CS fundamentals: OOP, DBMS, OS, networking.',
      'Follow a consistent DSA ladder from arrays to graph problems.',
      'Ship at least 2 AI-powered projects with clear documentation.',
      'Start low-level design with practical components and APIs.',
      'Finish with high-level architecture thinking for interviews.'
    ]
  },
  {
    id: 'early-career',
    title: 'Early Career (1-4 years)',
    subtitle: 'Balance coding depth with system design maturity.',
    focus: 'Balanced: DSA, LLD, HLD, AI',
    highlights: [
      'Maintain DSA sharpness for switch-ready interview performance.',
      'Practice LLD patterns using production-like coding exercises.',
      'Level up HLD with tradeoff-driven architecture case studies.',
      'Use AI tools for productivity, testing, debugging, and delivery.',
      'Build impact stories tied to measurable outcomes at work.'
    ]
  },
  {
    id: 'experienced-engineers',
    title: 'Experienced Engineers (5+ years)',
    subtitle: 'Architect for scale, reliability, and leverage.',
    focus: 'HLD-heavy: distributed systems, scalability, AI systems',
    highlights: [
      'Design distributed systems with fault tolerance and observability.',
      'Plan scalability strategies: sharding, caching, async pipelines.',
      'Own reliability through SLOs, incident reviews, and resilience.',
      'Design AI-native systems: retrieval, evaluation, guardrails.',
      'Lead architectural decisions with business and org alignment.'
    ]
  }
];

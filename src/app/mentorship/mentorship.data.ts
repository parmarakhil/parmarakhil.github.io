export interface MentorshipPlan {
  name: string;
  price?: string;
  duration?: string;
  subtitle?: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  ctaLabel: string;
  ctaUrl: string;
  pricingOptions?: MentorshipPricingOption[];
}

export interface MentorshipPricingOption {
  label: string;
  price: string;
  duration: string;
  badge?: string;
  isPopular?: boolean;
}

export interface MentorshipValueColumn {
  title: string;
  description: string;
  points: string[];
}

export interface MentorshipStep {
  step: string;
  title: string;
  description: string;
}

export interface MentorshipTestimonial {
  name: string;
  role: string;
  quote: string;
}

export const BOOK_SESSION_URL = 'https://topmate.io/akhil_parmar';
export const APPLY_NOW_URL = 'https://www.propeers.in/profile/akhilparmar';

export const MENTORSHIP_PLANS: MentorshipPlan[] = [
  {
    name: 'Starter',
    price: '₹199',
    features: [
      '1:1 quick guidance (20 mins)',
      'Resume feedback'
    ],
    ctaLabel: 'Book Now',
    ctaUrl: BOOK_SESSION_URL
  },
  {
    name: 'Growth',
    price: '₹2,499',
    badge: 'Most Popular',
    isPopular: true,
    features: [
      '3 mock interviews',
      'Personalized roadmap',
      'Resume + LinkedIn review'
    ],
    ctaLabel: 'Start Preparation',
    ctaUrl: BOOK_SESSION_URL
  },
  {
    name: 'Elite Mentorship',
    subtitle: 'Choose the duration that matches your preparation runway.',
    pricingOptions: [
      {
        label: 'Option A',
        price: '₹7,999',
        duration: '1 Month'
      },
      {
        label: 'Option B',
        price: '₹14,999',
        duration: '2 Months',
        badge: 'Most Popular',
        isPopular: true
      },
      {
        label: 'Option C',
        price: '₹20,999',
        duration: '3 Months'
      }
    ],
    features: [
      'Weekly 1:1 sessions',
      'AI ready roadmap',
      'DSA + LLD + HLD structured prep',
      'Mock interviews',
      'Async support'
    ],
    ctaLabel: 'Apply Now',
    ctaUrl: APPLY_NOW_URL
  }
];

export const MENTORSHIP_VALUE_COLUMNS: MentorshipValueColumn[] = [
  {
    title: 'Technical Prep',
    description: 'Build interview-ready confidence with a structured plan instead of random practice.',
    points: ['DSA prioritization', 'LLD interview patterns', 'Mock interview feedback']
  },
  {
    title: 'Career Strategy',
    description: 'Position yourself better for product-based companies and stronger interview funnels.',
    points: ['Resume storytelling', 'LinkedIn improvements', 'Target-company strategy']
  },
  {
    title: 'Execution & Accountability',
    description: 'Stay consistent with milestones, review loops, and support when momentum drops.',
    points: ['Weekly checkpoints', 'Focused action plan', 'Preparation accountability']
  }
];

export const MENTORSHIP_AUDIENCE_POINTS: string[] = [
  'Engineers stuck in service companies',
  'Not getting interview calls',
  'Lacking structured preparation'
];

export const MENTORSHIP_STEPS: MentorshipStep[] = [
  {
    step: '01',
    title: 'Book / Apply',
    description: 'Choose the plan that matches your current stage and urgency.'
  },
  {
    step: '02',
    title: 'Get roadmap',
    description: 'Receive a focused prep roadmap based on your profile and goals.'
  },
  {
    step: '03',
    title: 'Weekly sessions',
    description: 'Work through feedback, mocks, and preparation priorities with clarity.'
  },
  {
    step: '04',
    title: 'Crack interviews',
    description: 'Show up prepared for interviews with better answers, stronger stories, and sharper execution.'
  }
];

export const MENTORSHIP_TESTIMONIALS: MentorshipTestimonial[] = [
  {
    name: 'Vaibhav Kansagara',
    role: 'SDE II at Microsoft (Amazon -> Microsoft)',
    quote: 'Had a great mock interview session on Low Level Design. Learned a lot and got valuable feedback on what areas I need to focus on and improve. Really appreciate the quality of the questions.'
  },
  {
    name: 'Dhaval Mavani',
    role: 'SDE at Amazon (JPMC Intern -> Amazon)',
    quote: "Akhil's approach was highly professional and engaging, making the session feel like a real interview. The feedback provided by him was insightful and actionable, giving me clarity on areas to improve. Overall, it was a great learning experience."
  },
  {
    name: 'Ayush Kumar',
    role: 'Software Developer at Oracle (HighRadius -> Oracle)',
    quote: 'I found the mock interview very helpful for interview preparation. Got valuable feedback on faults in my approach and tips to improve upon.'
  }
];

export const MENTORSHIP_HERO_POINTS: string[] = [
  'DSA planning',
  'LLD interview prep',
  'Resume positioning',
  'Real mock feedback'
];

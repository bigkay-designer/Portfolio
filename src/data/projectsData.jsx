// src/data/projects.js
import technoImg from '../assets/images/showcase-techno.png';
import unityImg from '../assets/images/showcase-uhc.png';
import horumarImg from '../assets/images/showcase-horumar.png';
import framerImg from '../assets/images/showcase-framer.png';
import edtechImg from '../assets/images/showcase-insights.jpg';
import covidImg from '../assets/images/showcase-covid.png';

export const projects = [
  {
    id: 1,
    title: 'TechnoEFX',
    description:
      'AI-driven automation platform reducing operational costs by 40% for SMEs.',
    category: 'tech',
    era: 'current',
    year: '2023',
    role: 'Technology Solutions Consultant',
    tech: ['React', 'Node.js', 'AWS', 'Strapi', 'Automation'],
    thumbnail: technoImg,
    link: 'https://technoefx.com',
    repo: 'https://github.com/yourusername/technoefx',
    highlights: [
      'Designed digital solutions for freelancers, SMEs, and community organizations',
      'Streamlined operations through automation and system integration',
      'Developed personal/business websites enhancing online presence',
    ],
    impact: [
      '30% efficiency gains',
      '40% cost reduction',
      'Full-stack solutions',
    ],
    metrics: [
      {name: 'Cost Savings', value: '40%', improvement: true},
      {name: 'Processing Time', value: '2.5s → 0.8s', improvement: true},
      {name: 'User Adoption', value: '92%', improvement: true},
    ],
    challenges: [
      'Legacy system integration required creative middleware solutions',
      'Balancing automation with human oversight needs',
      'Ensuring data security across multiple SME environments',
    ],
    solutions: [
      'Developed custom API gateway for seamless integration',
      'Implemented hybrid automation with human review points',
      'Built robust encryption and access control systems',
    ],
    testimonial: {
      quote:
        'TechnoEFX transformed our operations, saving us thousands in manual work while improving accuracy.',
      author: 'Jane Smith',
      position: 'COO at SmallBiz Inc',
      avatar: '/images/avatars/jane-smith.jpg',
    },
    period: 'Nov 2023 – Present',
    tags: ['Automation', 'AI', 'SaaS'],
    gradient: 'from-gray-900 to-gray-800',
    textColor: 'text-white',
    deliverables: ['Web Platform', 'Admin Dashboard', 'Mobile App'],
    teamSize: 5,
    client: 'Various SMEs',
  },
  {
    id: 2,
    title: 'Unity Horizons CIC',
    description:
      'Empowering youth through mentorship matching and community events with real-time insights.',
    category: 'community',
    era: 'current',
    year: '2024',
    role: 'Director',
    tech: ['Community Building', 'Program Development', 'Partnerships'],
    thumbnail: unityImg,
    link: 'https://unityhorizons.com',
    repo: null,
    highlights: [
      'Co-led vision and operations for social mobility initiatives',
      'Scaled skills training and mentorship programs',
      'Established collaborations with local authorities',
    ],
    impact: [
      '40% engagement boost',
      '£30k funding secured',
      '500+ youth impacted',
    ],
    metrics: [
      {name: 'Participant Growth', value: '300%', improvement: true},
      {name: 'Program Completion', value: '85%', improvement: true},
      {name: 'Partner Orgs', value: '12', improvement: true},
    ],
    challenges: [
      'Engaging diverse youth demographics',
      'Securing sustainable funding',
      'Measuring long-term impact',
    ],
    solutions: [
      'Developed targeted outreach programs',
      'Established corporate sponsorship pipeline',
      'Implemented longitudinal tracking system',
    ],
    testimonial: {
      quote:
        'Unity Horizons has been transformative for our community, creating opportunities where none existed before.',
      author: 'Michael Johnson',
      position: 'Community Leader',
      avatar: '/images/avatars/michael-johnson.jpg',
    },
    period: 'Feb 2024 – Present',
    tags: ['Social Impact', 'Education', 'Non-profit'],
    gradient: 'from-gray-900 to-gray-800',
    textColor: 'text-white',
    deliverables: ['Mentorship Program', 'Event Series', 'Impact Reports'],
    teamSize: 8,
    client: 'Local Community',
  },
  {
    id: 3,
    title: 'Framer Templates Library',
    description:
      'A curated collection of interactive website templates built with Framer for freelancers and small businesses.',
    category: 'open-source',
    era: 'current',
    year: '2023',
    role: 'Creator',
    tech: ['Framer', 'React', 'Design Systems'],
    thumbnail: framerImg,
    link: '#',
    repo: 'https://github.com/yourusername/framer-templates',
    highlights: [
      'Created reusable templates saving developers hundreds of hours',
      'Developed modular design system for consistency',
      'Exploring affiliate marketing opportunities',
    ],
    impact: [
      '1000+ downloads',
      'Modular design system',
      'Affiliate opportunities',
    ],
    metrics: [
      {name: 'Downloads', value: '1,200+', improvement: true},
      {name: 'GitHub Stars', value: '350', improvement: true},
      {name: 'Template Variants', value: '15', improvement: true},
    ],
    challenges: [
      'Balancing flexibility with ease of use',
      'Documenting for diverse skill levels',
      'Maintaining design consistency',
    ],
    solutions: [
      'Created tiered template system',
      'Developed interactive documentation',
      'Implemented design token system',
    ],
    testimonial: {
      quote:
        'These templates cut our development time in half while maintaining high design standards.',
      author: 'Sarah Chen',
      position: 'Freelance Designer',
      avatar: '/images/avatars/sarah-chen.jpg',
    },
    period: '2023 – Present',
    tags: ['Design', 'Open Source', 'Templates'],
    gradient: 'from-gray-900 to-gray-800',
    textColor: 'text-white',
    deliverables: ['Template Library', 'Documentation', 'Demo Sites'],
    teamSize: 1,
    client: 'Open Source Community',
  },
  {
    id: 4,
    title: 'Horumar360 Community App',
    description:
      'Mobile-first social impact app connecting local champions and streamlining engagement.',
    category: 'community',
    era: 'past',
    year: '2022',
    role: 'Lead Developer',
    tech: ['Mobile Development', 'Scalable Systems', 'Community APIs'],
    thumbnail: horumarImg,
    link: '#',
    repo: 'https://github.com/yourusername/horumar360',
    highlights: [
      'Implemented mobile-first community platform',
      'Developed scalable architecture solutions',
      'Integrated with community services',
    ],
    impact: ['Scalable architecture', 'API integrations', 'User base growth'],
    metrics: [
      {name: 'Monthly Active Users', value: '2,500', improvement: true},
      {name: 'Community Events', value: '120+', improvement: true},
      {name: 'API Response Time', value: '<300ms', improvement: true},
    ],
    challenges: [
      'Low-bandwidth environment performance',
      'Multi-language support',
      'Offline functionality needs',
    ],
    solutions: [
      'Optimized asset delivery and caching',
      'Built flexible i18n system',
      'Implemented robust sync engine',
    ],
    testimonial: {
      quote:
        'Horumar360 became the backbone of our community organizing, especially in areas with poor connectivity.',
      author: 'David Okafor',
      position: 'Community Organizer',
      avatar: '/images/avatars/david-okafor.jpg',
    },
    period: '2022 – 2023',
    tags: ['Mobile App', 'Community', 'Social Impact'],
    gradient: 'from-gray-900 to-gray-800',
    textColor: 'text-white',
    deliverables: ['Mobile App', 'Admin Portal', 'Analytics Dashboard'],
    teamSize: 4,
    client: 'Local Communities',
  },
  {
    id: 5,
    title: 'EDTech Platform',
    description:
      'Interactive learning platform with AI-powered recommendations.',
    category: 'tech',
    era: 'current',
    year: '2023',
    role: 'Lead Developer',
    tech: ['AI/ML', 'React', 'Node.js', 'Personalization'],
    thumbnail: edtechImg,
    link: '#',
    repo: null,
    highlights: [
      'Implemented AI-driven content recommendations',
      'Increased user engagement by 65%',
      'Developed personalized learning pathways',
    ],
    impact: [
      'AI-curated content',
      '65% engagement increase',
      'Personalized learning',
    ],
    metrics: [
      {name: 'Engagement Increase', value: '65%', improvement: true},
      {name: 'Completion Rates', value: '78%', improvement: true},
      {name: 'Content Items', value: '1,200+', improvement: true},
    ],
    challenges: [
      'Building effective recommendation algorithms',
      'Handling diverse learning styles',
      'Ensuring content quality at scale',
    ],
    solutions: [
      'Developed hybrid recommendation engine',
      'Implemented learning style assessment',
      'Created contributor quality guidelines',
    ],
    testimonial: {
      quote:
        'Our students are more engaged than ever thanks to the personalized learning paths this platform enables.',
      author: 'Dr. Emily Wilson',
      position: 'Education Director',
      avatar: '/images/avatars/emily-wilson.jpg',
    },
    period: '2023 – Present',
    tags: ['Education', 'AI', 'EdTech'],
    gradient: 'from-gray-900 to-gray-800',
    textColor: 'text-white',
    deliverables: ['Learning Platform', 'Admin Tools', 'Analytics Suite'],
    teamSize: 6,
    client: 'Education Provider',
  },
  {
    id: 6,
    title: 'COVID-19 Tracker',
    description:
      'Real-time global COVID-19 statistics dashboard with interactive visualizations and country-specific data.',
    category: 'tech',
    era: 'past',
    year: '2022',
    role: 'Frontend Developer',
    tech: ['React', 'Chart.js', 'API Integration', 'Responsive Design'],
    thumbnail: covidImg, // Make sure to import covidImg at the top
    link: '#', // Add your live demo link if available
    repo: 'https://github.com/yourusername/covid-tracker', // Update with your actual repo
    highlights: [
      'Developed real-time COVID-19 data visualization dashboard',
      'Integrated with multiple public health APIs for accurate statistics',
      'Implemented responsive design for optimal viewing across devices',
      'Created interactive charts and tables for data exploration',
    ],
    impact: [
      'Provided timely pandemic information to thousands of users',
      '95% mobile responsiveness score',
      'Reduced data load time by 40% through API optimization',
    ],
    metrics: [
      {name: 'API Response Time', value: '<500ms', improvement: true},
      {name: 'Mobile Performance', value: '95/100', improvement: true},
      {name: 'Daily Active Users', value: '2,500+', improvement: true},
    ],
    challenges: [
      'Handling rapidly changing data from multiple sources',
      'Ensuring accessibility for all user groups',
      'Optimizing performance for data-heavy visualizations',
    ],
    solutions: [
      'Implemented data caching to reduce API calls',
      'Added accessibility features like screen reader support',
      'Used virtualization for large data tables',
    ],
    testimonial: {
      quote:
        'This tracker became our go-to resource during the pandemic, providing clear and reliable information when we needed it most.',
      author: 'Dr. Michael Chen',
      position: 'Public Health Official',
      avatar: '/images/avatars/michael-chen.jpg',
    },
    period: 'Mar 2022 – Dec 2022',
    tags: ['Data Visualization', 'Public Health', 'Dashboard'],
    gradient: 'from-blue-600 to-blue-400',
    textColor: 'text-white',
    deliverables: [
      'Interactive Dashboard',
      'Country Comparison Tool',
      'Historical Data Charts',
      'Mobile-responsive UI',
    ],
    teamSize: 3,
    client: 'Public Health Community',
  },
];

export const categories = {
  tech: {
    name: 'Technology',
    description: 'Technical projects and software solutions',
    icon: '💻',
  },
  community: {
    name: 'Community',
    description: 'Social impact and community development initiatives',
    icon: '🤝',
  },
  'open-source': {
    name: 'Open Source',
    description: 'Publicly available projects and resources',
    icon: '🔓',
  },
};

export const eras = {
  current: {
    name: 'Current',
    description: 'Ongoing projects and initiatives',
    icon: '🟢',
  },
  past: {
    name: 'Past',
    description: 'Completed projects and previous work',
    icon: '🔴',
  },
};

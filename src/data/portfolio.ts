export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  links: {
    site: string;
    github: string;
    linkedin: string;
    stackoverflow: string;
    ethereumStackExchange: string;
  };
  reputation: {
    stackoverflow: number;
    ethereumStackExchange: number;
  };
}

export interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  links?: Record<string, string>;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  link: string;
  tags: string[];
  associatedWith?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  links?: Record<string, string>;
  tags: string[];
}

export interface Contact {
  email: string;
  phone: string;
}

export const profile: Profile = {
  name: "Saswata Dutta",
  role: "Software Developer",
  location: "Tempe, AZ",
  email: "duttasaswata7@gmail.com",
  phone: "+1 (602) 743-9126",
  links: {
    site: "https://saztech.org",
    github: "https://github.com/SD170",
    linkedin: "https://linkedin.com/in/sd170",
    stackoverflow: "https://stackoverflow.com/users/11974952/saswata-dutta",
    ethereumStackExchange: "https://ethereum.stackexchange.com/users/92641/saswata-dutta"
  },
  reputation: {
    stackoverflow: 83,
    ethereumStackExchange: 147
  }
};

export const experience: ExperienceItem[] = [
  {
    id: "intract-senior",
    title: "Senior Software Developer",
    subtitle: "Intract - Founding Member",
    description: "Led development of modular questing backend scaling to 14M users, 100k RPM, 20k DAU. Built Proof-of-Humanity protocol generating ~$590k revenue in 8 months. Integrated AWS Nitro Enclaves for trusted computation and cryptographic attestation.",
    image: "/placeholder.jpg",
    tags: ["TypeScript", "", "AWS", "Solidity", "Web3"],
    links: {
      quests: "https://quest.intract.io/",
      dashboard: "https://dashboard.intract.io/",
      attributionNpm: "https://www.npmjs.com/package/@intract/attribution"
    }
  },

  {
    id: "sama-intern",
    title: "Software Development Intern",
    subtitle: "SAMA (ODRWAYS Solutions)",
    description: "Implemented high-volume email pipeline with Amazon SES, batching, and compliance tracking. Delivered over 100k legally enforceable notices daily with audit-friendly interaction tracking.",
    image: "/placeholder.jpg",
    tags: ["AWS SES", "Email Pipeline", "Compliance", "High Volume"],
    links: {
      site: "https://www.sama.live/"
    }
  }
];

export const projects: ProjectItem[] = [
  {
    id: "box-e-game",
    title: "Box-E",
    subtitle: "Unity Box Runner Game",
    description: "A 3D box runner game developed in Unity using C#. Features smooth gameplay mechanics, level progression, and cross-platform support for Windows, Linux, and Android. Built with clean architecture and optimized performance.",
    image: "/placeholder.jpg",
    link: "https://github.com/SD170/unity-box-e",
    tags: ["Unity", "C#", "Game Development", "Cross-platform"]
  },
  {
    id: "universal-context-agent",
    title: "Universal Context Agent",
    subtitle: "Multimodal RAG Pipeline",
    description: "CLI-first multimodal RAG pipeline supporting text, tables, images, and URLs. Features router agent, hybrid retrieval (BM25 + embeddings), LLM re-ranking, and query planning. Achieved >80% answer accuracy and >90% citation precision with p50 < 4s response time.",
    image: "/placeholder.jpg",
    link: "https://github.com/SD170/universal-context-agent",
    tags: ["Python", "FastAPI", "Postgres/pgvector", "LLMs", "Docker"]
  },
  {
    id: "proof-of-humanity",
    title: "Proof-of-Humanity Protocol",
    subtitle: "Revenue-Generating Blockchain Protocol (Authena)",
    description: "Designed and launched a Proof-of-Humanity protocol with dynamic pricing and referral systems. Generated approximately $590,000 in revenue within 8 months of launch. Integrated advanced verification mechanisms and scalable backend infrastructure.",
    image: "/placeholder.jpg",
    link: "https://authena.xyz/proof-of-humanity",
    tags: ["Blockchain", "Protocol Design", "Revenue Generation", "Web3"],
    associatedWith: "Intract"
  },
  {
    id: "questing-platform",
    title: "Modular Questing Platform",
    subtitle: "Scalable Backend System",
    description: "Led development of modular questing backend scaling to 14M users, 100k RPM, and 20k DAU. Built with AWS Nitro Enclaves for trusted computation and cryptographic attestation. Handles complex quest logic and user progression systems.",
    image: "/placeholder.jpg",
    link: "https://quest.intract.io/",
    tags: ["TypeScript", "Node.js", "AWS", "High Scale"],
    associatedWith: "Intract"
  },
  {
    id: "attribution-sdk",
    title: "Attribution SDK",
    subtitle: "NPM Package for Wallet Attribution",
    description: "Published and maintained Attribution SDK on npm for event-based wallet attribution. Achieved consistent weekly downloads and positive community feedback. Provides seamless integration for tracking wallet interactions and user behavior.",
    image: "/placeholder.jpg",
    link: "https://www.npmjs.com/package/@intract/attribution",
    tags: ["NPM", "SDK", "Open Source", "Wallet Analytics"],
    associatedWith: "Intract"
  },
  {
    id: "wallet-infra",
    title: "Wallet Infrastructure",
    subtitle: "Multi-chain Wallet Management",
    description: "Created comprehensive wallet management system with multi-chain integration and custom signature verification. Reduced onboarding time to under 4 hours. Built real-time analytics dashboard for wallet interactions and user behavior tracking.",
    image: "/placeholder.jpg",
    link: "https://dashboard.intract.io/",
    tags: ["Solidity", "Web3", "Multi-chain", "Analytics"],
    associatedWith: "Intract"
  }
];

export const achievements: AchievementItem[] = [
  {
    id: "scaling-milestone",
    title: "14M Users Milestone",
    subtitle: "System Scaling Achievement",
    description: "Successfully scaled questing backend to handle 14 million users with 100k requests per minute and 20k daily active users. Implemented efficient caching and load balancing strategies.",
    image: "/placeholder.jpg",
    tags: ["Scalability", "Performance", "High Availability"],
    links: {
      dashboard: "https://dashboard.intract.io/"
    }
  },
  {
    id: "revenue-generation",
    title: "$590k Revenue Generation",
    subtitle: "Proof-of-Humanity Protocol",
    description: "Designed and launched Proof-of-Humanity protocol with dynamic pricing and referral systems. Generated approximately $590,000 in revenue within 8 months of launch.",
    image: "/placeholder.jpg",
    tags: ["Revenue", "Protocol Design", "Dynamic Pricing"],
    links: {
      quests: "https://quest.intract.io/"
    }
  },
  {
    id: "npm-package",
    title: "Published Attribution SDK",
    subtitle: "NPM Package Success",
    description: "Published and maintained Attribution SDK on npm for event-based wallet attribution. Achieved consistent weekly downloads and positive community feedback.",
    image: "/placeholder.jpg",
    tags: ["NPM", "SDK", "Open Source"],
    links: {
      npm: "https://www.npmjs.com/package/@intract/attribution"
    }
  }
];

export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    logo?: string;
  }[];
}

export const skills: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript/TypeScript" },
      { name: "C/C++" },
      { name: "Python" }
    ]
  },
  {
    name: "Backend & Runtime",
    skills: [
      { name: "Node.js" },
      { name: "Nest.js" },
      { name: "FastAPI" }
    ]
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "AWS" },
      { name: "Docker" },
      { name: "NGINX" }
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "Redis" }
    ]
  },
  {
    name: "Blockchain & Web3",
    skills: [
      { name: "Smart Contracts" },
      { name: "EVM" },
      { name: "NFTs" },
      { name: "Solidity" }
    ]
  },
  {
    name: "AI & ML",
    skills: [
      { name: "LLMs" },
      { name: "RAG" },
      { name: "Prompt Engineering" }
    ]
  },
  {
    name: "Frontend (I can work with, but don't want to 😅)",
    skills: [
      { name: "React" },
      { name: "Next.js" }
    ]
  }
];

export const contact: Contact = {
  email: "duttasaswata7@gmail.com",
  phone: "+1 (602) 743-9126"
};

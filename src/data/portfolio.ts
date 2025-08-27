export interface Profile {
	name: string;
	role: string;
	location: string;
	email: string;
	phone: string;
	about: string;
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
	timeframe: string;
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
	about: "Software engineer with 3 years of experience building scalable backend systems and large-scale applications. I joined Intract as the first hire and helped scale it from zero to 14 million users by designing core infrastructure, building modular systems, and leading critical product initiatives. My experience spans developing Proof-of-Humanity verification systems, multi-chain integration frameworks, NFT marketplaces, and secure computation protocols using AWS Nitro Enclaves. I've worked extensively with AWS, Node.js, TypeScript, and MongoDB to deliver high-performance, fault-tolerant systems. Currently pursuing MS in Computer Science at Arizona State University, I'm passionate about solving complex engineering challenges, whether in blockchain ecosystems or emerging AI-driven solutions, and I enjoy building products that combine scale, reliability, and innovation.",
	links: {
		site: "https://saztech.org",
		github: "https://github.com/SD170",
		linkedin: "https://linkedin.com/in/sd170",
		stackoverflow: "https://stackoverflow.com/users/11974952/saswata-dutta",
		ethereumStackExchange:
			"https://ethereum.stackexchange.com/users/92641/saswata-dutta",
	},
	reputation: {
		stackoverflow: 83,
		ethereumStackExchange: 147,
	},
};

export const experience: ExperienceItem[] = [
	{
		id: "intract-senior",
		title: "Senior Software Developer",
		subtitle: "Intract - Founding Member",
		timeframe: "Oct 2022 – Jul 2025",
		description:
			"Led development of modular questing backend scaling to 14M users, 100k RPM, 20k DAU. Built Proof-of-Humanity protocol generating ~$590k revenue in 8 months. Integrated AWS Nitro Enclaves for trusted computation and cryptographic attestation.",
		image: "/intract-dashboard.png",
		tags: [
			"TypeScript",
			"Node.js",
			"AWS",
			"Solidity",
			"Web3",
			"MongoDB",
			"PostgreSQL",
			"Redis",
			"Docker",
			"NGINX",
			"GitHub Actions",
			"Nitro Enclaves",
			"SQS",
			"SES",
			"CloudFront",
			"WAF",
		],
		links: {
			quests: "https://quest.intract.io/",
			dashboard: "https://dashboard.intract.io/",
			attributionNpm:
				"https://www.npmjs.com/package/@intract/attribution",
			proofOfHumanity: "https://quest.intract.io/",
		},
	},

	{
		id: "sama-intern",
		title: "Software Development Intern",
		subtitle: "SAMA (ODRWAYS Solutions)",
		timeframe: "Jul 2021 – Oct 2021",
		description:
			"Implemented high-volume email pipeline with Amazon SES, batching, and compliance tracking. Delivered over 100k legally enforceable notices daily with audit-friendly interaction tracking.",
		image: "/sama.png",
		tags: [
			"AWS SES",
			"Node.js",
			"Email Pipeline",
			"Compliance",
			"High Volume",
			"Batch Processing",
		],
		links: {
			site: "https://www.sama.live/",
		},
	},
];

export const projects: ProjectItem[] = [
	{
		id: "questing-platform",
		title: "Questing Platform",
		subtitle: "Scalable Backend System",
		description:
			"Led development of modular questing backend scaling to 14M users, 100k RPM, and 20k DAU. Built with AWS Nitro Enclaves for trusted computation and cryptographic attestation. Handles complex quest logic and user progression systems.",
		image: "/intract-quest.png",
		link: "https://quest.intract.io/",
		tags: [
			"TypeScript",
			"Node.js",
			"AWS",
			"High Scale",
			"MongoDB",
			"Redis",
			"NGINX",
			"GitHub Actions",
		],
		associatedWith: "Intract",
	},
	{
		id: "attribution-sdk",
		title: "Attribution SDK",
		subtitle: "NPM Package for Wallet Attribution",
		description:
			"Published and maintained Attribution SDK on npm for event-based wallet attribution. Achieved consistent weekly downloads and positive community feedback. Provides seamless integration for tracking wallet interactions and user behavior.",
		image: "/npm.png",
		link: "https://www.npmjs.com/package/@intract/attribution",
		tags: [
			"TypeScript",
			"NPM",
			"SDK",
			"Open Source",
			"Wallet Analytics",
			"Event Tracking",
		],
		associatedWith: "Intract",
	},
	// {
	// 	id: "universal-context-agent",
	// 	title: "Universal Context Agent",
	// 	subtitle: "Multimodal RAG Pipeline",
	// 	description:
	// 		"CLI-first multimodal RAG pipeline supporting text, tables, images, and URLs. Features router agent, hybrid retrieval (BM25 + embeddings), LLM re-ranking, and query planning. Achieved >80% answer accuracy and >90% citation precision with p50 < 4s response time.",
	// 	image: "/placeholder.jpg",
	// 	link: "https://github.com/SD170/universal-context-agent",
	// 	tags: [
	// 		"Python",
	// 		"Flask",
	// 		"Postgres/pgvector",
	// 		"LLMs",
	// 		"Docker",
	// 		"RAG",
	// 		"LLM Re-ranking",
	// 		"Prompt Engineering",
	// 	],
	// },

	{
		id: "proof-of-humanity",
		title: "Proof-of-Humanity Protocol",
		subtitle: "Revenue-Generating Blockchain Protocol",
		description:
			"Designed and launched a Proof-of-Humanity protocol with dynamic pricing and referral systems. Generated approximately $590,000 in revenue within 8 months of launch. Integrated advanced verification mechanisms and scalable backend infrastructure.",
		image: "/intract-authena.png",
		link: "https://quest.intract.io/",
		tags: [
			"Solidity",
			"Blockchain",
			"Protocol Design",
			"Revenue Generation",
			"Web3",
			"Nitro Enclaves",
			"TEE",
		],
		associatedWith: "Intract",
	},
	{
		id: "amplify-marketplace",
		title: "Amplify Marketplace",
		subtitle: "Full-stack E-commerce Platform",
		description:
			"Built a complete marketplace solution with Stripe payments, Cognito authentication, and serverless backend using AWS Amplify & GraphQL. Features user authentication, product management, payment processing, and responsive design.",
		image: "/amplify-marketplace.png",
		link: "https://master.d3mmzy4nt3rfhi.amplifyapp.com/",
		tags: [
			"AWS Amplify",
			"GraphQL",
			"Stripe",
			"Cognito",
			"Serverless",
			"React",
		],
	},
	{
		id: "box-e-game",
		title: "Box-E",
		subtitle: "Unity Box Runner Game",
		description:
			"A 3D box runner game developed in Unity using C#. Features smooth gameplay mechanics, level progression, and cross-platform support for Windows, Linux, and Android. Built with clean architecture and optimized performance.",
		image: "/box-e.png",
		link: "https://github.com/SD170/unity-box-e",
		tags: ["Unity", "C#", "Game Development", "Cross-platform", "C++"],
	},
	{
		id: "wallet-infra",
		title: "Wallet Infra",
		subtitle: "Multi-chain Wallet Management",
		description:
			"Created comprehensive wallet management system with multi-chain integration and custom signature verification. Reduced onboarding time to under 4 hours. Built real-time analytics dashboard for wallet interactions and user behavior tracking.",
		image: "/intract-dashboard.png",
		link: "https://dashboard.intract.io/",
		tags: [
			"Solidity",
			"Web3",
			"Multi-chain",
			"Analytics",
			"EVM",
			"Signature Verification",
			"Dashboard",
		],
		associatedWith: "Intract",
	},
];

export const achievements: AchievementItem[] = [
	{
		id: "scaling-milestone",
		title: "14M Users Milestone",
		subtitle: "System Scaling Achievement",
		description:
			"Achieved massive scale milestone by successfully scaling questing backend to handle 14 million registered users, processing 100k requests per minute, and maintaining 20k daily active users. This represents a 1400% growth from initial launch.",
		tags: ["Scalability", "Performance", "High Availability"],
		links: {
			dashboard: "https://dashboard.intract.io/",
		},
	},
	{
		id: "revenue-generation",
		title: "$590k Revenue Generation",
		subtitle: "Proof-of-Humanity Protocol",
		description:
			"Led revenue generation initiative that achieved $590,000 in revenue within 8 months of protocol launch. Designed and implemented dynamic pricing algorithms and referral systems that drove consistent user acquisition and monetization.",
		tags: ["Revenue", "Protocol Design", "Dynamic Pricing"],
		links: {
			quests: "https://authena.xyz/proof-of-humanity",
		},
	},
	{
		id: "npm-package",
		title: "Published Attribution SDK",
		subtitle: "NPM Package Success",
		description:
			"Successfully published and maintained Attribution SDK on npm, achieving >=200 weekly downloads and establishing it as a go-to solution for wallet attribution. Received positive community feedback and consistent adoption by developers in the Web3 ecosystem.",
		tags: ["NPM", "SDK", "Open Source"],
		links: {
			npm: "https://www.npmjs.com/package/@intract/attribution",
		},
	},
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
			{ name: "Python" },
		],
	},
	{
		name: "Backend & Runtime",
		skills: [
			{ name: "Node.js" },
			{ name: "Nest.js" },
			{ name: "Microservices Architecture" },
			{ name: "Serverless" },
		],
	},
	{
		name: "Cloud & DevOps",
		skills: [{ name: "AWS" }, { name: "Docker" }, { name: "NGINX" }],
	},
	{
		name: "Databases",
		skills: [
			{ name: "MongoDB" },
			{ name: "PostgreSQL" },
			{ name: "Redis" },
		],
	},
	{
		name: "Blockchain & Web3",
		skills: [
			{ name: "Smart Contracts" },
			{ name: "EVM" },
			{ name: "NFTs" },
			{ name: "Solidity" },
		],
	},
	{
		name: "AI & ML",
		skills: [
			{ name: "LLMs" },
			{ name: "RAG" },
			{ name: "Prompt Engineering" },
		],
	},
	{
		name: "Frontend (I can work with, but don't want to 😅)",
		skills: [{ name: "React" }, { name: "Next.js" }],
	},
];

export const contact: Contact = {
	email: "duttasaswata7@gmail.com",
	phone: "+1 (602) 743-9126",
};

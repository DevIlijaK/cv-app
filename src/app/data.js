/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://skillicons.dev (Skill Icons to show skills)
*/

// Root of the site this app is mounted on, and the path prefix it answers at
// (see next.config.mjs). Together they form the canonical URL.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ilijakosanin.dev";
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const siteTitle = "Ilija Košanin | Fullstack Software Engineer";
export const siteDescription =
  "Ilija Košanin, a fullstack TypeScript engineer from Belgrade with 4+ years of experience building products end to end, hands-on with AI product development.";

export const profile = {
  name: "Ilija Košanin",
  role: "Fullstack Software Engineer (TypeScript)",
  location: "Belgrade, Serbia",
  email: "ilijakoske@gmail.com",
  openToWork: "Open to work · TypeScript & AI · remote or Belgrade",
  bio: "Fullstack TypeScript engineer with 4+ years of experience building products end to end. Hands-on experience in AI product development: chat interfaces, streaming, and structured content generation with the Vercel AI SDK and the OpenAI API.",
  communityBio:
    "We organize meetups, find speakers, handle sponsorships, and bring people together around JavaScript in Belgrade.",
  kosmonautBio: "a platform and pass for coworking spaces",
  personalBio:
    "Part-time, I act in short, fun, and silly videos on social media. I love writing, and I have a full blog section you can check out.",
  blogLink: "https://ilijakosanin.dev/#writing",
  languages: "Serbian (native) · English (professional)",
};

export const experience = [
  {
    role: "Fullstack Software Engineer",
    company: "EvolveWell",
    period: "Jul 2024 – Jul 2026",
    location: "Belgrade, Serbia (Remote)",
    bullets: [
      "Built an employee wellness platform: owned features end to end across two Next.js frontends and a NestJS backend — UI, business logic, and database queries — in a system that also included a dedicated AI service integrating the OpenAI API.",
      "Developed an AI-first coaching application on TanStack Start (deployed on Vercel) pairing a chat interface with classic UI; implemented streaming, AI content generation, and structured outputs with the Vercel AI SDK.",
      "Delivered a product for frontline workers: drove the TanStack Start web app on Neon Postgres with shadcn/ui, shipped alongside an Expo / React Native iOS and Android mobile app; researched and prototyped a RAG approach for the product's knowledge features.",
    ],
  },
  {
    role: "Software Developer",
    company: "PlusPlus NT",
    period: "Apr 2022 – Jul 2024",
    location: "Belgrade, Serbia",
    bullets: [
      "Lead engineer for key clients (G4S, RTS): gathered requirements directly from clients, translated them into features, and owned delivery and bug resolution.",
      "Built document management and enterprise solutions with Spring, Angular, Alfresco, PostgreSQL, and Apache Solr.",
    ],
  },
];

export const earlierExperience =
  "One year of full-cycle SaaS sales in parallel roles (Generation Zeal, Talks and Folks): prospecting, cold outreach, discovery calls, pipeline, closing. Competitive debater.";

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "TanStack Start",
  "React Native (Expo)",
  "Node.js",
  "NestJS",
  "PostgreSQL / Neon",
  "Tailwind CSS + shadcn/ui",
  "Vercel AI SDK",
  "OpenAI API",
  "RAG",
  "Angular",
  "Spring",
];

export const community = {
  role: "Co-Organizer",
  name: "JS Belgrade",
  period: "Feb 2024 – Present",
  link: "https://www.meetup.com/js-belgrade-meetup/",
  summary:
    "Co-organizing meetups for the local JavaScript community: event planning, speaker outreach, and sponsorships.",
};

export const education = {
  degree: "Engineer's degree, Information Technology",
  school: "Faculty of Organizational Sciences, University of Belgrade",
  period: "2015 – 2021",
};

export const socialLinks = [
  { label: "Instagram", link: "https://www.instagram.com/ilija_kosaninn/" },
  { label: "TikTok", link: "https://www.tiktok.com/@ilija_kosanin" },
  { label: "YouTube", link: "https://www.youtube.com/@KosaninIlija" },
  { label: "X", link: "https://x.com/ilijakosanin" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/ilija-ko%C5%A1anin/" },
  { label: "GitHub", link: "https://github.com/DevIlijaK" },
  { label: "Discord", link: "https://discord.gg/Uc4TUeUa4" },
  { label: "Email", link: "mailto:ilijakoske@gmail.com" },
];

export const featuredProject = {
  name: "Mr. Planet",
  description:
    "My blog as a platformer. Jump onto a post to read it.",
  link: "https://ilijakosanin.dev/mr-planet",
  repo: "https://github.com/DevIlijaK/mr_planet",
};

export const projectsData = [
  {
    id: 1,
    name: "Kosmonaut",
    description: "One coworking pass for Belgrade, usable at any partner space.",
    date: "2026-03-01",
    demoLink: "https://www.kosmonaut.rs/",
  },
  {
    id: 2,
    name: "Pomiri AI",
    description:
      "Two people each tell their side of a misunderstanding; AI writes a neutral summary and next steps.",
    date: "2026-06-05",
    demoLink: "https://pomiriai.xyz/",
  },
  {
    id: 3,
    name: "Pero AI",
    description: "A simple tool for polishing rough messages before sending them.",
    date: "2026-06-01",
    demoLink: "https://peroai.xyz/",
  },
  {
    id: 4,
    name: "ESGflow",
    description:
      "ESG reporting software for turning scattered documentation into structured indicators and reporting narratives.",
    date: "2026-04-14",
    demoLink: "https://esgflow.xyz/",
  },
  {
    id: 5,
    name: "Mr. Planet",
    description: "My blog as a platformer. Jump onto a post to read it.",
    date: "2024-10-12",
    demoLink: "https://ilijakosanin.dev/mr-planet",
  },
  {
    id: 6,
    name: "ilijakosanin.dev",
    description: "Personal site, CV, and bilingual blog.",
    date: "2026-05-29",
    demoLink: "https://ilijakosanin.dev/",
  },
];

export const BtnList = [
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  { label: "Resume", link: "/resume.pdf", icon: "resume", newTab: true },
  {
    label: "GitHub",
    link: "https://github.com/DevIlijaK",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/ilija-ko%C5%A1anin/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://x.com/ilijakosanin",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Instagram",
    link: "https://www.instagram.com/ilija_kosaninn/",
    icon: "instagram",
    newTab: true,
  },
];

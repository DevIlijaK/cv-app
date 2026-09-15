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
};

export const experience = [
  {
    role: "Fullstack Software Engineer",
    company: "EvolveWell",
    period: "Jul 2024 – Jul 2026",
    location: "Belgrade, Serbia (Remote)",
    summary:
      "Employee wellness platform: owned features end to end across two Next.js frontends and a NestJS backend, alongside a dedicated AI service on the OpenAI API. Built an AI-first coaching app on TanStack Start with streaming and structured outputs via the Vercel AI SDK, and shipped a frontline-worker product with an Expo / React Native app for iOS and Android.",
  },
  {
    role: "Software Developer",
    company: "PlusPlus NT",
    period: "Apr 2022 – Jul 2024",
    location: "Belgrade, Serbia",
    summary:
      "Lead engineer for key clients (G4S, RTS): requirements straight from the client through to delivery and bug resolution. Document management and enterprise systems on Spring, Angular, Alfresco, PostgreSQL, and Apache Solr.",
  },
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
  { label: "JS Belgrade Discord", link: "https://discord.gg/Uc4TUeUa4" },
  { label: "Email", link: "mailto:ilijakoske@gmail.com" },
];

export const featuredProject = {
  name: "Mr. Planet",
  description:
    "My blog as a platformer game. Every post is a ledge: jump onto one to read it. Built with Next.js, physics written from scratch and unit-tested.",
  link: "https://ilijakosanin.dev/mr-planet",
  repo: "https://github.com/DevIlijaK/mr_planet",
};

export const projectsData = [
  {
    id: 1,
    name: "Kosmonaut",
    description: "One coworking pass for Belgrade, usable at any partner space",
    date: "2026-03-01",
    demoLink: "https://www.kosmonaut.rs/",
  },
  {
    id: 2,
    name: "Pomiri AI",
    description: "AI-assisted preparation for one-on-one conflicts",
    date: "2026-06-05",
    demoLink: "https://pomiriai.xyz/",
  },
  {
    id: 3,
    name: "Pero AI",
    description: "Polish rough messages before sending them",
    date: "2026-06-01",
    demoLink: "https://peroai.xyz/",
  },
  {
    id: 4,
    name: "ESGflow",
    description: "ESG reporting: scattered documentation to structured indicators",
    date: "2026-04-14",
    demoLink: "https://esgflow.xyz/",
  },
  {
    id: 5,
    name: "Mr. Planet",
    description: "My blog as a platformer game",
    date: "2024-10-12",
    demoLink: "https://ilijakosanin.dev/mr-planet",
  },
  {
    id: 6,
    name: "ilijakosanin.dev",
    description: "Personal site, CV, and bilingual blog",
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

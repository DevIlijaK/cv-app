/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ItemLayout } from "./item-layout";
import {
  community,
  education,
  experience,
  featuredProject,
  profile,
  socialLinks,
} from "@/app/data";

const linkClass = "text-accent underline underline-offset-4";

export const AboutDetails = () => {
  return (
    <section className="p-4 md:p-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            {profile.bio}
          </p>
          <p className="font-light text-xs sm:text-sm md:text-base">
            I am a co-organizer of{" "}
            <Link
              href={community.link}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {community.name}
            </Link>
            , the local JavaScript community, and co-founder of{" "}
            <Link
              href="https://www.kosmonaut.rs/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Kosmonaut
            </Link>
            , one coworking pass for Belgrade. Part-time, I act in short, fun,
            and silly videos on social media.
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            {"4+ "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            {"4 "}
            <sub className="font-semibold text-base">products shipped</sub>
          </p>
        </ItemLayout>

        {experience.map((job) => (
          <ItemLayout
            key={job.company}
            className={"col-span-full lg:col-span-6 flex-col items-start"}
          >
            <div className="w-full">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h2 className="text-lg md:text-xl text-left">
                  {job.role}{" "}
                  <span className="text-accent">@ {job.company}</span>
                </h2>
                <p className="text-muted text-sm">{job.period}</p>
              </div>
              <p className="text-muted text-sm text-left">{job.location}</p>
            </div>
            <p className="w-full font-light text-xs sm:text-sm md:text-base">
              {job.summary}
            </p>
          </ItemLayout>
        ))}

        <ItemLayout
          className={"col-span-full md:col-span-6 flex-col items-start"}
        >
          <div className="w-full flex flex-wrap items-baseline justify-between gap-x-4">
            <h2 className="text-lg md:text-xl text-left">
              {community.role}{" "}
              <span className="text-accent">@ {community.name}</span>
            </h2>
            <p className="text-muted text-sm">{community.period}</p>
          </div>
          <p className="w-full font-light text-xs sm:text-sm md:text-base">
            {community.summary}
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full md:col-span-6 flex-col items-start"}
        >
          <div className="w-full flex flex-wrap items-baseline justify-between gap-x-4">
            <h2 className="text-lg md:text-xl text-left">Education</h2>
            <p className="text-muted text-sm">{education.period}</p>
          </div>
          <p className="w-full font-light text-xs sm:text-sm md:text-base">
            {education.degree}, {education.school}
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-4 p-0"}>
          <img
            src="https://skillicons.dev/icons?i=ts,react,nextjs,nodejs,nestjs,postgres,tailwind,vercel,docker,git,angular,spring,java,graphql,js,html&perline=4"
            alt="Skill icons for TypeScript, React, Next.js, Node.js, NestJS, PostgreSQL, Tailwind, Vercel, Docker, Git, Angular, Spring, Java, GraphQL, JavaScript, and HTML"
            loading="lazy"
            className="w-auto h-auto max-w-full max-h-full"
          />
        </ItemLayout>
        <ItemLayout
          className={"col-span-full md:col-span-4 flex-col items-start"}
        >
          <div className="w-full flex flex-wrap items-baseline justify-between gap-x-4">
            <h2 className="text-lg md:text-xl text-left">
              {featuredProject.name}
            </h2>
            <p className="text-muted text-sm">Featured</p>
          </div>
          <p className="w-full font-light text-xs sm:text-sm md:text-base">
            {featuredProject.description}
          </p>
          <p className="w-full text-sm space-x-4">
            <Link
              href={featuredProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Play
            </Link>
            <Link
              href={featuredProject.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Source
            </Link>
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full md:col-span-4 flex-col items-start"}
        >
          <h2 className="w-full text-lg md:text-xl text-left">Find me</h2>
          <ul className="w-full grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-light">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <Link
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  {social.label}
                </Link>
              </li>
            ))}
          </ul>
        </ItemLayout>
      </div>
    </section>
  );
};

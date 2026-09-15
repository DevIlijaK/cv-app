/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ItemLayout } from "./item-layout";
import {
  community,
  earlierExperience,
  education,
  experience,
  featuredProject,
  profile,
  skills,
  socialLinks,
} from "@/app/data";

const linkClass = "text-accent underline underline-offset-4";

const ExternalLink = ({ href, children }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={linkClass}
  >
    {children}
  </Link>
);

const CardHeading = ({ title, aside }) => (
  <div className="w-full flex flex-wrap items-baseline justify-between gap-x-4">
    <h2 className="text-lg md:text-xl text-left">{title}</h2>
    {aside && <p className="text-muted text-sm">{aside}</p>}
  </div>
);

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
            <ExternalLink href={community.link}>{community.name}</ExternalLink>
            , the local JavaScript community. {profile.communityBio}
          </p>
          <p className="font-light text-xs sm:text-sm md:text-base">
            I am co-founder of{" "}
            <ExternalLink href="https://www.kosmonaut.rs/">
              Kosmonaut
            </ExternalLink>
            , {profile.kosmonautBio}. {profile.personalBio.split("blog section")[0]}
            <ExternalLink href={profile.blogLink}>blog section</ExternalLink>
            {profile.personalBio.split("blog section")[1]}
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
          <p className="font-semibold w-full text-left text-2xl sm:text-4xl">
            {"Co-founder "}
            <sub className="font-semibold text-base">of Kosmonaut</sub>
          </p>
        </ItemLayout>

        {experience.map((job) => (
          <ItemLayout
            key={job.company}
            className={"col-span-full lg:col-span-6 flex-col items-start"}
          >
            <div className="w-full">
              <CardHeading
                title={
                  <>
                    {job.role}{" "}
                    <span className="text-accent">@ {job.company}</span>
                  </>
                }
                aside={job.period}
              />
              <p className="text-muted text-sm text-left">{job.location}</p>
            </div>
            <ul className="w-full list-disc pl-5 space-y-2 font-light text-xs sm:text-sm md:text-base">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </ItemLayout>
        ))}

        <ItemLayout
          className={"col-span-full md:col-span-6 flex-col items-start"}
        >
          <CardHeading
            title={
              <>
                {community.role}{" "}
                <span className="text-accent">@ {community.name}</span>
              </>
            }
            aside={community.period}
          />
          <p className="w-full font-light text-xs sm:text-sm md:text-base">
            {community.summary}
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full md:col-span-6 flex-col items-start"}
        >
          <CardHeading title="Earlier" />
          <p className="w-full font-light text-xs sm:text-sm md:text-base">
            {earlierExperience}
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full md:col-span-8 flex-col items-start"}
        >
          <CardHeading title="Skills" />
          <p className="w-full font-light text-xs sm:text-sm md:text-base">
            {skills.join(" · ")}
          </p>
          <img
            src="https://skillicons.dev/icons?i=ts,react,nextjs,nodejs,nestjs,postgres,tailwind,angular,spring&perline=9"
            alt="Skill icons for TypeScript, React, Next.js, Node.js, NestJS, PostgreSQL, Tailwind CSS, Angular, and Spring"
            loading="lazy"
            className="w-auto h-auto max-w-full max-h-full"
          />
        </ItemLayout>

        <ItemLayout
          className={"col-span-full md:col-span-4 flex-col items-start"}
        >
          <CardHeading title="Education" aside={education.period} />
          <p className="w-full font-light text-xs sm:text-sm md:text-base">
            {education.degree}, {education.school}
          </p>
          <p className="w-full text-muted text-sm">
            Languages: {profile.languages}
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full md:col-span-6 flex-col items-start"}
        >
          <CardHeading title={featuredProject.name} aside="Featured" />
          <p className="w-full font-light text-xs sm:text-sm md:text-base">
            {featuredProject.description}
          </p>
          <p className="w-full text-sm space-x-4">
            <ExternalLink href={featuredProject.link}>Play</ExternalLink>
            <ExternalLink href={featuredProject.repo}>Source</ExternalLink>
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full md:col-span-6 flex-col items-start"}
        >
          <CardHeading title="Find me" />
          <ul className="w-full grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2 text-sm font-light">
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

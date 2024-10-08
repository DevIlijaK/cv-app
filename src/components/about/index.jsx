/* eslint-disable @next/next/no-img-element */
import { ItemLayout } from "./item-layout";

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
            In the ancient scrolls of JavaScript, it is said that the Architect
            once whispered to the variables, and they aligned themselves
            perfectly with the stars of the DOM. With a mere flick of his IDE,
            functions unfold like enchanted spells, conjuring APIs from the void
            and rendering pixels as if summoned by digital sorcery. Legend has
            it that his code is so clean, the bugs themselves refuse to tread
            near it—except for that one mythical bug that only appears at 2 AM
            under a full moon, haunting the error logs with cryptic messages
            like &quot;undefined is not a function.&quot; But fear not, for the
            Architect&apos;s debugging prowess is as swift as his touch on the
            keyboard, guiding lost bits and bytes back to harmony in the cosmic
            grid of the cloud.
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">good friends</sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-4 p-0"}>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs?username=DevIlijaK&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="IlijaDev"
            loading="lazy"
            className="w-full h-full"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-8 p-0"}>
          <img
            src="https://github-readme-stats.vercel.app/api?username=DevIlijaK&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="IlijaDev"
            loading="lazy"
            className="w-full h-full"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full"}>
          <img
            src="https://skillicons.dev/icons?i=angular,azure,bootstrap,bun,docker,elysia,git,github,graphql,hibernate,htmx,java,maven,nestjs,nextjs,nodejs,npm,postgres,react,spring,supabase,tailwind,terraform,ts,vercel,vscode,js,html,css,wasm"
            alt="Skill icons for Angular, Azure, Bootstrap, Bun, Docker, Elysia, Git, GitHub, GraphQL, Hibernate, HTMX, Java, Maven, NestJS, Next.js, Node.js, NPM, PostgreSQL, React, Spring, Supabase, Tailwind, Terraform, TypeScript, Vercel, VSCode, JavaScript, HTML, CSS, and WebAssembly"
            loading="lazy"
            className="w-auto h-auto max-w-full max-h-full"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=DevIlijaK&theme=dark&hide_border=true&type=png&ring=FEFE5B&background=EB545400&currStreakLabel=FEFE5B"
            alt="IlijaDev"
            loading="lazy"
            className="w-full h-full"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 p-0"}>
          <img
            src="https://github-readme-stats.vercel.app/api/pin/?username=DevIlijaK&repo=hi-elysia&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
            alt="IlijaDev"
            loading="lazy"
            className="w-full h-full"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

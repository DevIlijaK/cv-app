import { FireFliesbackground } from "@/components/FireFliesBackground";
import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import { ProjectList } from "@/components/projects";
import { RenderModel } from "@/components/render-model";
import { projectsData } from "@/app/data";
import dynamic from "next/dynamic";

const FullMoonSwordModel = dynamic(
  () => import("@/components/models/FullMoonSword"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-screen object-cover object-center opacity-25"
      />
      <ProjectList projects={projectsData} />
      <div
        className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0
       left-1/2 lg:-left-20 h-screen -z-10"
      >
        <RenderModel>
          <FullMoonSwordModel />
        </RenderModel>
      </div>
      <FireFliesbackground />
    </>
  );
}

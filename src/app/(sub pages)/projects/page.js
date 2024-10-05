import { FireFliesbackground } from "@/components/FireFliesBackground";
import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import { ProjectList } from "@/components/projects";
import { RenderModel } from "@/components/render-model";
import { FullMoonSwordModel } from "@/components/models/FullMoonSword";
import { projectsData } from "@/app/data";

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-screen object-cover object-center opacity-25"
      />
      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-20 -left-20 h-screen">
        <RenderModel>
          <FullMoonSwordModel />
        </RenderModel>
      </div>
      <FireFliesbackground />
    </>
  );
}

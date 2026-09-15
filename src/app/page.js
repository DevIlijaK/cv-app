import { RenderModel } from "@/components/render-model";
import { Navigation } from "@/components/navigation";
import { FireFliesbackground } from "@/components/FireFliesBackground";
import bg from "../../public/background/background-2.png";
import Image from "next/image";
import dynamic from "next/dynamic";

const WarriorModel = dynamic(() => import("@/components/models/Warrior"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 w-full h-screen object-cover object-center opacity-25"
        fill
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <WarriorModel />
        </RenderModel>
      </div>
      <FireFliesbackground />
    </main>
  );
}

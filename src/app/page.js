import { RenderModel } from "@/components/render-model";
import { WarriorModel } from "@/components/models/Warrior";
import { Navigation } from "@/components/navigation";
import { FireFliesbackground } from "@/components/FireFliesBackground";
import bg from "../../public/background/background-2.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 w-full h-screen object-cover object-center opacity-25"
        fill
      />
      {/* <div className="flex">
        <div className="w-28 h-28">
          <Image
            src={ninja}
            alt="ninja-image"
            width={112} // 28 * 4 = 112 pixels for w-28 (Tailwind CSS multiplier)
            height={112}
            objectFit="contain"
          />
        </div>
        <div className="w-28 h-28">
          <Image
            src={mage}
            alt="mage-image"
            width={112}
            height={112}
            objectFit="contain"
          />
        </div>
        <div className="w-28 h-28">
          <Image
            src={sura}
            alt="sura-image"
            width={112}
            height={112}
            objectFit="contain"
          />
        </div>
        <div className="w-28 h-28">
          <Image
            src={shaman}
            alt="shaman-image"
            width={112}
            height={112}
            objectFit="contain"
          />
        </div>
      </div> */}

      <div className="w-full h-screen">
        {/* Header */}
        <Navigation />
        <RenderModel>
          <WarriorModel />
        </RenderModel>
      </div>
      <FireFliesbackground />
    </main>
  );
}

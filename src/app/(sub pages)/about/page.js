"use client";
import { FireFliesbackground } from "@/components/FireFliesBackground";
import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import { RenderModel } from "@/components/render-model";
import LichKingHelmetModel from "@/components/models/LichKingHelmet";
import { AboutDetails } from "@/components/about";

export default function About() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-screen object-cover object-center opacity-25"
      />
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <LichKingHelmetModel />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute w-full flex flex-col items-center text-center top-1/2 sm:top-[60%] -translate-y-1/2 left-1/2 -translate-x-1/2">
          <h1 className="font-bold text-5xl xs:text-6xl sm:text-7xl lg:text-8xl text-accent">
            Ilija Košanin
          </h1>
          <p className="font-light text-foreground text-lg">
            Meet ex-gamer turned programer
          </p>
        </div>
      </div>
      <AboutDetails />
      <FireFliesbackground />
    </>
  );
}

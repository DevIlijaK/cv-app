"use client";
import { FireFliesbackground } from "@/components/FireFliesBackground";
import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import { AboutDetails } from "@/components/about";
import dynamic from "next/dynamic";
import { RenderModel } from "@/components/render-model";
import { NunuModel } from "@/components/models/Nunu";

const LichKingHelmetModel = dynamic(
  () => import("@/components/models/LichKingHelmet"),
  {
    ssr: false,
  }
);

export default function About() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-screen object-cover object-center opacity-25"
      />
      <div className="w-full h-full xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <NunuModel />
        </RenderModel>
      </div>

      {/* Pozdrav ljudi,

Napravio sam malu CV web aplikaciju, malo sam koristio 3D modele, malo animacije, malo geometriju a sve u cilju korišenja NextJS-a i Vercel-a. Puno bi mi značilo da bilo ko ima vremena uđe, pogleda ostavi komentar, svaki savet za poboljšanje je dobro došao, tako da pišite u komentarima! */}

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute w-full flex flex-col items-center text-center top-2/3 sm:top-[70%] -translate-y-1/2 left-1/2 -translate-x-1/2">
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

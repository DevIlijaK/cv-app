"use client";
import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import ContactForm from "@/components/contact/form";

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-screen object-cover object-center opacity-25"
      />
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center w-full sm:w-3/4 space-y-6 ">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            summon the wizzard
          </h1>
          <p className="text-sm sm:text-base text-center font-light">
            Greetings, seeker of arcane knowledge! If you&apos;ve wandered into
            this corner of the ether, it seems you require my magical services.
            Whether you need a spell cast, a potion brewed, or ancient runes
            translated, you&apos;re in the right place. Please fill out the form
            below, and I shall respond in a timely manner — or as soon as the
            astral winds allow.
          </p>
        </div>
        <ContactForm />
      </article>
    </>
  );
}

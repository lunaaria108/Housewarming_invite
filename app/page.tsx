"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/navigation";
import { Pixelify_Sans } from "next/font/google";
import { useState } from "react";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixelify",
});

export default function Home() {
  const router = useRouter();

  const [showButtons, setShowButtons] = useState(false);

  return (
    <div className="relative min-h-[100dvh] overflow-hidden">
      <Image src="/images/bg.jpg" alt="cat" fill quality={100} unoptimized className="object-cover -z-10"></Image>
    <main className={`${pixelify.className} min-h-screen flex flex-col items-center justify-center relative`}>
      <div className="text-center sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl bg-[#657341] p-6 rounded-xl shadow-lg max-w-xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(60)
              .typeString("You're invited to...")
              .pauseFor(700)

              .typeString("<br/>Edward and Luna's housewarming party!")
              .pauseFor(700)

              .typeString("<br/>Games! Food! Karaoke! Alcohol! (Swimming?!)")
              .pauseFor(700)

              .typeString("<br/>Monday, May 24th @ 3pm in Brookhaven")
              .pauseFor(700)
            
              .typeString("<br/>Will you be there?")
              .callFunction(() => {
                setShowButtons(true);
              })
              .start();
            }}
          />


      {showButtons && (
        <div>
          <div className="flex justify-center pt-6">
          <Image src="/images/party-cat.gif" alt="party-cat!!" width={200} height={200}></Image>
          </div>
        <div className={`${pixelify.className} flex justify-evenly gap-10 mt-8`}> 
              <button 
              onClick={() => {
                 router.push("/yes");
              }}
              className="bg-[#f1bbbb] text-white rounded p-2 w-20">
                Yes!!
              </button>
              <button 
              onClick={() => {
               router.push("/no");
              }}
              className="bg-[#f1bbbb] text-white rounded p-2 w-20">
                No
              </button>
        </div>
        </div>
      )}
    </div>
    </main>
    </div>
  );
}

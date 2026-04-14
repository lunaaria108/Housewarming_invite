import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";
import RSVP from "../components/rsvp";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixelify",
});


export default function Yes() {
    return(
        <div className="relative min-h-[100dvh] overflow-hidden">
            <Image src="/images/bg.jpg" alt="cat" fill quality={100} unoptimized className="object-cover -z-10"></Image>
            <main className={`${pixelify.className} min-h-screen flex items-center justify-center`}>
                <div className="text-center sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-w-xl mx-auto bg-[#657341] p-6 rounded-xl shadow-lg max-w-xl">
                    <p className="p-5">Yippee!!</p>
                    <div className="flex justify-center">
                        <Image src="/images/happy-cat.gif" alt="happy cat!" width={250} height={100}/>
                    </div>
                    <p>Message us for the addy!</p>
                    <p className="p-5">There's an optional potluck - you don't have to bring any food, but if you'd like to you're more than welcome to!</p>
                    <RSVP response="yes"/>
                </div>
            </main>
        </div>
    );
}
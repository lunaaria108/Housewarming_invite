import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";
import RSVP from "../components/rsvp";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixelify",
});

export default function No() {
     return(
            <div className="relative min-h-[100dvh] overflow-hidden">
                <Image src="/images/bg.jpg" alt="cat" fill quality={100} unoptimized className="object-cover -z-10"></Image>
                <main className={`${pixelify.className} min-h-screen flex flex-col items-center justify-center relative`}>
                    <div className="text-center sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-w-xl mx-auto bg-[#657341] p-6 rounded-xl shadow-lg max-w-xl">
                        <div className="flex justify-center">
                            <Image src="/images/sad-cat.gif" alt="sad cat :(" width={250} height={100}/>
                        </div>
                        <p className="p-5">We'll see you next time 💔</p>
                        <RSVP response="no"/>
                    </div>
                </main>
            </div>
        );
}
import Experience from "@/components/Experience";
import ProfileDock from "@/components/ProfileDock";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Marquee from "@/components/ui/Marquee";
import VideoIntro from "@/components/VideoIntro";
import { allLinks } from "@/data";
import { MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-2 max-w-[1920px] mx-auto">
      <div className="grid sm:grid-cols-4 md:grid-cols-8 xl:grid-cols-12 gap-2 md:gap-4 lg:gap-6 lg:px-4 px-2">
        <section className="col-span-4 md:col-span-4">
          <ProfileDock />
        </section>
        <div className="col-span-4 xl:col-span-8 grid gap-2 md:gap-4 lg:gap-6 grid-cols-4 xl:grid-cols-8">
          <section className="col-span-4 sm:col-span-2 md:col-span-4 space-y-4 lg:space-y-6">
            <Experience />
            <Skills />
            {/* <VideoIntro /> */}
          </section>
          <section className="col-span-4 sm:col-span-2 md:col-span-4">
            <Projects />
          </section>
        </div>
        <section className="col-span-4 xl:col-span-8">
          <Services/>
        </section>
        <section className="col-span-4">
          <div className="bg-white dark:bg-slate-800 dark:border-purple-950/25 shadow-md border rounded p-5 h-full">
            <Marquee notifications={[{message:"Building digital solutions that deliver."},{message:"Let's build your dream website together."}]}/>
            <h3 className="mt-4 text-4xl font-bold uppercase tracking-widest leading-[3.25rem]">Just a <br/>Click Away</h3>
            <Link href={allLinks.connectLink.href} className="nav-btn inline-flex mt-4">{allLinks.connectLink.label} <MessageSquare className="w-[15px] ms-1"/></Link>
          </div>
        </section>
      </div>
    </main>
  );
}

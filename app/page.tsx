"use client";
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
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

// Create a mobile detection hook
const useMobile = () => useMediaQuery({ maxWidth: 767 });

export default function Home() {
  const isMobile = useMobile();

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="p-2 max-w-[1920px] mx-auto">
      <div className="grid sm:grid-cols-4 md:grid-cols-8 xl:grid-cols-12 gap-2 md:gap-4 lg:gap-6 lg:px-4 px-2">
        {/* Profile Dock Section */}
        <motion.section
          className="col-span-4 md:col-span-4"
          initial={isMobile ? "hidden" : "visible"}
          whileInView={isMobile ? "visible" : "visible"}
          viewport={{ once: true, margin: "-20px" }}
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <ProfileDock />
        </motion.section>

        {/* Grid Container */}
        <div className="col-span-4 xl:col-span-8 grid gap-2 md:gap-4 lg:gap-6 grid-cols-4 xl:grid-cols-8">
          {/* Experience & Skills Section */}
          <div className="flex flex-col col-span-4 sm:col-span-2 md:col-span-4 space-y-4 lg:space-y-6">
            <motion.section
              initial={isMobile ? "hidden" : "visible"}
              whileInView={isMobile ? "visible" : "visible"}
              viewport={{ once: true, margin: "-20px" }}
              variants={sectionVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Experience />
            </motion.section>
            <motion.section
            className="bg-white/25 backdrop-blur-sm dark:bg-slate-700/25 dark:border-purple-950/25 shadow-md border rounded p-5 flex-1"
              initial={isMobile ? "hidden" : "visible"}
              whileInView={isMobile ? "visible" : "visible"}
              viewport={{ once: true, margin: "-20px" }}
              variants={sectionVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Skills />
            </motion.section>
          </div>

          {/* Projects Section */}
          <motion.section
            className="col-span-4 sm:col-span-2 md:col-span-4"
            initial={isMobile ? "hidden" : "visible"}
            whileInView={isMobile ? "visible" : "visible"}
            viewport={{ once: true, margin: "-20px" }}
            variants={sectionVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Projects />
          </motion.section>
        </div>

        {/* Services Section */}
        <motion.section
          className="col-span-4 xl:col-span-8"
          initial={isMobile ? "hidden" : "visible"}
          whileInView={isMobile ? "visible" : "visible"}
          viewport={{ once: true, margin: "-20px" }}
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <Services />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="col-span-4"
          initial={isMobile ? "hidden" : "visible"}
          whileInView={isMobile ? "visible" : "visible"}
          viewport={{ once: true, margin: "-20px" }}
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white/25 backdrop-blur-sm dark:bg-slate-700/25 dark:border-purple-950/25 shadow-md border rounded p-5 h-full">
            <Marquee
              notifications={[
                { message: "Building digital solutions that deliver." },
                { message: "Let's build your dream website together." },
              ]}
            />
            <h3 className="mt-4 text-4xl font-bold uppercase tracking-widest leading-[3.25rem]">
              Just a <br />
              Click Away
            </h3>
            <Link
              target="_blank"
              href={allLinks.connectLink.href}
              className="nav-btn inline-flex mt-4"
            >
              {allLinks.connectLink.label}{" "}
              <MessageSquare className="w-[15px] ms-1" />
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

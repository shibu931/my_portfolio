import React from "react";
import { BackgroundGradientAnimation } from "./ui/BackgroundGradientAnimation";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/TextGeneratorEffect";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaRegEnvelope,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

const ProfileDock = () => {
  return (
    <div className="bg-white/25 backdrop-blur-sm dark:bg-slate-700/25 dark:border-purple-950/25 shadow-md border rounded p-4 sticky top-[70px] pb-6 lg:pb-8">
      <div className="rounded shadow mb-4 border w-full relative h-[280px] dark:border-purple-950/25 overflow-hidden">
        <BackgroundGradientAnimation />
        <div className="absolute w-full h-full flex justify-center p-2 pb-0">
          <Image
            src="/assets/profile.webp"
            width={400}
            height={280}
            priority
            alt="Hypexdev"
            className="object-contain object-bottom"
          />
        </div>
      </div>
      <div className="ps-1">
        <h1 className="text-[1rem] font-bold uppercase my-3 font-orbitron">
          <TextGenerateEffect words="Hey, I'm Shippu Kumar" />
        </h1>
        <p className="text-base text-gray-700 dark:text-gray-400">
          I&apos;m a passionate <strong className="dark:text-gray-300">Full-Stack developer</strong> with{" "}
          <strong className="dark:text-gray-300">15+ technologies</strong> under my belt. I love turning
          creative ideas into real, functional
          <strong className="dark:text-gray-300"> digital products</strong> that go above and beyond what
          clients expect. Let&apos;s work together and bring your vision to life!
        </p>
      </div>
      <div className="mt-4 ps-1 flex items-center">
        <a target="_blank" href="tel:+919319115745" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded text-base px-3 md:px-3 py-2 xl:px-5 md:py-2.5 text-center me-2 mb-2 inline-flex gap-2 items-center">
            <FaPhone className="w-5 rotate-90" />
            Call
        </a>
        <a target="_blank" href="https://t.me/hypexdev"  title="Telegram" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-semibold rounded text-base px-3 md:px-3 py-2 xl:px-5 md:py-2.5 text-center me-2 mb-2 inline-flex gap-2 items-center">
            <FaTelegramPlane className="w-5 text-2xl" />
        </a>
        <a target="_blank" href="https://api.whatsapp.com/send?phone=919319115745&text=Hey%2C%0AI%27m%20interested%20in%20your%20services" title="WhatsApp" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-semibold rounded text-base px-3 md:px-3 py-2 xl:px-5 md:py-2.5 text-center me-2 mb-2 inline-flex gap-2 items-center">
            <FaWhatsapp className="w-5 text-2xl" />
        </a>
        <a target="_blank" href="mailto:shippu@hypexdev.com" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-semibold rounded text-base px-3 md:px-3 py-2 xl:px-5 md:py-2.5 text-center me-2 mb-2 inline-flex gap-2 items-center">
            <FaRegEnvelope className="text-xl" />
            Email
        </a>
      </div>
      <hr className="my-4 dark:border-white/25" />
      <div className="flex space-x-3 justify-center">
        <a target="_blank" aria-label="Github" className="text-2xl" href="https://github.com/shibu931">
          <FaGithub />
        </a>
        <a
          target="_blank" aria-label="LinkedIn" className="text-2xl"
          href="https://www.linkedin.com/in/shippukumar931/"
        >
          <FaLinkedin />
        </a>
        <a target="_blank" aria-label="Instagram" className="text-2xl" href="https://www.instagram.com/its.shibu__/">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default ProfileDock;

import ContactForm from "@/components/ContactForm";
import ProfileDock from "@/components/ProfileDock";
import React from "react";

const page = () => {
  return (
    <div className="p-2 max-w-[1920px] mx-auto">
      <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6 lg:px-4 px-2">
        <div className="col-span-1">
          <ProfileDock />
        </div>
        <div className="col-span-2">
          <div className="bg-white dark:bg-slate-800 dark:border-purple-950/25 shadow-md border rounded p-6">
            <h2 className="text-2xl font-bold uppercase font-orbitron tracking-wider mb-2">
              Get Back To Me
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-400">Let's build something amazing together. I offer web development, strategic marketing, and SEO expertise to create exceptional digital experiences and grow your business.</p>
            <div className="mt-5">
              <ContactForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

"use client";
import React from "react";
import Image from "next/image";

interface Service {
  title: string;
  iconDark: string;
  iconLight: string;
}

const ServiceCard: React.FC<Service> = ({ title, iconDark, iconLight }) => {
  return (
    <div className="relative bg-[linear-gradient(110deg,#f0f0f0_0.6%,#e0e0e0)] dark:bg-[linear-gradient(110deg,#0f172a60,#0f172a)]  p-4 h-full w-full rounded-md border border-[#cacaca] dark:border-slate-900/50">
      <div className="flex justify-center p-4">
        <Image
          src={"/assets/icons/" + iconLight}
          width={256}
          height={256}
          className="dark:hidden w-[60px] h-[60px] opacity-90"
          alt={title}
        />
        <Image
          src={"/assets/icons/" + iconDark}
          width={256}
          height={256}
          className="hidden dark:block w-[60px] h-[60px] opacity-90"
          alt={title}
        />
      </div>
      <h3 className="font-medium text-lg text-slate-800/90  dark:text-[#eaeaea] text-center mt-3">
        {title}
      </h3>
    </div>
  );
};

export default ServiceCard;

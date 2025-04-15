import Image from "next/image";
import React from "react";

interface Experiences {
  company:string;
  title: string;
  img: string;
  year: string;
  description: string;
  isNew:boolean;
}

interface TimelineProps {
  experiences: Experiences[];
}

const Timeline = ({ experiences }: TimelineProps) => {
  return (
    <>
      <ol className="relative border-s-[2px] pe-2 border-slate-900/50">
        {experiences.map(({ company, title, img, year, description,isNew },index) => (
          <li key={index} className={`ms-6 border-b-4 rounded-xl dark:border-slate-900/50 border-purple-600/25 ${
            index === experiences.length - 1 ? 'mb-5' : 'mb-10'
          }`}>
            <span className="absolute flex items-center border dark:border-gray-400/30 justify-center w-12 h-12 bg-blue-100 rounded-full -start-6 ring-1 ring-white dark:ring-gray-900">
              <Image
                src={"/assets/" + img}
                width={120}
                height={120}
                className={"object-contain"}
                alt={company}
              />
            </span>
            <div className="ms-4">
              <h3 className="flex items-center text-lg font-medium text-gray-900 dark:text-white">
                {company}{" "}
                {isNew && <span className="bg-violet-100 text-violet-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-violet-900 dark:text-violet-300 ms-3">
                  Latest
                </span>}
              </h3>
              <h4 className="mb-1 dark:text-gray-200 text-sm">{title}</h4>
              <p className="mb-2 text-base font-normal text-gray-600 dark:text-gray-400">
                {description}
              </p>
              <time className="block mb-4 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                Period: {year}
              </time>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Timeline;

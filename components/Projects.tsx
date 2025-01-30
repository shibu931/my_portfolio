import React from "react";
import ProjectCard from "./ui/ProjectCard";

const Projects = () => {
  const data = [
    {
      title: "Anabolichub",
      description: "Ecommerce Shop For Steroids",
      image: "p1.svg",
      link: "https://anabolichub.com",
      technologies: ["", ""],
    },
    {
      title: "Leemart - Brand Page",
      description: "Water Purifier Brand Landing Page",
      image: "p2.svg",
      link: "https://leemart.co.in",
      technologies: ["", ""],
    },
    {
      title: "StayInMukteshwar",
      description: "A Guest house landing Page",
      image: "p4.svg",
      link: "https://stayinmukteshwar.com",
      technologies: ["", ""],
    },
    {
      title: "Imaginify",
      description: "A Sass application for image editing",
      image: "p3.svg",
      link: "https://anabolichub.com",
      technologies: ["", ""],
    },
  ];
  return (
    <div className="bg-white dark:bg-slate-800 dark:border-purple-950/25 shadow-md border rounded p-5 h-full">
      <div className="flex lg:justify-between flex-col lg:flex-row">
        <h2 className="text-xl font-bold uppercase font-orbitron tracking-wider">
          Recent Projects
        </h2>
        <a
          href=""
          className="tracking-wide text-violet-400 underline underline-offset-2"
        >
          All Projects
        </a>
      </div>
      <div className="flex flex-col gap-y-4 mt-3 sm:mt-4">
        {data.slice(0,3).map(({ title, description, image, link, technologies }) => (
          <ProjectCard
            title={title}
            description={description}
            image={image}
            link={link}
            technologies={technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import ProjectCard from "./ui/ProjectCard";
import { projects } from "@/data";

const Projects = () => {
  return (
    <div className="bg-white/25 backdrop-blur-sm dark:bg-slate-700/25 dark:border-purple-950/25 shadow-md border rounded p-5 h-full">
      <div className="flex lg:justify-between flex-col lg:flex-row">
        <h2 className="text-xl font-bold uppercase font-orbitron tracking-wider">
          Recent Projects
        </h2>
        <a
          href="#"
          className="tracking-wide text-violet-400 underline underline-offset-2"
        >
          All Projects
        </a>
      </div>
      <div className="flex flex-col gap-y-4 mt-3 sm:mt-4">
        {projects.slice(0,3).map(({ title, description, image, link, technologies }) => (
          <ProjectCard
            key={title}
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

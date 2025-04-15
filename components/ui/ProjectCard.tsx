import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  image: string; 
  link?: string; 
  technologies?: string[]; 
}

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  image,
  link,
  technologies,
}) => {
  return (
    <div className="bg-violet-200/25 dark:bg-slate-600/25 rounded-lg border dark:border-purple-950 shadow overflow-hidden p-2 lg:p-4">
      <div className="relative w-full overflow-hidden rounded-xl lg:rounded-3xl md:h-[280px] h-[200px] mb-2 border border-slate-400 dark:border-slate-600 shadow-md">
        <div className="relative w-full h-full overflow-hidden rounded-xl lg:rounded-3xl dark:bg-[#13162d] bg-[#808ef6]">
          <img src="/assets/bg.png" alt="bg-img" />
        </div>
        <img src={"/assets/"+image} alt={title} className="z-10 bottom-0 absolute " />
      </div>
      <div className="p-2 pb-0 flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium tracking-wide text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{description}</p>
          {technologies && technologies.map((tech)=>(
            <span key={tech}>{tech}</span>
          ))}
        </div>
        {link && (
          <Link
          aria-label={title}
            href={link}
            className="inline-block bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded transition duration-300 dark:bg-violet-600 dark:hover:bg-violet-800"
          >
            <FiExternalLink />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

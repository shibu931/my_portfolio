import React from "react";
import {skills} from '../data.js'
import Image from "next/image";

const Skills = () => {
  return (
    <div className="bg-white dark:bg-slate-800 dark:border-purple-950/25 shadow-md border rounded p-5">
      <h2 className="text-xl font-bold uppercase font-orbitron tracking-wider">
        My Skills
      </h2>
      <div className="mt-3 sm:mt-10">
      <div className="flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className='block-container w-[4.25rem] h-[4.25rem]'>
              <div className="btn-back shadow-btn-back-light dark:shadow-btn-back-dark rounded-xl" />
              <div title={skill.name+" - "+skill.type}  className='btn-front dark:bg-slate-800 rounded-xl flex flex-col justify-center items-center'>
                {/* {skill.imageUrl.src} */}
                <Image src={skill.imageUrl.src} width={60} height={60} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
                <span className="text-xs line-clamp-1 mt-1 text-gray-600 dark:text-gray-400">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

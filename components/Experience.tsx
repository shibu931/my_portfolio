import React from 'react'
import Timeline from './ui/Timeline';

const Experience = () => {
    const experiences = [
        { year: '2024 - Present', company:'Freelance', img:'freelance.webp', title: 'Full-Stack Developer', description: 'Worked on Next.js projects using Tailwind CSS for styling.', isNew:true},
        { year: '2023 - 2024', company:'Learn With Fraternity', img:'lwf.webp', title: 'Full-Stack Developer', description: 'Worked on Next.js projects using Tailwind CSS for styling.', isNew:false},
        // { year: '2020 - 2023', company:'Clickinpedia', img:'cip.webp', title: 'Frontend Developer', description: 'Worked on Next.js projects using Tailwind CSS for styling.', isNew:false},
      ];
  return (
    <div className='bg-white dark:bg-slate-800 dark:border-purple-950/25 shadow-md border rounded p-5'>
        <h2 className='text-xl font-bold uppercase font-orbitron tracking-wider'>Work Experience</h2>
        <div className='ms-3 xl:ms-4 mt-3 sm:mt-4'>
            <Timeline experiences={experiences}/>
        </div>
    </div>
  )
}

export default Experience
import React from 'react'
import Timeline from './ui/Timeline';

const Experience = () => {
    const experiences = [
        { year: '2024 - Present', company:'Freelance', img:'freelance.webp', title: 'Full-Stack Developer', description: 'Freelance Full-Stack Developer crafting end-to-end web solutions, from front-end design to back-end development and deployment.', isNew:true},
        { year: '2023 - 2024', company:'Learn With Fraternity', img:'lwf.webp', title: 'Full-Stack Developer', description: 'Developed and maintained both front-end and back-end systems using Java, MySQL, and Spring Boot, ensuring seamless integration and functionality.', isNew:false},
        { year: '2020 - 2023', company:'Clickinpedia', img:'cip.webp', title: 'Frontend Developer', description: 'Developed user-friendly and visually appealing UIs, focusing on optimizing page load speeds for improved Google Page Insights scores.', isNew:false},
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
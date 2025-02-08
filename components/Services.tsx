import { allLinks } from '@/data'
import React from 'react'
import ServiceCard from './ui/ServiceCard'

const Services = () => {
    const services = [
        {
            title:'Web Development',
            iconDark:'web-dark.png',
            iconLight:'web-light.png',
        },
        {
            title:'Digital Marketing',
            iconDark:'digital-dark.png',
            iconLight:'digital-light.png',
        },
        {
            title:'App Development',
            iconDark:'app-dark.png',
            iconLight:'app-light.png',
        },
        {
            title:'Video Editing',
            iconDark:'video-dark.png',
            iconLight:'video-light.png',
        },
    ]
  return (
    <div className="bg-white dark:bg-slate-800 dark:border-purple-950/25 shadow-md border rounded p-5">
    <div className="flex lg:justify-between flex-col lg:flex-row">
      <h2 className="text-xl font-bold uppercase font-orbitron tracking-wider">
        Service&apos;s I Offer
      </h2>
      <a
        href={allLinks.service.href}
        className="nav-btn"
      >
        {allLinks.service.label}
      </a>
    </div>
    <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {
            services.map(({title,iconDark,iconLight})=>(
                <ServiceCard key={title} title={title} iconDark={iconDark} iconLight={iconLight}/>
            ))
        }
    </div>
  </div>
  )
}

export default Services
import { label } from "motion/react-client";
import {
    css,
    express,
    git,
    github,
    html,
    javascript,
    mongodb,
    nextjs,
    nodejs,
    react,
    redux,
    tailwindcss,
    typescript,
    aws,
    java,
    springboot,
    mysql,
    wordpress,
    shopify
} from "./public/assets/icons";

// const contactLinks = [
//     {
//         title:'Call Me',
//         href:'tel:+919319115745',
//         className:'bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800',
//         icon:<FaPhone/>,
//         iconStyle:'w-5 rotate-90'
//     },
//     {
//         title:'',
//         href:'',
//         className:'',
//         icon:<FaTelegramPlane/>
//     }
// ]

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: springboot,
        name: "Spring Boot",
        type: "Backend",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: wordpress,
        name: "Wordpress",
        type: "Website Builder",
    },
    {
        imageUrl: shopify,
        name: "Shopify",
        type: "Website Builder",
    },

]

export const allLinks ={
    service:{
        label:'See All Services',
        href:'/services'
    },
    connectLink:{
        label:"Let's Connect",
        href:'/contact'
    }
}
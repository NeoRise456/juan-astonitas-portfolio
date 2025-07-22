import {RiNextjsFill} from "react-icons/ri";
import {BiLogoReact, BiLogoTailwindCss, BiLogoTypescript} from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import MainEmploymentCard from "@/components/employment/main-employment-card";

const employmentList = [
    {
        company: "Intercert Latam",
        position: "Software Engineer Intern",
        modality: "On Site",
        startDate: "January 2025",
        endDate: "April 2025",
        description: "Development of websites and web applications using React, TypeScript, and Next.js. Led Multifunctional Technical Audits of outsourced projects, trained internal teams on technological tools, and provided strategic consulting for IT infrastructure decisions.",
        technologies: [
            { icon: RiNextjsFill , label: "Next.js" },
            { icon: BiLogoReact , label: "React"},
            { icon: BiLogoTypescript, label: "TypeScript" },
            { icon: BiLogoTailwindCss, label: "Tailwind" },
        ]
    },
    {
        company: "Software Developer",
        position: "Software Engineer Intern",
        modality: "On Site",
        startDate: "2022",
        endDate: "2024",
        description: "Development of websites and web applications using React, TypeScript, and Next.js, including dashboards and management panels. Systems management with Node.js, version control with Git and AWS, and backend in Laravel, with experience in WordPress.",
        technologies: [
            { icon: RiNextjsFill , label: "Next.js" },
            { icon: BiLogoReact , label: "React"},
            { icon: BiLogoTypescript, label: "TypeScript" },
            { icon: BiLogoTailwindCss, label: "Tailwind" },
        ]
    },
    {
        company: "Software Developer",
        position: "Software Engineer Intern",
        modality: "On Site",
        startDate: "2022",
        endDate: "2024",
        description: "Development of websites and web applications using React, TypeScript, and Next.js, including dashboards and management panels. Systems management with Node.js, version control with Git and AWS, and backend in Laravel, with experience in WordPress.",
        technologies: [
            { icon: RiNextjsFill , label: "Next.js" },
            { icon: BiLogoReact , label: "React"},
            { icon: BiLogoTypescript, label: "TypeScript" },
            { icon: BiLogoTailwindCss, label: "Tailwind" },
        ]
    }
]

export default function EmploymentSection(){
    return (
        <div className={`relative`}>
            <h2 className={`mb-3 text-sm uppercase tracking-wider`}>Last Position</h2>
            <MainEmploymentCard employment={employmentList[0]}/>

            <div className={`flex items-center`}>
                <IoIosArrowDown className={`mr-2 rotate-90`} size={12}/>
                <span className={`text-xs`}>Previous Roles</span>
            </div>
        </div>
    );
}
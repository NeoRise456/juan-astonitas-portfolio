'use client'

import {RiNextjsFill} from "react-icons/ri";
import {BiLogoMicrosoft, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript} from "react-icons/bi";
import { SiGooglemeet } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import MainEmploymentCard from "@/components/employment/main-employment-card";
import {useState} from "react";
import PastEmploymentCard from "@/components/employment/past-employment-card";

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
        company: "Papaya Tutor",
        position: "Tutor",
        modality: "Remote",
        startDate: "2025",
        endDate: "2024",
        description: "Proficiently delivered Reading and Mathematics instruction to American children (ages 8-14) at Papaya, a startup focused on supplementary education. Conducted classes exclusively in English, creating a dynamic curriculum to complement students school learning.",
        technologies: [
            { icon: BiLogoMicrosoft , label: "React"},
            { icon: SiGooglemeet , label: "TypeScript" },
        ]
    }
]

export default function EmploymentSection(){

    //TODO: refactor names of states
    const [open, setOpen] = useState(false);
    const [showCards, setShowCards] = useState(false);

    const handleToggle = () => {
        if (!open) {
            setShowCards(true);
            setOpen(true);
        } else {
            setOpen(false);
            setTimeout(() => setShowCards(false), (employmentList.length -1 ) * 100 );
        }
    };

    return (
        <div className={`relative mb-8`}>
            <h2 className={`mb-3 text-sm uppercase tracking-wider`}>Last Position</h2>
            <MainEmploymentCard employment={employmentList[0]}/>

            <div className={`flex`}>
                <div className={`flex items-center mb-4`} onClick={handleToggle}>
                    <IoIosArrowDown className={`mr-2 transition-transform ease-in-out duration-150 ${open && "rotate-90"}`} size={12}/>
                    <span className={`text-xs`}>Previous Experience</span>
                </div>
            </div>

            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${showCards ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                    <div className="space-y-6 pl-6 pt-2">
                        {employmentList.slice(1).map((employment, index) => (
                            <PastEmploymentCard
                                key={index}
                                employment={employment}
                                className={open ? `animate-fade-right animate-ease-in-out animate-duration-300` : `animate-fade-right-reverse`}
                                style={{ animationDelay: `${ open ? (index * 100) : ((employmentList.length - index - 1)  * 100 ) }ms` }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
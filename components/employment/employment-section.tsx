"use client";

import {RiNextjsFill} from "react-icons/ri";
import {
    BiLogoAngular, BiLogoDocker,
    BiLogoMicrosoft,
    BiLogoReact,
    BiLogoSpringBoot,
    BiLogoTailwindCss,
    BiLogoTypescript
} from "react-icons/bi";
import { SiGooglemeet } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import MainEmploymentCard from "@/components/employment/main-employment-card";
import {useState} from "react";
import PastEmploymentCard from "@/components/employment/past-employment-card";
import {useTranslations} from "next-intl";



export default function EmploymentSection(){

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
            startDate: "2024",
            endDate: "2025",
            description: "Proficiently delivered Reading and Mathematics instruction to American children (ages 8-14) at Papaya, a startup focused on supplementary education.",
            technologies: [
                { icon: BiLogoMicrosoft , label: "Microsoft 365"},
                { icon: SiGooglemeet , label: "Google Meet" },
            ]
        }
    ]

    const t = useTranslations('Employment')

    //TODO: refactor names of states
    const [open, setOpen] = useState(false);
    const [showCards, setShowCards] = useState(false);

    const handleToggle = () => {
        if (!open) {
            setShowCards(true);
            setOpen(true);
        } else {
            setOpen(false);
            setTimeout(() => setShowCards(false), (employmentList.length -1 ) * 80 );
        }
    };

    return (
        <section className={`relative mb-8`}>
            <h2 className={`mb-3 text-sm uppercase tracking-wider`}>{t('title')}</h2>
            <MainEmploymentCard employment={employmentList[0]}/>

            <div className={`flex`}>
                <div className={`flex items-center mb-4 cursor-pointer`} onClick={handleToggle}>
                    <IoIosArrowDown className={`mr-2 transition-transform ease-in-out duration-150 ${open && "rotate-90"}`} size={12}/>
                    <span className={`text-xs`}>{t('subtitle')}</span>
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
        </section>
    );
}
"use client";

import type {IconType} from "react-icons";
import {RiNextjsFill} from "react-icons/ri";
import {
    BiLogoAngular, BiLogoDocker,
    BiLogoMicrosoft,
    BiLogoReact,
    BiLogoTailwindCss,
    BiLogoTypescript
} from "react-icons/bi";
import { SiGooglemeet, SiNestjs, SiPayloadcms, SiPostgresql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import MainEmploymentCard from "@/components/employment/main-employment-card";
import {useState} from "react";
import PastEmploymentCard from "@/components/employment/past-employment-card";
import {useLocale, useTranslations} from "next-intl";
import type {Locale} from "@/i18n/config";
import {experience, formatRange} from "@/lib/resume-data";

const TECH_ICONS: Record<string, IconType> = {
    "Next.js": RiNextjsFill,
    "NestJS": SiNestjs,
    "AWS": FaAws,
    "PostgreSQL": SiPostgresql,
    "Docker": BiLogoDocker,
    "Payload CMS": SiPayloadcms,
    "Angular": BiLogoAngular,
    "TypeScript": BiLogoTypescript,
    "React": BiLogoReact,
    "Tailwind": BiLogoTailwindCss,
    "Microsoft 365": BiLogoMicrosoft,
    "Google Meet": SiGooglemeet,
};

export default function EmploymentSection(){

    const t = useTranslations('Employment');
    const locale = useLocale() as Locale;

    const employmentList = experience.map((job) => {
        const {start, end} = formatRange(job.start, job.end, locale, "long");
        return {
            company: job.company,
            position: job.position[locale],
            modality: job.modality[locale],
            startDate: start,
            endDate: end,
            description: job.description[locale],
            technologies: job.technologies
                .filter((label) => TECH_ICONS[label])
                .map((label) => ({icon: TECH_ICONS[label], label})),
        };
    });

    const [open, setOpen] = useState(false);
    const [showExperience, setShowExperience] = useState(false);

    const handleToggle = () => {
        if (!open) {
            setShowExperience(true);
            setOpen(true);
        } else {
            setOpen(false);
            setTimeout(() => setShowExperience(false), (employmentList.length -1 ) * 80 );
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

            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${showExperience ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
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

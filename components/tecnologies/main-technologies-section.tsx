"use server";

import TechnologyCard from "@/components/tecnologies/technology-card";
import {
    BiLogoTypescript,

    BiLogoTailwindCss,
    BiLogoDocker,
    BiLogoReact,
    BiLogoPostgresql,
    BiLogoGit, BiLogoPython
} from "react-icons/bi";
import {RiNextjsFill} from "react-icons/ri";
import {getTranslations} from "next-intl/server";


const technologies = [
    { icon: RiNextjsFill , label: "Next.js" },
    { icon: BiLogoTypescript, label: "TypeScript" },
    { icon: BiLogoTailwindCss, label: "Tailwind" },
    { icon: BiLogoPostgresql, label: "PostgreSQL" },
    { icon: BiLogoDocker, label: "Docker" },
    { icon: BiLogoReact , label: "React"},
    { icon: BiLogoPython , label: "Python"},
];

export default async function MainTechnologiesSection(){

    const t = await getTranslations('Technologies');

    return (
        <div className={`relative animate-fade animate-duration-150 animate-ease-in-out`}>
            <h2 className={`mb-3 text-sm uppercase tracking-wider `}>{t('title')}</h2>
            <div className={`grid grid-cols-4 gap-1 sm:grid-cols-6 md:grid-cols-7 `}>
                {
                    technologies.map((technology , index) => (
                        <TechnologyCard
                            key={index}
                            icon={technology.icon}
                            label={technology.label}
                            className={`animate-fade-up animate-duration-300 animate-ease-in-out`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        />
                    ))
                }
            </div>
            <div className={`text-right`}>
                <span className={`text-xs text-muted-foreground text-right`}>{t('more')}</span>
            </div>
        </div>
    );
}
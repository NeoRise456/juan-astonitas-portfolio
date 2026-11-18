"use server";

import TechnologyCard from "@/components/tecnologies/technology-card";
import {
    BiLogoTypescript,

    BiLogoTailwindCss,
    BiLogoDocker,
    BiLogoReact,
    BiLogoPostgresql,
} from "react-icons/bi";
import {SiNestjs} from "react-icons/si";
import type {IconBaseProps} from "react-icons";
import {cn} from "@/lib/utils";
import {RiNextjsFill} from "react-icons/ri";
import {getTranslations} from "next-intl/server";


// Simple Icons fill their whole box while BoxIcons have built-in padding; inset it to match.
function NestJsIcon(props: IconBaseProps) {
    return <SiNestjs {...props} className={cn(props.className, "p-1")}/>;
}

const technologies = [
    { icon: RiNextjsFill , label: "Next.js" },
    { icon: BiLogoTypescript, label: "TypeScript" },
    { icon: BiLogoTailwindCss, label: "Tailwind" },
    { icon: BiLogoPostgresql, label: "PostgreSQL" },
    { icon: BiLogoDocker, label: "Docker" },
    { icon: BiLogoReact , label: "React"},
    { icon: NestJsIcon , label: "NestJS"},
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
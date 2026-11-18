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
import { SiGooglemeet, SiNestjs, SiPayloadcms, SiPostgresql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import MainEmploymentCard from "@/components/employment/main-employment-card";
import {useState} from "react";
import PastEmploymentCard from "@/components/employment/past-employment-card";
import {useLocale, useTranslations} from "next-intl";



export default function EmploymentSection(){

    const t = useTranslations('Employment');
    const locale = useLocale();

    const employmentList = locale === 'en' ? [
        {
            company: "UPC",
            position: "Full-Stack Developer",
            modality: "Remote",
            startDate: "August 2026",
            endDate: "Present",
            description: "Developing an internal accreditation audit platform for the Faculty of Engineering at Universidad Peruana de Ciencias Aplicadas. It validates ABET course portfolios stored in S3 against the official guidelines, cross-checks syllabi with the curriculum, runs AI content review, and issues signed audit certificates. Built with Next.js, NestJS, Prisma and PostgreSQL on AWS (RDS, S3), deployed with Docker.",
            technologies: [
                { icon: RiNextjsFill , label: "Next.js" },
                { icon: SiNestjs , label: "NestJS" },
                { icon: FaAws , label: "AWS" },
                { icon: SiPostgresql, label: "PostgreSQL" },
                { icon: BiLogoDocker , label: "Docker" },
            ]
        },
        {
            company: "Chiki Pro",
            position: "Freelance Full-Stack Developer",
            modality: "Remote",
            startDate: "August 2026",
            endDate: "Present",
            description: "Built and run the catalog site for Chiki Pro, a premium TCG accessories brand: a bilingual Next.js site with Payload CMS for products, distributors and page content. I own the whole infrastructure: Hostinger VPS managed with Dokploy, PostgreSQL, SeaweedFS as the main S3 storage with MinIO for backups, and the domain's email.",
            technologies: [
                { icon: RiNextjsFill , label: "Next.js" },
                { icon: SiPayloadcms , label: "Payload CMS" },
                { icon: SiPostgresql, label: "PostgreSQL" },
                { icon: BiLogoDocker , label: "Docker" },
            ]
        },
        {
            company: "ASV Telefonica",
            position: "Full-Stack Engineer",
            modality: "Remote",
            startDate: "April 2026",
            endDate: "August 2026",
            description: "Built the complete ASV Telefonica system with a 5-person team: public website, admin panel, quotation catalog, and contact flow using Angular, Elysia (Bun), and PostgreSQL. Owned all DevOps (Docker, Dokploy, VPS, DNS) and led SEO and Core Web Vitals improvements including an 85% gain in First Contentful Paint.",
            technologies: [
                { icon: BiLogoAngular , label: "Angular" },
                { icon: BiLogoTypescript, label: "TypeScript" },
                { icon: SiPostgresql, label: "PostgreSQL" },
                { icon: BiLogoDocker , label: "Docker" },
            ]
        },
        {
            company: "Intercert Latam",
            position: "Software Engineer Intern",
            modality: "On Site",
            startDate: "January 2025",
            endDate: "April 2025",
            description: "Development of websites and web applications using React, TypeScript, and Next.js. Led Technical Audits of outsourced projects, trained internal teams on technological tools, and provided strategic consulting for IT infrastructure decisions.",
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
    ] : [
        {
            company: "UPC",
            position: "Desarrollador Full-Stack",
            modality: "Remoto",
            startDate: "Agosto 2026",
            endDate: "Actualidad",
            description: "Desarrollo una plataforma interna de auditoría de acreditación para la Facultad de Ingeniería de la Universidad Peruana de Ciencias Aplicadas. Valida los portafolios de cursos ABET almacenados en S3 contra el lineamiento oficial, contrasta sílabos con la malla curricular, ejecuta revisión de contenido con IA y emite actas de auditoría firmadas. Construida con Next.js, NestJS, Prisma y PostgreSQL sobre AWS (RDS, S3), desplegada con Docker.",
            technologies: [
                { icon: RiNextjsFill , label: "Next.js" },
                { icon: SiNestjs , label: "NestJS" },
                { icon: FaAws , label: "AWS" },
                { icon: SiPostgresql, label: "PostgreSQL" },
                { icon: BiLogoDocker , label: "Docker" },
            ]
        },
        {
            company: "Chiki Pro",
            position: "Desarrollador Full-Stack Freelance",
            modality: "Remoto",
            startDate: "Agosto 2026",
            endDate: "Actualidad",
            description: "Construí y administro el sitio catálogo de Chiki Pro, una marca premium de accesorios TCG: un sitio bilingüe en Next.js con Payload CMS para productos, distribuidores y contenido. Soy responsable de toda la infraestructura: VPS en Hostinger gestionado con Dokploy, PostgreSQL, SeaweedFS como S3 principal con MinIO para backups, y el correo del dominio.",
            technologies: [
                { icon: RiNextjsFill , label: "Next.js" },
                { icon: SiPayloadcms , label: "Payload CMS" },
                { icon: SiPostgresql, label: "PostgreSQL" },
                { icon: BiLogoDocker , label: "Docker" },
            ]
        },
        {
            company: "ASV Telefonica",
            position: "Ingeniero de Software Full-Stack",
            modality: "Remoto",
            startDate: "Abril 2026",
            endDate: "Agosto 2026",
            description: "Construí el sistema completo de ASV Telefonica con un equipo de 5 personas: sitio público, panel de administración, catálogo de cotizaciones y formulario de contacto usando Angular, Elysia (Bun) y PostgreSQL. Fui responsable de todo el DevOps (Docker, Dokploy, VPS, DNS) y lideré mejoras de SEO y Core Web Vitals, incluyendo una mejora del 85% en First Contentful Paint.",
            technologies: [
                { icon: BiLogoAngular , label: "Angular" },
                { icon: BiLogoTypescript, label: "TypeScript" },
                { icon: SiPostgresql, label: "PostgreSQL" },
                { icon: BiLogoDocker , label: "Docker" },
            ]
        },
        {
            company: "Intercert Latam",
            position: "Ingeniero de Software Practicante",
            modality: "Presencial",
            startDate: "Enero 2025",
            endDate: "Abril 2025",
            description: "Desarrollo de sitios y aplicaciones web utilizando React, TypeScript y Next.js. Lideré Auditorías Técnicas de proyectos subcontratados, capacité a equipos internos en herramientas tecnológicas y brindé consultoría estratégica para decisiones de infraestructura de TI.",
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
            modality: "Remoto",
            startDate: "2024",
            endDate: "2025",
            description: "Impartí instrucción de Lectura y Matemáticas a niños estadounidenses (de 8 a 14 años) en Papaya, una startup enfocada en educación complementaria.",
            technologies: [
                { icon: BiLogoMicrosoft , label: "Microsoft 365"},
                { icon: SiGooglemeet , label: "Google Meet" },
            ]
        }
    ]

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

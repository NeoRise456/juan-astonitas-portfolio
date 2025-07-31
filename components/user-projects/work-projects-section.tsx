"use server";

import ProjectDialog from "@/components/user-projects/project-dialog";
import {getTranslations} from "next-intl/server";


const workProjects = [
    {
        name: 'Intercert Peru website',
        description: 'website for Intercert Peru, an iso certification company. It includes a presentation of the company, its services, a contact form and the partnership program.',
        shortDescription: 'website for Intercert Peru',
        url: 'https://www.intercert.com.pe/',
        img: '/projects/intercert-peru.png',
        technologies: ['Next.js','Prisma','Resend','Vercel'],

    },
    {
        name: 'ISO Cert. System ',
        description: 'A certificate verification page for Intercert Peru, allowing users to verify the authenticity of their iso certificates entering the certificate number.',
        shortDescription: 'system and verify page',
        url: 'https://intercert-verify-certificate-page.vercel.app/',
        img: '/projects/intercert-verify.png',
        technologies: ['Next.js','Postgres','Prisma','Vercel'],
    },
    {
        name: 'Quality Dent website',
        description: 'website for Quality Dent, a dental clinic.',
        shortDescription: 'website for Quality Dent',
        url: 'https://qualitydent.com.pe/',
        img: '/projects/intercert-verify.png', // Placeholder image
        technologies: ['Next.js','Dockploy','Hostinger'],
    }
]

export default async function WorkProjectsSection(){

    const t = await getTranslations('Work');

    return (
        <section className={`relative mb-8`}>
            <div className={`mb-3`}>
                <h2 className={`text-sm uppercase tracking-wider `}>{t('title')}</h2>
                <p className={`text-muted-foreground text-xs`}> {t('subtitle')} </p>
            </div>


            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-1`}>
                {
                    workProjects.map((project, index) => (
                        <ProjectDialog project={project} key={index} />
                    ))
                }
            </div>

        </section>
    );
}
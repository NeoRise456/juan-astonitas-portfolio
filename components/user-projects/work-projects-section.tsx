"use server";

import ProjectDialog from "@/components/user-projects/project-dialog";
import {getLocale, getTranslations} from "next-intl/server";

export default async function WorkProjectsSection(){

    const t = await getTranslations('Work');
    const locale = await getLocale();

    const workProjects = [
        {
            name: 'Intercert Peru website',
            description: ( locale === 'en' ?
                    'website for Intercert Peru, an iso certification company. It includes a presentation of the company, its services, a contact form and the partnership program.'
                    : 'sitio web para Intercert Peru, una empresa de certificación iso. Incluye una presentación de la empresa, sus servicios, un formulario de contacto y el programa de asociación.'
            ),
            shortDescription: (locale === 'en' ? 'website for Intercert Peru' : 'sitio web para Intercert Peru'),
            url: 'https://www.intercert.com.pe/',
            img: '/projects/intercert-peru.png',
            technologies: ['Next.js','Prisma','Resend','Vercel'],

        },
        {
            name: 'ISO Cert. System ',
            description: ( locale === 'en' ?
                    'A certificate verification page for Intercert Peru, allowing users to verify the authenticity of their iso certificates entering the certificate register number.'
                    : 'Una página de verificación de certificados para Intercert Peru, que permite a los usuarios verificar la autenticidad de sus certificados iso ingresando el número de registro del certificado.'
            ),
            shortDescription: (locale === 'en' ? 'certification verify page' : 'página de verificación de certificados'),
            url: 'https://intercert-verify-certificate-page.vercel.app/',
            img: '/projects/intercert-verify.png',
            technologies: ['Next.js','Postgres','Prisma','Vercel'],
        }
    ]

    return (
        <section className={`relative mb-8`}>
            <div className={`mb-3`}>
                <h2 className={`text-sm uppercase tracking-wider `}>{t('title')}</h2>
                <p className={`text-muted-foreground text-xs`}> {t('subtitle')} </p>
            </div>


            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-1`}>
                {
                    workProjects.map((project, index) => (
                        <ProjectDialog project={project} key={index} />
                    ))
                }
            </div>

        </section>
    );
}
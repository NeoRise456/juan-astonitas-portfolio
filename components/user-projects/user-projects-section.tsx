"use server";

import ProjectDialog from "@/components/user-projects/project-dialog";
import {getLocale, getTranslations} from "next-intl/server";





export default async function UserProjectsSection(){

    const t = await getTranslations('Projects');
    const locale = await getLocale();

    const userProjects = [
        {
            name: 'CloudNRG',
            description: (locale === 'en' ? 'A blob storage service that allows you to upload, download and delete files.' :
                'Un servicio de almacenamiento de blobs que te permite subir, descargar y eliminar archivos.'),
            shortDescription: (locale === 'en' ? 'Blob storage service' : 'Servicio de almacenamiento de blobs') ,
            img: '/projects/cloudnrg.png',
            sourceCode: 'https://github.com/orgs/NRG-5/repositories',
            technologies: ['Next.js','Spring Boot','Docker','Ngrok'],
        },
        {
            name: 'Tech Interpretations',
            description: (locale === 'en' ? 'A glossary of tech terms where you can create,edit and delete explanations of acronyms.'
            : 'Un glosario de términos tecnológicos donde puedes crear, editar y eliminar explicaciones de acrónimos.'),
            shortDescription: (locale === 'en' ? 'A glossary of tech terms' : 'Glosario de términos tecnológicos'),
            url: 'https://neo-nextjs-simple-crud-app.onrender.com',
            img: '/projects/tech-interpretations.png',
            sourceCode: 'https://github.com/NeoRise456/NextJS-CRUD-App',
            technologies: ['Next.js', 'AppWrite','Render'],
        }
    ]

    return (
        <div className={`relative mb-8`}>
            <div className={`mb-3`}>
                <h2 className={`text-sm uppercase tracking-wider `}>{t('title')}</h2>
                <p className={`text-muted-foreground text-xs`}> {t('subtitle')} </p>
            </div>
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-1`}>
                {
                    userProjects.map((project, index) => (
                        <ProjectDialog project={project} key={index} />
                    ))
                }
            </div>
        </div>
    );
}
"use server";

import ProjectDialog from "@/components/user-projects/project-dialog";
import {getLocale, getTranslations} from "next-intl/server";





export default async function UserProjectsSection(){

    const t = await getTranslations('Projects');
    const locale = await getLocale();

    const userProjects = [
        {
            name: 'CHRONO_OS',
            description: (locale === 'en' ? 'A personal productivity app for habit tracking, task management, and weekly scheduling. Habit streaks with a weekly shield, consistency and focus analytics, GitHub-style density heatmap, and drag-and-drop weekly timetable. Built from scratch in two weeks.'
            : 'Una app de productividad personal para seguimiento de hábitos, gestión de tareas y planificación semanal. Rachas de hábitos con escudo semanal, analíticas de consistencia y enfoque, mapa de densidad estilo GitHub y horario semanal con drag-and-drop. Construida desde cero en dos semanas.'),
            shortDescription: (locale === 'en' ? 'personal productivity app' : 'app de productividad personal'),
            url: 'https://chrono-os.neorise.cloud/',
            img: '/projects/chrono-os.png',
            sourceCode: 'https://github.com/NeoRise456/chrono-os',
            technologies: ['Next.js', 'Convex','Better Auth','Tailwind'],
        },
        {
            name: 'CloudNRG',
            description: (locale === 'en' ? 'A blob storage service that allows you to upload, download and delete files.' :
                'Un servicio de almacenamiento de blobs que te permite subir, descargar y eliminar archivos.'),
            shortDescription: (locale === 'en' ? 'Blob storage service' : 'Servicio de almacenamiento de blobs') ,
            img: '/projects/cloudnrg.png',
            sourceCode: 'https://github.com/orgs/NRG-5/repositories',
            technologies: ['Next.js','Spring Boot','Docker','Ngrok'],
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
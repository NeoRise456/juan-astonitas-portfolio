"use server";

import ProjectDialog from "@/components/user-projects/project-dialog";
import CardCarousel from "@/components/user-projects/card-carousel";
import {getLocale, getTranslations} from "next-intl/server";





export default async function UserProjectsSection(){

    const t = await getTranslations('Projects');
    const locale = await getLocale();

    const userProjects = [
        {
            name: "Neo's Planner",
            description: (locale === 'en' ? 'Local-first desktop planner where everything is a task. Routines generate one task per occurrence over a fixed period, protocols hold reusable step lists, and consistency is tracked as done ÷ (done + missed). Todo, week/month calendar, routines and protocols views on SQLite via PowerSync, with the domain rules in a tested TypeScript core package. v0.1 ships as a Windows installer; the Android app and sync are next.'
            : 'Planificador de escritorio local-first donde todo es una tarea. Las rutinas generan una tarea por ocurrencia dentro de un periodo fijo, los protocolos guardan listas de pasos reutilizables y la consistencia se mide como hechas ÷ (hechas + perdidas). Vistas de pendientes, calendario semanal/mensual, rutinas y protocolos sobre SQLite con PowerSync, con las reglas de dominio en un paquete core de TypeScript con tests. La v0.1 se distribuye como instalador para Windows; la app Android y la sincronización vienen después.'),
            shortDescription: (locale === 'en' ? 'local-first desktop planner' : 'planificador de escritorio local-first'),
            img: '/projects/neos-own-planner.png',
            sourceCode: 'https://github.com/NeoRise456/neos-own-planner',
            technologies: ['Tauri','React','TypeScript','SQLite','PowerSync'],
        },
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
            name: "Neo's Postgres Emulator",
            description: (locale === 'en' ? 'Client-side PostgreSQL playground that runs entirely in the browser with PGlite (Postgres compiled to WebAssembly), no server needed. SQL editor with syntax highlighting and autocompletion, results as a grid or JSON with execution time, a schema inspector, an auto-generated ERD from foreign keys, query history, SQL import/export, and a database that persists in browser storage.'
            : 'Playground de PostgreSQL del lado del cliente que corre por completo en el navegador con PGlite (Postgres compilado a WebAssembly), sin servidor. Editor SQL con resaltado y autocompletado, resultados en tabla o JSON con tiempo de ejecución, inspector de esquema, diagrama ERD generado a partir de las llaves foráneas, historial de consultas, importación/exportación de SQL y una base de datos que persiste en el navegador.'),
            shortDescription: (locale === 'en' ? 'Postgres in the browser (WASM)' : 'Postgres en el navegador (WASM)'),
            img: '/projects/neo-postgres-emulator-erd.png',
            sourceCode: 'https://github.com/NeoRise456/Neo-Postgres-Emulator',
            technologies: ['Next.js','PGlite','WebAssembly','React Flow','Zustand'],
        }
    ]

    return (
        <section className={`relative mb-8`}>
            <CardCarousel
                header={
                    <div>
                        <h2 className={`text-sm uppercase tracking-wider `}>{t('title')}</h2>
                        <p className={`text-muted-foreground text-xs`}> {t('subtitle')} </p>
                    </div>
                }
            >
                {
                    userProjects.map((project, index) => (
                        <ProjectDialog project={project} key={index} />
                    ))
                }
            </CardCarousel>
        </section>
    );
}
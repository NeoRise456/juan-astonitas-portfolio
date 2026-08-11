"use server";

import ProjectDialog from "@/components/user-projects/project-dialog";
import {getLocale, getTranslations} from "next-intl/server";

export default async function WorkProjectsSection(){

    const t = await getTranslations('Work');
    const locale = await getLocale();

    const workProjects = [
        {
            name: 'ASV Telefonica',
            description: ( locale === 'en' ?
                    'Full system for ASV Telefonica built with a 5-person team: public website, admin panel, quotation catalog, and contact flow using Angular, Elysia (Bun), and PostgreSQL. I owned all DevOps (Docker, Dokploy, VPS, DNS) and led SEO and Core Web Vitals improvements including an 85% gain in First Contentful Paint.'
                    : 'Sistema completo para ASV Telefonica construido con un equipo de 5 personas: sitio público, panel de administración, catálogo de cotizaciones y formulario de contacto usando Angular, Elysia (Bun) y PostgreSQL. Fui dueño de todo el DevOps (Docker, Dokploy, VPS, DNS) y lideré mejoras de SEO y Core Web Vitals, incluyendo una mejora del 85% en First Contentful Paint.'
            ),
            shortDescription: (locale === 'en' ? 'full system + DevOps' : 'sistema completo + DevOps'),
            url: 'https://www.asvtelefonica.com/',
            img: '/projects/asvtelefonica.png',
            technologies: ['Angular','Elysia','PostgreSQL','Docker','Dokploy'],
        },
        {
            name: 'Quality Dent Peru',
            description: ( locale === 'en' ?
                    'Website for Quality Dent, a dental clinic in San Miguel, Lima with 20+ years of experience. Single-page marketing site presenting the clinic, its services (implants, orthodontics, cleaning, prosthetics, extractions), a patient testimonial, and a contact form with WhatsApp booking.'
                    : 'Sitio web para Quality Dent, una clínica dental en San Miguel, Lima con más de 20 años de experiencia. Sitio de una sola página que presenta la clínica, sus servicios (implantes, ortodoncia, limpieza, prótesis, extracciones), un testimonio de paciente y un formulario de contacto con reserva por WhatsApp.'
            ),
            shortDescription: (locale === 'en' ? 'dental clinic website' : 'sitio web de clínica dental'),
            url: 'https://qualitydentperu.com/',
            img: '/projects/quality-dent.png',
            technologies: ['Next.js','Tailwind','shadcn/ui','Resend'],

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
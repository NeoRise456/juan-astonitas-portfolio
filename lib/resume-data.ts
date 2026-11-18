import type {Locale} from "@/i18n/config";

/**
 * Single source of truth for the portfolio "Experience" section and the generated CV (/cv/en, /cv/es).
 * Update experience here once and both stay in sync.
 */

type Localized<T = string> = Record<Locale, T>;
type YearMonth = { year: number; month?: number }; // month: 1-12, omit for year-only dates

export const profile = {
    name: "Juan Diego Astonitas Diaz",
    location: "Lima, Peru",
    phone: "+51 957 887 918",
    email: "juanastonitas.dev@gmail.com",
    website: "juanastonitas.is-a.dev",
    linkedin: "linkedin.com/in/juan-astonitas-5ba0b425a",
    github: "github.com/NeoRise456",
    headline: {
        en: "Full-Stack Software Engineer",
        es: "Ingeniero de Software Full-Stack",
    } satisfies Localized,
    summary: {
        en: "Full-Stack Software Engineer with 2 years of experience delivering production web systems end to end, from Next.js and NestJS apps to the AWS, Docker and VPS infrastructure they run on. Currently building an internal accreditation audit platform at UPC and running a freelance client's site end to end. Comfortable in remote, English-speaking (C1 IELTS) teams.",
        es: "Ingeniero de Software Full-Stack con 2 años de experiencia desarrollando sistemas web en producción de extremo a extremo, desde Next.js y NestJS hasta la infraestructura en AWS, Docker y VPS. Actualmente construyo una plataforma interna de auditoría en la UPC y opero el sitio de un cliente freelance. Cómodo en equipos remotos de habla inglesa (C1 IELTS).",
    } satisfies Localized,
};

export type Experience = {
    company: string;
    position: Localized;
    modality: Localized;
    location: string;
    start: YearMonth;
    end?: YearMonth; // undefined = current
    /** Paragraph shown on the portfolio site. */
    description: Localized;
    /** Achievement bullets used in the CV. */
    bullets: Localized<string[]>;
    /** Technology labels; the site maps them to icons. */
    technologies: string[];
    /** Whether the role is listed in the CV (non-engineering roles stay site-only). */
    inCv: boolean;
};

export const experience: Experience[] = [
    {
        company: "UPC",
        position: {en: "Full-Stack Developer", es: "Desarrollador Full-Stack"},
        modality: {en: "Remote", es: "Remoto"},
        location: "Lima, Peru",
        start: {year: 2026, month: 8},
        description: {
            en: "Developing an internal accreditation audit platform for the Faculty of Engineering at Universidad Peruana de Ciencias Aplicadas. It validates ABET course portfolios stored in S3 against the official guidelines, cross-checks syllabi with the curriculum, runs AI content review, and issues signed audit certificates. Built with Next.js, NestJS, Prisma and PostgreSQL on AWS (RDS, S3), deployed with Docker.",
            es: "Desarrollo una plataforma interna de auditoría de acreditación para la Facultad de Ingeniería de la Universidad Peruana de Ciencias Aplicadas. Valida los portafolios de cursos ABET almacenados en S3 contra el lineamiento oficial, contrasta sílabos con la malla curricular, ejecuta revisión de contenido con IA y emite actas de auditoría firmadas. Construida con Next.js, NestJS, Prisma y PostgreSQL sobre AWS (RDS, S3), desplegada con Docker.",
        },
        bullets: {
            en: [
                "Develop the Faculty of Engineering's internal ABET accreditation audit platform in a multi-developer team, using Next.js, NestJS, Prisma, PostgreSQL (AWS RDS), AWS S3 and Docker.",
                "Built the evidence-generation module: pulls accreditation reports from the university's Accreditation System into the S3 portfolio tree through background jobs with polling, with in-memory ZIP packaging, preview and download.",
                "Implemented the ABET rubrics API (ZIP extraction of rubric files with failure handling), an endpoint to fetch course data by code and academic period, and a mutex guarding the academic data sync.",
            ],
            es: [
                "Desarrollo en equipo la plataforma interna de auditoría ABET de la Facultad de Ingeniería con Next.js, NestJS, Prisma, PostgreSQL (AWS RDS), AWS S3 y Docker.",
                "Construí el módulo de generación de evidencias: trae reportes del Sistema de Acreditación al árbol de portafolios en S3 mediante jobs en segundo plano con polling, con ZIP en memoria, previsualización y descarga.",
                "Implementé la API de rúbricas ABET (extracción ZIP de rúbricas con manejo de fallos), un endpoint para obtener datos de cursos por código y periodo académico, y un mutex que protege la sincronización de datos académicos.",
            ],
        },
        technologies: ["Next.js", "NestJS", "AWS", "PostgreSQL", "Docker"],
        inCv: true,
    },
    {
        company: "Chiki Pro",
        position: {en: "Freelance Full-Stack Developer", es: "Desarrollador Full-Stack Freelance"},
        modality: {en: "Remote", es: "Remoto"},
        location: "Lima, Peru",
        start: {year: 2026, month: 8},
        description: {
            en: "Built and run the catalog site for Chiki Pro, a premium TCG accessories brand: a bilingual Next.js site with Payload CMS for products, distributors and page content. I own the whole infrastructure: Hostinger VPS managed with Dokploy, PostgreSQL, SeaweedFS as the main S3 storage with MinIO for backups, and the domain's email.",
            es: "Construí y administro el sitio catálogo de Chiki Pro, una marca premium de accesorios TCG: un sitio bilingüe en Next.js con Payload CMS para productos, distribuidores y contenido. Soy responsable de toda la infraestructura: VPS en Hostinger gestionado con Dokploy, PostgreSQL, SeaweedFS como S3 principal con MinIO para backups, y el correo del dominio.",
        },
        bullets: {
            en: [
                "Sole developer of chikipro.com, a bilingual (EN/ES) catalog site for a premium trading-card accessories brand, built with Next.js and Payload CMS.",
                "Modeled products, variants, categories and distributors in Payload CMS with live preview, so the client manages all catalog and page content without code changes.",
                "Own the full infrastructure: Hostinger VPS managed with Dokploy, Dockerized PostgreSQL, SeaweedFS as primary S3 media storage, MinIO for backups, plus the domain's DNS and email and transactional emails (Resend).",
            ],
            es: [
                "Único desarrollador de chikipro.com, sitio catálogo bilingüe (EN/ES) para una marca premium de accesorios de trading cards, construido con Next.js y Payload CMS.",
                "Modelé productos, variantes, categorías y distribuidores en Payload CMS con live preview, para que el cliente gestione el catálogo sin tocar código.",
                "Responsable de toda la infraestructura: VPS en Hostinger con Dokploy, PostgreSQL en Docker, SeaweedFS como S3 principal, MinIO para backups, además del DNS, el correo del dominio y los correos transaccionales (Resend).",
            ],
        },
        technologies: ["Next.js", "Payload CMS", "PostgreSQL", "Docker"],
        inCv: true,
    },
    {
        company: "ASV Telefonica",
        position: {en: "Full-Stack Engineer", es: "Ingeniero de Software Full-Stack"},
        modality: {en: "Remote", es: "Remoto"},
        location: "Lima, Peru",
        start: {year: 2026, month: 4},
        end: {year: 2026, month: 8},
        description: {
            en: "Built the complete ASV Telefonica system with a 5-person team: public website, admin panel, quotation catalog, and contact flow using Angular, Elysia (Bun), and PostgreSQL. Owned all DevOps (Docker, Dokploy, VPS, DNS) and led SEO and Core Web Vitals improvements including an 85% gain in First Contentful Paint.",
            es: "Construí el sistema completo de ASV Telefonica con un equipo de 5 personas: sitio público, panel de administración, catálogo de cotizaciones y formulario de contacto usando Angular, Elysia (Bun) y PostgreSQL. Fui responsable de todo el DevOps (Docker, Dokploy, VPS, DNS) y lideré mejoras de SEO y Core Web Vitals, incluyendo una mejora del 85% en First Contentful Paint.",
        },
        bullets: {
            en: [
                "Owned all DevOps for a 5-engineer team: Dockerized services, Dokploy orchestration, VPS provisioning, and DNS/domain management keeping the platform live in production.",
                "Built the complete ASV Telefonica system with a 5-person team: public website, admin panel, quotation catalog, and contact flow using Angular, Elysia (Bun), and PostgreSQL.",
                "Improved SEO and Core Web Vitals, achieving an 85% improvement in First Contentful Paint (FCP) through rendering, asset, and build optimizations.",
            ],
            es: [
                "Fui responsable de todo el DevOps de un equipo de 5 ingenieros: servicios con Docker, orquestación con Dokploy, provisión de VPS y gestión de DNS/dominios manteniendo la plataforma en producción.",
                "Construí el sistema completo de ASV Telefonica con un equipo de 5 personas: sitio público, panel de administración, catálogo de cotizaciones y formulario de contacto usando Angular, Elysia (Bun) y PostgreSQL.",
                "Mejoré el SEO y los Core Web Vitals, logrando una mejora del 85% en First Contentful Paint (FCP) mediante optimizaciones de renderizado, assets y build.",
            ],
        },
        technologies: ["Angular", "TypeScript", "PostgreSQL", "Docker"],
        inCv: true,
    },
    {
        company: "Intercert Latam",
        position: {en: "Software Engineer Intern", es: "Practicante de Ingeniería de Software"},
        modality: {en: "On Site", es: "Presencial"},
        location: "Lima, Peru",
        start: {year: 2025, month: 1},
        end: {year: 2025, month: 4},
        description: {
            en: "Development of websites and web applications using React, TypeScript, and Next.js. Led Technical Audits of outsourced projects, trained internal teams on technological tools, and provided strategic consulting for IT infrastructure decisions.",
            es: "Desarrollo de sitios y aplicaciones web utilizando React, TypeScript y Next.js. Lideré Auditorías Técnicas de proyectos subcontratados, capacité a equipos internos en herramientas tecnológicas y brindé consultoría estratégica para decisiones de infraestructura de TI.",
        },
        bullets: {
            en: [
                "Built an ISO Certificate Verification Platform end-to-end (Next.js, Prisma, PostgreSQL) as sole owner, delivered in 1 week under a critical deadline with 91% faster load times than the legacy system.",
                "Redesigned the Intercert Peru corporate website with Next.js server-side rendering for SEO; 98% faster than the previous version and an 80% increase in commercial-contact conversions.",
                "Automated web scraping of OSCE to collect and analyze customer data.",
            ],
            es: [
                "Construí una Plataforma de Verificación de Certificados ISO de extremo a extremo (Next.js, Prisma, PostgreSQL) como único responsable, entregada en 1 semana bajo un plazo crítico y 91% más rápida que el sistema anterior.",
                "Rediseñé el sitio corporativo de Intercert Peru con server-side rendering en Next.js para SEO; 98% más rápido que la versión anterior y un aumento del 80% en conversiones de contacto comercial.",
                "Automaticé web scraping de OSCE para recopilar y analizar datos de clientes.",
            ],
        },
        technologies: ["Next.js", "React", "TypeScript", "Tailwind"],
        inCv: true,
    },
    {
        company: "Papaya Tutor",
        position: {en: "Tutor", es: "Tutor"},
        modality: {en: "Remote", es: "Remoto"},
        location: "Lima, Peru",
        start: {year: 2024},
        end: {year: 2025},
        description: {
            en: "Proficiently delivered Reading and Mathematics instruction to American children (ages 8-14) at Papaya, a startup focused on supplementary education.",
            es: "Impartí instrucción de Lectura y Matemáticas a niños estadounidenses (de 8 a 14 años) en Papaya, una startup enfocada en educación complementaria.",
        },
        bullets: {en: [], es: []},
        technologies: ["Microsoft 365", "Google Meet"],
        inCv: false,
    },
];

export const cvProjects: { name: string; links: string[]; description: Localized }[] = [
    {
        name: "Neo's Planner",
        links: ["github.com/NeoRise456/neos-own-planner"],
        description: {
            en: "Local-first desktop planner shipped as a Windows installer: routines generate one task per occurrence, with offline SQLite via PowerSync and the domain rules in a tested TypeScript core package. Stack: Tauri 2 (Rust), React 19, TypeScript, TanStack Router, Zustand, Tailwind CSS 4, Vitest.",
            es: "Planificador de escritorio local-first publicado como instalador para Windows: las rutinas generan una tarea por ocurrencia, con SQLite offline vía PowerSync y las reglas de dominio en un paquete core de TypeScript con tests. Stack: Tauri 2 (Rust), React 19, TypeScript, TanStack Router, Zustand, Tailwind CSS 4, Vitest.",
        },
    },
];

export const education: {
    degree: Localized;
    school: Localized;
    location: string;
    start: YearMonth;
    end?: YearMonth;
    notes: Localized<string[]>;
}[] = [
    {
        degree: {
            en: "B.Sc. Software Engineering (in progress)",
            es: "Bachiller en Ingeniería de Software (en curso)",
        },
        school: {
            en: "Peruvian University of Applied Sciences (UPC)",
            es: "Universidad Peruana de Ciencias Aplicadas (UPC)",
        },
        location: "Lima, Peru",
        start: {year: 2022},
        notes: {en: ["expected graduation: 2027"], es: ["graduación esperada: 2027"]},
    },
];

export const skills: { label: Localized; items: Localized }[] = [
    {
        label: {en: "Languages", es: "Lenguajes"},
        items: {
            en: "TypeScript, JavaScript, Java, Python, HTML/CSS",
            es: "TypeScript, JavaScript, Java, Python, HTML/CSS",
        },
    },
    {
        label: {en: "Frontend", es: "Frontend"},
        items: {
            en: "Next.js, React, Angular, Tailwind CSS, shadcn/ui, responsive design",
            es: "Next.js, React, Angular, Tailwind CSS, shadcn/ui, diseño responsivo",
        },
    },
    {
        label: {en: "Backend", es: "Backend"},
        items: {
            en: "Node.js, NestJS, Elysia (Bun), Spring Boot, REST APIs, Payload CMS, Convex",
            es: "Node.js, NestJS, Elysia (Bun), Spring Boot, APIs REST, Payload CMS, Convex",
        },
    },
    {
        label: {en: "Databases", es: "Bases de datos"},
        items: {
            en: "PostgreSQL, MySQL, MongoDB, Prisma ORM",
            es: "PostgreSQL, MySQL, MongoDB, Prisma ORM",
        },
    },
    {
        label: {en: "Cloud & DevOps", es: "Cloud y DevOps"},
        items: {
            en: "AWS (S3, RDS), Docker, Dokploy, VPS, DNS, SeaweedFS, MinIO, CI/CD, Linux, Git/GitHub, Vercel",
            es: "AWS (S3, RDS), Docker, Dokploy, VPS, DNS, SeaweedFS, MinIO, CI/CD, Linux, Git/GitHub, Vercel",
        },
    },
    {
        label: {en: "Spoken languages", es: "Idiomas"},
        items: {
            en: "Spanish (native), English (C1, IELTS)",
            es: "Español (nativo), Inglés (C1, IELTS)",
        },
    },
];

const MONTHS: Localized<{ long: string[]; short: string[] }> = {
    en: {
        long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    es: {
        long: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        short: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    },
};

export const PRESENT: Localized<{ site: string; cv: string }> = {
    en: {site: "Present", cv: "Present"},
    es: {site: "Actualidad", cv: "Presente"},
};

export function formatYearMonth(date: YearMonth, locale: Locale, style: "long" | "short"): string {
    if (!date.month) return String(date.year);
    return `${MONTHS[locale][style][date.month - 1]} ${date.year}`;
}

export function formatRange(
    start: YearMonth,
    end: YearMonth | undefined,
    locale: Locale,
    style: "long" | "short",
): { start: string; end: string } {
    return {
        start: formatYearMonth(start, locale, style),
        end: end ? formatYearMonth(end, locale, style) : PRESENT[locale][style === "long" ? "site" : "cv"],
    };
}

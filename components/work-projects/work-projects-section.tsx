"use client";

import WorkProjectCard from "@/components/work-projects/work-project-card";
import {Geist} from "next/font/google";
import {startTransition, unstable_ViewTransition as ViewTransition, useState} from "react";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import { IoClose } from "react-icons/io5";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const workProjects = [
    {
        name: 'Intercert Peru website',
        description: 'website for Intercert Peru, an iso certification company.',
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

export default function WorkProjectsSection(){

    const [fullscreen, setFullscreen] = useState(false);

    return (
        <section className={`relative mb-8`}>
            <div className={`mb-3`}>
                <h2 className={`text-sm uppercase tracking-wider `}>My Work</h2>
                <p className={`text-muted-foreground text-xs`}> projects i was hired to do/work on </p>
            </div>


            {
                fullscreen ?
                    <div
                        className={`grid grid-cols-2 w-full bg-zinc-100 border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 rounded-lg`}
                    >

                        <ViewTransition name={`test`}>
                            <div className={`rounded-l-lg relative  overflow-hidden`}>
                                <Image
                                    src={workProjects[0].img}
                                    alt={workProjects[0].name}
                                    quality={100}
                                    fill
                                    className={`object-cover`}
                                />
                            </div>
                        </ViewTransition>

                        <div className={`p-6 relative flex flex-col justify-between  `}>
                            <button
                                className={`ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`}
                                onClick={() => startTransition(() => setFullscreen(false))}
                            >
                                <IoClose/>
                            </button>
                            <div>
                                <div className={`flex flex-col gap-2 text-center sm:text-left`}>
                                    <h3 className={`text-lg leading-none font-semibold`}>{workProjects[0].name}</h3>
                                    <p className={`text-muted-foreground text-sm`}> {workProjects[0].description}</p>
                                </div>
                                <div className={`flex flex-wrap gap-1 mt-1`}>
                                    {
                                        workProjects[0].technologies.map((tech, index) => (
                                            <Badge variant="outline" key={index}
                                                   className={`h-5 min-w-5 rounded-md px-1 py-0 text-[10px] border-white/15`}>
                                                <span className={`${geistSans.className}`}>{tech}</span>
                                            </Badge>
                                        ))
                                    }
                                </div>
                            </div>
                            <Button variant={`default`} size={`sm`}>
                                web
                            </Button>
                        </div>
                    </div>
                    :
                    <div className={`grid grid-cols-3 gap-1`}>
                        <WorkProjectCard project={workProjects[0]}
                                         onClick={() => startTransition(() => setFullscreen(true))}/>
                    </div>
            }

        </section>
    );
}
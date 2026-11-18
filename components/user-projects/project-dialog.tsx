"use server";

import {Geist} from "next/font/google";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import ProjectCard from "@/components/user-projects/project-card";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {IoArrowUpCircleOutline} from "react-icons/io5";
import { BsCodeSlash } from "react-icons/bs";
import {getTranslations} from "next-intl/server";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export default async function ProjectDialog({project} : {
    project: {
        name: string;
        description: string;
        shortDescription: string;
        url?: string;
        img: string;
        sourceCode?: string;
        technologies: string[];
    }
}){

    const t = await getTranslations('Projects');

    return (
        <Dialog>
            <DialogTrigger asChild>
                <ProjectCard project={project} />
            </DialogTrigger>
            <DialogContent className={`flex flex-col p-0 gap-0 overflow-y-auto max-h-[90dvh] max-w-[calc(100%-2rem)] sm:max-w-2xl lg:max-w-3xl ` +
                `[&>button:last-child]:rounded-md [&>button:last-child]:bg-background/80 [&>button:last-child]:p-1 [&>button:last-child]:opacity-100 [&>button:last-child]:backdrop-blur-sm`}>
                <div className={`relative aspect-[16/9] w-full shrink-0 overflow-hidden rounded-t-lg border-b`}>
                    <Image
                        src={project.img}
                        alt={project.name}
                        quality={100}
                        fill
                        sizes="(max-width: 640px) 100vw, 768px"
                        className={`object-cover object-top`}
                    />
                </div>
                <div className={`p-5 sm:p-6 flex flex-col gap-4`}>
                    <DialogHeader className={`text-left`}>
                        <DialogTitle>{project.name}</DialogTitle>
                        <DialogDescription>{project.description}</DialogDescription>
                        <div className={`flex flex-wrap gap-1`}>
                            {
                                project.technologies.map((tech, index) => (
                                    <Badge variant="outline" key={index}
                                           className={`h-5 min-w-5 rounded-md px-1 py-0 text-[10px] border-accent-foreground/15 dark:border-white/15`}>
                                        <span className={`${geistSans.className}`}>{tech}</span>
                                    </Badge>
                                ))
                            }
                        </div>
                    </DialogHeader>

                    {
                        project.sourceCode && project.url &&
                        <div className={`grid grid-cols-2 gap-4`}>
                            <Button size={`sm`}
                                    className={`group transition-transform duration-150 ease-in-out hover:scale-105 `}
                                    asChild>
                                <Link href={project.url} target={`_blank`} className={`text-xs`}>
                                    {t('liveWebsite')}
                                    <IoArrowUpCircleOutline
                                        className={`rotate-90 transition-all duration-150 ease-in-out group-hover:rotate-45`}/>
                                </Link>
                            </Button>
                            <Button size={`sm`}
                                    className={`group transition-transform duration-150 ease-in-out hover:scale-105 `}
                                    asChild>
                                <Link href={project.sourceCode} target={`_blank`} className={`text-xs`}>
                                    {t('sourceCode')}
                                    <BsCodeSlash/>
                                </Link>
                            </Button>
                        </div>
                    }

                    {
                        project.sourceCode && !project.url &&
                        <Button size={`sm`}
                                className={`group transition-transform duration-150 ease-in-out hover:scale-105 `}
                                asChild>
                            <Link href={project.sourceCode} target={`_blank`}>
                                {t('sourceCode')}
                                <BsCodeSlash/>
                            </Link>
                        </Button>
                    }

                    {
                        !project.sourceCode && project.url &&
                        <Button size={`sm`}
                                className={`group transition-transform duration-150 ease-in-out hover:scale-105 `}
                                asChild>
                            <Link href={project.url} target={`_blank`}>
                                {t('liveWebsite')}
                                <IoArrowUpCircleOutline
                                    className={`rotate-90 transition-all duration-150 ease-in-out group-hover:rotate-45`}/>
                            </Link>
                        </Button>

                    }

                </div>
            </DialogContent>
        </Dialog>
    );
}
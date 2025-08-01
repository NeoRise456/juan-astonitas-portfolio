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



const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export default function ProjectDialog({project} : {
    project: {
        name: string;
        description: string;
        shortDescription: string;
        url: string;
        img: string;
        sourceCode?: string;
        technologies: string[];
    }
}){
    return (
        <Dialog>
            <DialogTrigger asChild>
                <ProjectCard project={project} />
            </DialogTrigger>
            <DialogContent className={`grid grid-cols-2 p-0 gap-0 max-w-7/8 md:max-w-2xl`}>
                <div className={`relative  overflow-hidden rounded-l-lg border-r`}>
                    <Image
                        src={project.img}
                        alt={project.name}
                        quality={100}
                        fill
                        className={`object-cover `}
                    />
                </div>
                <div className={`p-6 flex flex-col justify-between gap-4`}>
                    <DialogHeader>
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
                        project.sourceCode ?
                            <div className={`grid grid-cols-2 gap-4`}>
                                <Button size={`sm`}
                                        className={`group transition-transform duration-150 ease-in-out hover:scale-105 `}
                                        asChild>
                                    <Link href={project.url} target={`_blank`}>
                                        visit site
                                        <IoArrowUpCircleOutline
                                            className={`rotate-90 transition-all duration-150 ease-in-out group-hover:rotate-45`}/>
                                    </Link>
                                </Button>
                                <Button size={`sm`}
                                        className={`group transition-transform duration-150 ease-in-out hover:scale-105 `}
                                        asChild>
                                    <Link href={project.sourceCode} target={`_blank`}>
                                        source code
                                        <BsCodeSlash/>
                                    </Link>
                                </Button>
                            </div>
                            :
                            <Button size={`sm`}
                                    className={`group transition-transform duration-150 ease-in-out hover:scale-105 `}
                                    asChild>
                                <Link href={project.url} target={`_blank`}>
                                    visit site
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


import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import {Geist} from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export default function ProjectCard({project} : {
    project: {
        name: string;
        description: string;
        shortDescription: string;
        url: string;
        img: string;
        technologies: string[];
    }
}){
    return (
        <div className={`border text-card-foreground overflow-hidden border-zinc-200 rounded-md bg-zinc-100/30` +
                `backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/30 cursor-pointer transition-transform ease-in-out duration-150 hover:-translate-y-0.5`}>
            <div className={`p-0`}>
                <div className={`relative aspect-[16/9] overflow-hidden`}>
                    <Image
                        src={project.img}
                        alt={project.name}
                        quality={100}
                        fill
                    />
                </div>


                <div className={`p-2 flex items-start relative`}>
                    <div>
                        <h3 className={`text-sm from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text`}>
                            {project.name}
                        </h3>
                        <p className={`text-xs text-muted-foreground`}>{project.shortDescription}</p>
                        <div className={`flex flex-wrap gap-1 mt-1`}>
                            {
                                project.technologies.map((tech, index) => (
                                    <Badge variant="outline" key={index} className={`h-5 min-w-5 rounded-md px-1 py-0 text-[10px] border-accent-foreground/15 dark:border-white/15`}>
                                        <span className={`${geistSans.className}`}>{tech}</span>
                                    </Badge>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
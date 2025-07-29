
import React, {ComponentType} from "react";
import {cn} from "@/lib/utils";
const colorMap = {
    "Next.js": "group-hover:fill-[#707070]",
    "TypeScript": "group-hover:fill-[#2d79c7]",
    "Tailwind": "group-hover:fill-[#35bef8]",
    "PostgreSQL": "group-hover:fill-[#2f6792]",
    "Docker": "group-hover:fill-[#1D63ED]",
    "React": "group-hover:fill-[#61dbfb]",
    "Python": "group-hover:fill-[#ffc107]",
} as Record<string, string>;

export default function TechnologyCard({ icon: Icon, label ,className , style }: {icon : ComponentType<{
        size?: number,
        className?: string
        style?: React.CSSProperties
    }>, label: string ,className?: string , style?: React.CSSProperties}) {

    const hoverClass = colorMap[label] ?? "group-hover:fill-current";

    return (
        <div className={cn(`border text-card-foreground shadow overflow-hidden rounded-md transition-all duration-150 backdrop-blur-sm border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 group`,className)}
             style={{...style}}>

            <div className={`relative aspect-square flex flex-col items-center justify-center p-2 overflow-visible `}>
                <Icon className={`transition-all duration-150 ease-in-out fill-white ${hoverClass} group-hover:scale-110 group-hover:-translate-y-0.5`} size={40} />
                <div className={`mt-3 text-xs text-muted-foreground`}>
                    {label}
                </div>
            </div>

        </div>
    );
}
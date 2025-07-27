import React from "react";
import {cn} from "@/lib/utils";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";

export default function PastEmploymentCard({employment,style,className} : {
    employment: {
        company: string;
        position: string;
        modality: string;
        startDate: string;
        endDate: string;
        description?: string;
        technologies: { icon: any; label: string }[];
    };
    style?: React.CSSProperties;
    className?: string;
}){
    return (
        <div className={cn(`mb-4`,className)} style={{...style}}>
            <div className={`flex justify-between items-start mb-1`}>
                <div className={``}>
                    <h3 className={`text-md font-bold `}> {employment.position} </h3>
                    <p className={`text-xs font-normal uppercase tracking-wider text-muted-foreground`}>{employment.startDate} - {employment.endDate}</p>
                </div>
                <div className={`text-right`}>
                    <p className={`text-xs`}> {employment.company}</p>
                    <p className={`text-xs font-semibold`}>{employment.modality}</p>
                </div>
            </div>
            <p className={`text-xs font-light mb-2 `}> {employment.description}</p>
            <div className={`flex gap-1`}>
                {employment.technologies.map((tech, index) => (
                    <Tooltip key={index}>
                        <TooltipTrigger asChild>
                            <span  className="flex items-center">
                                <tech.icon size={20}/>
                            </span>
                        </TooltipTrigger>
                        <TooltipContent>
                            <span>{tech.label}</span>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </div>
    );
}
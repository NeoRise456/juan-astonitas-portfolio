import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";


export default function MainEmploymentCard({employment} : {
    employment: {
        company: string;
        position: string;
        modality: string;
        startDate: string;
        endDate: string;
        description?: string;
        technologies: { icon: any; label: string }[];
    };
}){
    return (
        <div className={`mb-4`}>

            <div className={`flex justify-between items-start mb-2`}>
                <div className={``}>
                    <h3 className={`text-md md:text-2xl font-bold `}> {employment.position} </h3>
                    <p className={`text-xs font-normal uppercase tracking-wider text-black-400 dark:text-black-400`}>{employment.startDate} - {employment.endDate}</p>
                </div>
                <div className={`text-right`}>
                    <p className={`text-sm `}> {employment.company}</p>
                    <p className={`text-sm font-semibold`}>{employment.modality}</p>
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

import Image from "next/image";

export default function UserPresentationSection(){
    return(
        <div className={`mb-8 flex items-center gap-6`}>
            <div className={`relative`}>
                <div className={`relative w-25 h-25 rounded-full overflow-hidden `}>
                    <Image
                        src={"/me.png"}
                        alt={"literally me"}
                        fill
                        quality={100}
                    />
                </div>
            </div>
            <div>
                <h1 className={`text-3xl font-bold`}>Hi, I am Juan Astonitas.</h1>
                <p className={`text-muted-foreground text-sm mb-2`}>
                    a Software Engineer, specialized in building detailed web applications, services and
                    automations.
                </p>
                <span className={`font-medium`}> Lima, Peru. </span>
            </div>
        </div>
    );
}
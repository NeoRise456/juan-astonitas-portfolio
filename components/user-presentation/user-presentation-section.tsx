import Image from "next/image";
import {FiGithub, FiLinkedin} from "react-icons/fi";
import {MdMailOutline} from "react-icons/md";
import ResumeButton from "@/components/user-presentation/resume-button";
import {useTranslations} from 'next-intl';

export default function UserPresentationSection(){

    const t = useTranslations('User');

    return(
        <div className={`mb-8`}>
            <div className={`flex items-center gap-6`}>
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
                    <h1 className={`text-3xl font-bold`}>{t('greeting')}, I am Juan Astonitas.</h1>
                    <p className={`text-muted-foreground text-sm mb-2`}>
                        a Software Engineer, specialized in building detailed web applications, services and
                        automations.
                    </p>
                    <span className={`font-medium`}> Lima, Peru. </span>
                </div>
            </div>
            <div className={`flex flex-row items-center justify-end gap-4 mb-2 mt-2 sm:mt-0 px-4`}>
                <ResumeButton/>
                <div className={`flex flex-row items-center gap-2 `}>
                    <FiGithub
                        className={`transition-all duration-150 hover:text-muted-foreground hover:scale-110`}
                        size={20}/>
                    <FiLinkedin
                        className={`transition-all  duration-150 hover:text-muted-foreground hover:scale-110`}
                        size={20}/>
                    <MdMailOutline
                        className={`transition-all duration-150 hover:text-muted-foreground hover:scale-110`}
                        size={26}/>
                </div>

            </div>
        </div>
    );
}
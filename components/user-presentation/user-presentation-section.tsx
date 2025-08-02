"use server";

import Image from "next/image";
import {FiGithub, FiLinkedin} from "react-icons/fi";
import {MdMailOutline} from "react-icons/md";
import ResumeButton from "@/components/user-presentation/resume-button";
import {getTranslations} from "next-intl/server";
import Link from "next/link";

export default async function UserPresentationSection(){

    const t = await getTranslations('User');

    return(
        <section className={`mb-8`}>
            <div className={`flex items-center gap-6`}>
                <div className={`relative`}>
                    <div className={`relative w-25 h-25 rounded-full overflow-hidden `}>
                        <Image
                            src={"/me.png"}
                            alt={"literally me"}
                            fill
                            quality={100}
                            className={`object-cover object-left rotate-270`}
                        />
                    </div>
                </div>
                <div>
                    <h1 className={`text-3xl font-bold`}>{t('greeting')} Juan Astonitas.</h1>
                    <p className={`text-muted-foreground text-sm mb-2`}>
                        {t('description')}
                    </p>
                    <span className={`font-medium`}> Lima, Peru. </span>
                </div>
            </div>
            <div className={`flex flex-row items-center justify-end gap-4 mb-2 mt-2 sm:mt-0 px-4`}>
                <ResumeButton/>
                <div className={`flex flex-row items-center gap-2 `}>
                    <Link href={`https://github.com/NeoRise456`} target={`_blank`}>
                        <FiGithub
                            className={`transition-all duration-150 hover:text-muted-foreground hover:scale-110`}
                            size={20}/>
                    </Link>
                    <Link href={`https://www.linkedin.com/in/juan-diego-astonitas-5ba0b425a/`} target={`_blank`}>
                        <FiLinkedin
                            className={`transition-all  duration-150 hover:text-muted-foreground hover:scale-110`}
                            size={20}/>
                    </Link>
                    <Link href={`https://mail.google.com/mail/?view=cm&fs=1&to=juanastonitas.dev@gmail.com`} target={`_blank`}>
                        <MdMailOutline
                            className={`transition-all duration-150 hover:text-muted-foreground hover:scale-110`}
                            size={26}/>
                    </Link>
                </div>

            </div>
        </section>
    );
}
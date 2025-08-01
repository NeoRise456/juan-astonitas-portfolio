"use client";

import {LuDownload} from "react-icons/lu";
import {Button} from "@/components/ui/button";
import {useTranslations} from "next-intl";
import Link from "next/link";

export default function ResumeButton(){

    const t = useTranslations('User')


    return (
        <Button size={`sm`} className={`h-[26px] transition-transform ease-in-out duration-150 hover:scale-105`} asChild>
            <Link href={t('cvLink')} target={`_blank`}>
                <LuDownload />
                <span className={`text-xs`}> {t('cv')} </span>
            </Link>
        </Button>
    );
}
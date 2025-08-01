"use server";

import LanguageToggleButton from "@/components/generic/language-toggle-button";
import ThemeToggleButton from "@/components/generic/theme-toggle-button";
import Link from "next/link";
import {getTranslations} from "next-intl/server";


export default async function PortfolioHeader(){

    const t = await getTranslations('Header');

    return (
        <header className={`mx-auto max-w-2xl px-4 py-2 w-full border-x border-b rounded-b-2xl border-zinc-800 backdrop-blur-[1px]`}>
            <div className={`flex flex-row items-center justify-between `}>
                <Link href={`/`}>
                    <span className={`text-2xl font-semibold `}>J/A</span>
                </Link>
                <div className={`max-w-[112px] sm:max-w-full text-center`}>
                    <span className={`text-xs animate-fade-down animate-duration-400 animate-delay-300`}>
                    ( {t('available')}<strong
                        className={`text-green-600 dark:text-[#69df69] animate-pulse`}>{t('work')}</strong> )
                </span>
                </div>
                <div className={`flex flex-row items-center gap-2 `}>
                    <LanguageToggleButton/>
                    <ThemeToggleButton/>
                </div>
            </div>
        </header>
    );
}
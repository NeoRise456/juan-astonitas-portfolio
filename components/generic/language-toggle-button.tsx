"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {useLocale} from 'next-intl';
import {useState, useTransition} from "react";
import {Locale} from '@/i18n/config';
import {setUserLocale} from "@/lib/locale";


export default function LanguageToggleButton(){

    const locale = useLocale();
    const [lang, setLang] = useState(locale);

    async function handleLocaleChange(value: string) {
        if (!value) return;

        const locale = value as Locale;
        await setUserLocale(locale);

        setLang(value);
    }

    return (
        <ToggleGroup type="single" variant="outline" value={lang}
                     aria-label="Language Toggle" onValueChange={handleLocaleChange} >
            <ToggleGroupItem value="es" aria-label="Toggle Spanish">
                <span> es </span>
            </ToggleGroupItem>
            <ToggleGroupItem value="en" aria-label="Toggle English">
                <span> en </span>
            </ToggleGroupItem>
        </ToggleGroup>
    );
}
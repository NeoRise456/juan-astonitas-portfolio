"use client";

import Link from "next/link";
import {Button} from "@/components/ui/button";
import { useState } from "react";
import {useTranslations} from "next-intl";

export default function NotFoundButton(){

    const [hovered, setHovered] = useState(false);
    const t = useTranslations('NotFound');

    return (
        <Button asChild
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`transition-all duration-150 ease-in-out hover:scale-105 `} >
            <Link href="/">
                {t('button')}
            </Link>
        </Button>
    );
}
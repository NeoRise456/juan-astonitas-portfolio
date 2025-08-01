import NotFoundButton from "@/components/generic/not-found-button";
import {useTranslations} from "next-intl";


export default function NotFoundPage(){

    const t = useTranslations('NotFound');

    return(
        <section className={`text-center h-full flex flex-col items-center justify-center gap-4`}>
            <span>{t('message')} (404).</span>
            <NotFoundButton />
        </section>
    );
}
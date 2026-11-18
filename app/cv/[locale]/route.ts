import {createElement, type ReactElement} from "react";
import {renderToBuffer, type DocumentProps} from "@react-pdf/renderer";
import CvDocument from "@/lib/cv/cv-document";
import {locales, type Locale} from "@/i18n/config";

// Rendered once per locale at build time and served as a static file.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
}

export async function GET(_request: Request, ctx: RouteContext<"/cv/[locale]">) {
    const {locale} = (await ctx.params) as { locale: Locale };

    const element = createElement(CvDocument, {locale}) as unknown as ReactElement<DocumentProps>;
    const pdf = await renderToBuffer(element);

    return new Response(new Uint8Array(pdf), {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `inline; filename="Juan-Astonitas-CV-${locale.toUpperCase()}.pdf"`,
        },
    });
}

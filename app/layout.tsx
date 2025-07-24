import type { Metadata } from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import PortfolioFooter from "@/components/generic/portfolio-footer";
import PortfolioHeader from "@/components/generic/portfolio-header";
import {NextIntlClientProvider} from 'next-intl';

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Juan Astonitas Portfolio",
    description: "Software Engineer, Im the best at what I do",
    keywords: [
        "Juan Astonitas",
        "Software Engineer",
        "Software Engineering",
        "Portfolio",
        "Web Development"
    ],
    authors: [{ name: "Juan Astonitas" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


    return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistMono.className}  antialiased`}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
      >

          <div className={`grid min-h-dvh grid-rows-[auto_1fr_auto] bg-white dark:bg-black `}>
              <NextIntlClientProvider>
                  <PortfolioHeader/>
                  <main className={`mx-auto max-w-2xl px-4 py-8`}>
                      {children}
                  </main>
              </NextIntlClientProvider>
              <PortfolioFooter/>
          </div>
      </ThemeProvider>
      </body>
    </html>
    );
}

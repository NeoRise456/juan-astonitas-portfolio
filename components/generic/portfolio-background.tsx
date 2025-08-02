"use client";


import {StarsBackground} from "@/components/ui/stars-background";
import {useTheme} from "next-themes";
import LazyShootingStars from "@/components/ui/lazy-shooting-stars";


export default function PortfolioBackground(){

    const { theme } = useTheme();

    return (
        <div className={`-z-10 `}>
            {/* lazy loading to ensure client render (cuz of the useTheme hook usage) */}
            <LazyShootingStars theme={theme}/>
            <StarsBackground
                className={`-z-10 `}
                starDensity={0.00007}
                theme={theme}
                style={{ minHeight: "calc(100dvh * 3)" }}
            />
        </div>
    );
}
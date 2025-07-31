"use client";


import {StarsBackground} from "@/components/ui/stars-background";
import {useTheme} from "next-themes";
import LazyShootingStars from "@/components/ui/lazy-shooting-stars";


export default function PortfolioBackground(){

    const { theme } = useTheme();

    return (
        <div className={`-z-10 `}>
            {/* idk  but it worked lmao */}
            <LazyShootingStars theme={theme}/>
            <StarsBackground className={`-z-10 `} theme={theme} style={{ minHeight: "calc(100dvh * 2)" }}/>
        </div>
    );
}
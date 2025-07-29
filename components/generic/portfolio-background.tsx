"use client";

import {ShootingStars} from "@/components/ui/shooting-stars";
import {StarsBackground} from "@/components/ui/stars-background";
import {useTheme} from "next-themes";

export default function PortfolioBackground(){

    const { theme } = useTheme();

    return (
        <>
            <ShootingStars
                className={`-z-10`}
                starColor={theme === 'dark' ? `#ffffff` : `#000000`}
                trailColor={theme === 'dark' ? `#a3a3a3` : `#4a4a4a`}
                minDelay={1200}
                maxDelay={3200}
                maxSpeed={20}
            />
            <StarsBackground className={`-z-10`} theme={theme}/>
        </>
    );
}
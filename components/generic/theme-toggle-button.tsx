"use client"

import {Button} from "@/components/ui/button";
import { CgDarkMode } from "react-icons/cg";
import {useTheme} from "next-themes";


export default function ThemeToggleButton(){

    const { theme, setTheme } = useTheme();

    const handleToggle = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const next = theme === 'dark' ? 'light' : 'dark';

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        // ponytail: View Transitions API not in every browser/TS lib yet; cast keeps it one-line.
        const doc = document as Document & {
            startViewTransition?: (cb: () => void) => { ready: Promise<void> }
        };

        if (!doc.startViewTransition || prefersReducedMotion) {
            setTheme(next);
            return;
        }

        const rect = e.currentTarget.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        // ponytail: full diagonal, not farthest-corner — covers viewport from any click point, kills end-snap on zoom/scroll drift.
        const endRadius = Math.hypot(window.innerWidth, window.innerHeight);

        const transition = doc.startViewTransition(() => setTheme(next));

        await transition.ready;
        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${endRadius}px at ${x}px ${y}px)`,
                ],
            },
            {
                duration: 450,
                easing: 'ease-in-out',
                pseudoElement: '::view-transition-new(root)',
            },
        );
    };

    return (
        <Button size={`icon`} variant={`default`} className={`cursor-pointer`} onClick={handleToggle}>
            <CgDarkMode size={80}/>
        </Button>
    );
}

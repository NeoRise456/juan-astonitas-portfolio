"use client";

import {Children, ReactNode, useCallback, useEffect, useRef, useState} from "react";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {cn} from "@/lib/utils";

const GAP = 4;

export default function CardCarousel({header, children}: { header: ReactNode; children: ReactNode }) {
    const trackRef = useRef<HTMLDivElement>(null);
    const items = Children.toArray(children);
    const [page, setPage] = useState(0);
    const [pages, setPages] = useState(items.length);

    const getStep = useCallback(() => {
        const first = trackRef.current?.firstElementChild as HTMLElement | null;
        return first ? first.offsetWidth + GAP : 1;
    }, []);

    const update = useCallback(() => {
        const track = trackRef.current;
        if (!track) return;
        const step = getStep();
        const visible = Math.max(1, Math.round((track.clientWidth + GAP) / step));
        setPages(Math.max(1, items.length - visible + 1));
        setPage(Math.round(track.scrollLeft / step));
    }, [getStep, items.length]);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        update();
        track.addEventListener("scroll", update, {passive: true});
        window.addEventListener("resize", update);
        return () => {
            track.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, [update]);

    const goTo = (index: number) => {
        const track = trackRef.current;
        if (!track) return;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const target = Math.min(Math.max(index, 0), pages - 1);
        track.scrollTo({left: target * getStep(), behavior: reduce ? "auto" : "smooth"});
    };

    const arrowClass = `flex size-6 items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800 ` +
        `transition-opacity duration-150 enabled:cursor-pointer enabled:hover:bg-zinc-100 dark:enabled:hover:bg-zinc-800 disabled:opacity-30`;

    return (
        <div>
            <div className={`mb-3 flex items-end justify-between gap-4`}>
                {header}
                {pages > 1 && (
                    <div className={`hidden shrink-0 gap-1 sm:flex`}>
                        <button type="button" aria-label="Previous" className={arrowClass}
                                onClick={() => goTo(page - 1)} disabled={page <= 0}>
                            <IoIosArrowBack size={12}/>
                        </button>
                        <button type="button" aria-label="Next" className={arrowClass}
                                onClick={() => goTo(page + 1)} disabled={page >= pages - 1}>
                            <IoIosArrowForward size={12}/>
                        </button>
                    </div>
                )}
            </div>

            <div
                ref={trackRef}
                className={`flex flex-col gap-1 sm:-my-1 sm:snap-x sm:snap-mandatory sm:flex-row sm:overflow-x-auto sm:py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
            >
                {items.map((item, index) => (
                    <div key={index} className={`flex *:w-full sm:shrink-0 sm:snap-start sm:basis-[calc(50%-2px)]`}>
                        {item}
                    </div>
                ))}
            </div>

            {pages > 1 && (
                <div className={`mt-2 hidden justify-center gap-1.5 sm:flex`}>
                    {Array.from({length: pages}).map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={index === page}
                            onClick={() => goTo(index)}
                            className={cn(
                                `h-1.5 cursor-pointer rounded-full bg-zinc-400/40 transition-all duration-200 dark:bg-zinc-600/50`,
                                index === page ? `w-4 bg-zinc-800 dark:bg-zinc-200` : `w-1.5`
                            )}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

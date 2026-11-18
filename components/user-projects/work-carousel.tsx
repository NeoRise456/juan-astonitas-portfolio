"use client";

import {Children, ReactNode, useCallback, useEffect, useRef, useState} from "react";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {cn} from "@/lib/utils";

const GAP = 4;

export default function WorkCarousel({header, children}: { header: ReactNode; children: ReactNode }) {
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
                    <div className={`flex shrink-0 gap-1`}>
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
                className={`-my-1 flex snap-x snap-mandatory gap-1 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
            >
                {items.map((item, index) => (
                    <div key={index} className={`flex shrink-0 basis-full snap-start sm:basis-[calc(50%-2px)] *:w-full`}>
                        {item}
                    </div>
                ))}
            </div>

            {pages > 1 && (
                <div className={`mt-2 flex justify-center gap-1.5`}>
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

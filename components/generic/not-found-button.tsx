"use client";

import Link from "next/link";
import {Button} from "@/components/ui/button";
import { useState } from "react";

export default function NotFoundButton(){

    const [hovered, setHovered] = useState(false);

    return (
        <Button asChild
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`transition-all duration-150 ease-in-out hover:scale-105 hover:-translate-y-0.5`} >
            <Link href="/">
                Go to Home
            </Link>
        </Button>
    );
}
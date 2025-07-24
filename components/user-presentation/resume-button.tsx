'use client';

import {LuDownload} from "react-icons/lu";
import {Button} from "@/components/ui/button";
import type { MouseEvent } from 'react';


export default function ResumeButton(){

    const handleDownload = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = '/me.png';
        link.download = 'me.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Button size={`sm`} className={`h-[26px] transition-transform ease-in-out duration-150 hover:scale-110`} onClick={handleDownload}>
            <LuDownload />
            <span className={`text-xs`}> Resume </span>
        </Button>
    );
}
"use client"

import {Button} from "@/components/ui/button";
import { CgDarkMode } from "react-icons/cg";
import {useTheme} from "next-themes";


export default function ThemeToggleButton(){

    const { theme, setTheme } = useTheme();

    return (
        <Button size={`icon`} variant={`default`} className={`cursor-pointer`} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <CgDarkMode size={80}/>
        </Button>
    );
}
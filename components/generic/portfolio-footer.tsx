import localFont from "next/font/local";
import { MdMailOutline } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";


const evaFont = localFont({
    src: "../../fonts/NIS-JTC-Win-M9.ttf",
    variable: "--font-geist-eva",
})



export default function PortfolioFooter(){
    return (
        <footer className={`mx-auto max-w-2xl py-2 border-x border-t rounded-t-2xl border-zinc-800 w-full overflow-hidden`}>
            <div className={`flex flex-row items-center justify-between mb-2 px-4`}>
                <div className={`flex flex-row items-center gap-2 `}>
                    <FiGithub
                        className={`transition-all duration-150 hover:text-muted-foreground hover:scale-110`}
                        size={20}/>
                    <FiLinkedin
                        className={`transition-all  duration-150 hover:text-muted-foreground hover:scale-110`}
                        size={20}/>
                    <MdMailOutline
                        className={`transition-all duration-150 hover:text-muted-foreground hover:scale-110`}
                        size={26}/>
                </div>
                <span className={`text-muted-foreground`}> Juan Astonitas | 2025 </span>
            </div>

            <div className={`${evaFont.className} uppercase text-4xl sm:text-5xl md:text-6xl text-nowrap text-center flex overflow-hidden max-w-2xl`}>
                <ul className={`flex items-center justify-between gap-0 shrink-0 animate-scroll-text`} aria-hidden>
                    <li>
                        <span>be kind.</span>
                    </li>
                    <li>
                        <span>be real.</span>
                    </li>
                    <li>
                        <span>be human.</span>
                    </li>
                </ul>
                <ul className={`flex items-center justify-between gap-0 shrink-0 animate-scroll-text`} aria-hidden>
                    <li>
                        <span>be kind.</span>
                    </li>
                    <li>
                        <span>be real.</span>
                    </li>
                    <li>
                        <span>be human.</span>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
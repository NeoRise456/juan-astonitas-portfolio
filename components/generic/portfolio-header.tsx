
import LanguageToggleButton from "@/components/generic/language-toggle-button";
import ThemeToggleButton from "@/components/generic/theme-toggle-button";


export default function PortfolioHeader(){
    return (
        <header className={`mx-auto max-w-2xl px-4 py-2 w-full`}>
            <div className={`flex flex-row items-center justify-between `}>
                <span className={`text-2xl font-semibold`}>J/A</span>
                <span className={`text-xs `}>( available for <strong className={`text-[#69df69] animate-pulse`}>work</strong> )</span>
                <div className={`flex flex-row items-center gap-2`}>
                    <LanguageToggleButton/>
                    <ThemeToggleButton/>
                </div>
            </div>
        </header>
    );
}
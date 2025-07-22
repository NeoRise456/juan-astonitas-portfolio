import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"


export default function LanguageToggleButton(){
    return (
        <ToggleGroup type="single" variant="outline" defaultValue={`english`} aria-label="Language Toggle">
            <ToggleGroupItem value="spanish" aria-label="Toggle Spanish">
                <span> es </span>
            </ToggleGroupItem>
            <ToggleGroupItem value="english" aria-label="Toggle English">
                <span> en </span>
            </ToggleGroupItem>
        </ToggleGroup>
    );
}
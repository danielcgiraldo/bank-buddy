import { CancelIcon, PlusIcon } from "../../lib/icons";
import { MODULES } from "../../lib/modules";

export default function SimulatorNav({
    setSelected,
    selected,
    content,
}: {
    setSelected: (selected: number) => void;
    selected: number;
    content: any;
}) {
    if (content.length === 0) {
        return (<></>)
    } else {
        return (
            <ul className="text-white text-xs flex">
                {Object.keys(content).map((el, index) => {
                    return (
                        <li className="border-r border-white/10 h-full flex items-center relative" key={`tab-${index}`}>
                            <button className="absolute right-2 hover:opacity-100 opacity-30 [&>*]:w-[15px] [&>*]:h-[15px] hover:bg-white/10 rounded-full">
                                <CancelIcon />
                            </button>
                            <button className={"py-2.5 items-center px-4 pr-7 hover:opacity-100 opacity-30 transition-opacity" + ((selected == index) ? " opacity-100" : "") } onClick={() => setSelected(index)}>
                                {content[el].emoji} {MODULES[content[el].type as keyof typeof MODULES].name}
                            </button>
                        </li>
                    );
                })}
    
                <li className="flex items-center px-2">
                    <button className="items-center hover:opacity-100 opacity-30 transition-opacity cursor-pointer  [&>*]:w-[20px] [&>*]:h-[20px]">
                        <PlusIcon />
                    </button>
                </li>
            </ul>
        );
    }
    
}

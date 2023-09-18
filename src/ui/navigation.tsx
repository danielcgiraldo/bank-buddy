import { CancelIcon, HomeIcon, PlusIcon } from "../lib/icons";
import { MODULES } from "../lib/modules";

export default function MainNavigation({
    setSelected,
    selected,
    content,
}: {
    setSelected: (selected: number) => void;
    selected: number;
    content: any;
}) {
    if (content.length === 0) {
        return <></>;
    } else {
        return (
            <ul className="text-white text-xs flex gap-2">
                <li className="bg-white/10 rounded-md hover:bg-white/30 transition-colors flex align-middle">
                    <button className="p-3 pointer [&>*]:h-3.5 [&>*]:w-auto hover:opacity-100 opacity-50 transition-opacity">
                        <HomeIcon />
                    </button>
                </li>
                {Object.keys(content).map((el, index) => {
                    return (
                        <li
                            className="bg-white/10 rounded-md flex items-center relative hover:bg-white/30 transition-colors"
                            key={`tab-${index}`}
                        >
                            <button
                                className={
                                    "items-center hover:opacity-100 opacity-30 transition-opacity px-3.5 p-2.5 pr-20" +
                                    (selected == index ? " opacity-100" : "")
                                }
                                onClick={() => setSelected(index)}
                            >
                                {content[el].emoji}{" "}
                                {
                                    MODULES[
                                        content[el].type as keyof typeof MODULES
                                    ].name
                                }
                            </button>
                            <button className="absolute right-2.5 hover:opacity-100 opacity-30 [&>*]:w-[15px] [&>*]:h-[15px] hover:bg-white/10 rounded-full">
                                <CancelIcon />
                            </button>
                        </li>
                    );
                })}

                <li className="flex items-center">
                    <button className="items-center hover:opacity-100 opacity-30 transition-opacity cursor-pointer  [&>*]:w-[20px] [&>*]:h-[20px]">
                        <PlusIcon />
                    </button>
                </li>
            </ul>
        );
    }
}

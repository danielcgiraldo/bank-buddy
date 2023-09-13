import { useEffect, useState } from "react";
import SimulatorContent from "./simulator/content";
import SimulatorNav from "./simulator/nav";

export default function SimulatorComponent() {
    const [content, setContent] = useState<any>([]);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        setContent([
            {
                emoji: "📈",
                type: "CDT",
            },
            {
                emoji: "🏦",
                type: "Loan",
            },
        ]);
    }, []);

    return (
        <section className="rounded-md w-full min-h-full border border-white/10 overflow-hidden">
            <nav className="w-full backdrop-blur-md bg-gray-900/80 border-b border-white/10">
                <SimulatorNav
                    setSelected={(selected: number) => {
                        setSelected(selected);
                    }}
                    selected={selected}
                    content={content}
                />
            </nav>
            <div className="bg-slate-800/80 backdrop-blur-md h-full">
                {content.length === 0 ? (
                    <p>No hay nada creado</p>
                ) : (
                    <SimulatorContent content={content[selected]} />
                )}
            </div>
        </section>
    );
}

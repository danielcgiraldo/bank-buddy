import { useEffect, useState } from "react";
import MainNavigation from "./navigation";

export default function Content() {
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
        <div className="max-w-5xl w-full min-h-full px-8">
            <nav>
                <MainNavigation
                    selected={selected}
                    setSelected={(selected) => {
                        setSelected(selected);
                    }}
                    content={content}
                />
            </nav>
            <section>
                <h1>Hola</h1>
            </section>
        </div>
    );
}

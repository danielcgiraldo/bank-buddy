import { useEffect, useState } from "react";

async function getStatus() {
    try {
        const response = await fetch(
            "https://findata.statuspage.io/api/v2/status.json"
        );
        const data = await response.json();
        return data.status.indicator;
    } catch (error) {
        console.error("Error fetching status:", error);
        return "unknown";
    }
}

export default function Footer() {
    const [status, setStatus] = useState("unknown");

    useEffect(() => {
        getStatus().then((data) => {
            setStatus(data);
        });
    }, []);

    return (
        <footer className="text-xs text-white/50 py-4 flex justify-between mt-2">
            <p>
                Copyright © 2023{" "}
                <a
                    href="/"
                    className="underline hover:text-white transition-colors"
                >
                    Findata
                </a>
                . Licencia{" "}
                <a
                    href="https://github.com/danielcgiraldo/findata/blob/main/LICENSE"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Apache 2.0
                </a>
                .
            </p>
            <nav>
                <ul className="flex gap-2">
                    <li>
                        <a
                            className="hover:underline hover:text-white transition-colors"
                            href="/form"
                            target="_blank"
                        >
                            Contáctanos
                        </a>
                    </li>
                    |
                    <li>
                        <a
                            className="hover:underline hover:text-white transition-colors"
                            href="/api"
                            target="_blank"
                        >
                            API
                        </a>
                    </li>
                    |
                    <li>
                        <a
                            className="hover:underline hover:text-white transition-colors flex items-center"
                            href="https://findata.statuspage.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className={"w-1.5 h-1.5 rounded-full inline-block mr-1" + " " + status}></span>{" "}
                            Status
                        </a>
                    </li>
                    |
                    <li>
                        <a
                            className="hover:underline hover:text-white transition-colors"
                            target="_blank"
                            href="/t&c"
                        >
                            Términos y Condiciones
                        </a>
                    </li>
                </ul>
            </nav>
            <style>
                .operational {"{ background-color: #4caf50; }"}
                .none {"{ background-color: #4caf50; }"}
                .degraded_performance {"{ background-color: #ff9800; }"}
                .partial_outage {"{ background-color: #ff9800; }"}
                .major_outage {"{ background-color: #f44336; }"}
                .maintenance {"{ background-color: #2196f3; }"}
                .unknown {"{ display: none; }"}
            </style>
        </footer>
    );
}

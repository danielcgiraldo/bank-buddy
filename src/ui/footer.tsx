export default function Footer() {
    return (
        <footer className="text-xs text-white/50 py-4 flex justify-between mt-2">
            <p>Copyright © 2023 <a href="/" className="underline hover:text-white transition-colors">Findata</a>. Licencia <a href="https://github.com/danielcgiraldo/findata/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">Apache 2.0</a>.</p>
            <nav>
                <ul className="flex gap-2">
                    <li>
                        <a className="hover:underline hover:text-white transition-colors" href="/form" target="_blank">Contáctanos</a>
                    </li>
                    |
                    <li>
                        <a className="hover:underline hover:text-white transition-colors" href="/api" target="_blank">API</a>
                    </li>
                    |
                    <li>
                        <a className="hover:underline hover:text-white transition-colors" target="_blank" href="/t&c">Términos y Condiciones</a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}
import {
    Github,
    LifeBuoy,
    MessageSquare,
    Share2,
    Flag,
    Heart,
    Key
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Support() {
    const openLink = (ev: Event) => {
        const target = ev.target as HTMLElement;
        const url = target.dataset.url;
        const options = target.dataset.options;
        if (url) {
            if (options) {
                window.open(url, "_blank", options);
                return;
            }
            window.open(url, "_blank");
        }
    };

    const shareButton = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: "FinData",
                    text: "FinData",
                    url: "https://findata.vercel.app/",
                })
                .then(() => console.log("Successful share"))
                .catch((error) => console.log("Error sharing", error));
        } else {
            console.log("Share not supported");
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    <LifeBuoy className="mr-2 h-4 w-4" /> Soporte
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Asistencia</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem onSelect={shareButton}>
                        <Share2 className="mr-2 h-4 w-4" />
                        <span>Compartir</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem
                        onSelect={openLink}
                        data-url="https://github.com/danielcgiraldo/findata"
                    >
                        <Github className="mr-2 h-4 w-4" />
                        <span>Contribuir</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onSelect={openLink}
                        data-url="https://github.com/danielcgiraldo/findata/issues"
                    >
                        <Flag className="mr-2 h-4 w-4" />
                        <span>Reportar Problema</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onSelect={openLink}
                        data-options="width=500,height=600"
                        data-url="https://www.paypal.com/donate/?hosted_button_id=VUL8F5NECLHK6"
                    >
                        <Heart className="mr-2 h-4 w-4" />
                        <span>Donar</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem
                        onSelect={openLink}
                        data-url="/api"
                    >
                        <Key className="mr-2 h-4 w-4" />
                        <span>Credenciales API</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onSelect={openLink}
                        data-url="https://docs.google.com/forms/d/e/1FAIpQLSd8T_7-NArBBDAiuEQNe3VwJ7Fc1iZHXYtYgKKBiLD3JHW57Q/viewform?usp=sf_link"
                    >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        <span>Contáctanos</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

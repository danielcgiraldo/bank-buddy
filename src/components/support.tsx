import {
    Github,
    LifeBuoy,
    MessageSquare,
    Share2,
    Flag,
    Heart,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Support() {

    const openLink = (ev) => {
        const url = ev.target.dataset.url;
        if (url) {
            window.open(url, "_blank");
        }
    }

    const shareButton = () => {
        if (navigator.share) {
            navigator.share({
                title: "FinData",
                text: "FinData",
                url: "https://findata.app",
            })
                .then(() => console.log("Successful share"))
                .catch((error) => console.log("Error sharing", error));
        } else {
            console.log("Share not supported");
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>
                    <LifeBuoy className="mr-2 h-4 w-4" /> Support
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
                    <DropdownMenuItem onSelect={openLink} data-url="https://github.com/danielcgiraldo/findata">
                        <Github className="mr-2 h-4 w-4" />
                        <span>GitHub</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={openLink} data-url="https://github.com/danielcgiraldo/findata">
                        <Flag className="mr-2 h-4 w-4" />
                        <span>Reportar Problema</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={openLink} data-url="https://github.com/danielcgiraldo/findata">
                        <Heart className="mr-2 h-4 w-4" />
                        <span>Donar</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={openLink} data-url="https://github.com/danielcgiraldo/findata">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>Contáctanos</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

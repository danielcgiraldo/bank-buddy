import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { GraduationCap, User2, DollarSign, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import submitForm from "@/lib/form";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const submit = async (ev: SubmitEvent) => {
        setLoading(true);
        ev.preventDefault();
        const response = await submitForm(ev);
        setLoading(false);
        if (response.status == "ok") {
            toast({
                title: "Gracias por contactarnos",
                description:
                    "Tu solicitud ha sido enviada con éxito. A tu correo llegará una respuesta lo más pronto posible.",
            });
        } else {
            toast({
                title: "Error",
                description:
                    "Ha ocurrido un error al enviar tu solicitud. Por favor, intenta nuevamente."
            });
        }
        
    };
    return (
        <Card className="max-w-md w-full">
            <form action="/v1/contact" onSubmit={submit} method="POST">
                <CardHeader>
                    <CardTitle>Contáctanos</CardTitle>
                    <CardDescription>
                        ¿Tienes alguna duda?
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Nombre Completo</Label>
                        <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input
                            id="email"
                            placeholder="ejemplo@ejemplo.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="title">Asunto</Label>
                        <Input
                            id="title"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="msg">
                            Mensaje
                        </Label>
                        <Textarea
                            id="msg"
                            required
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" disabled={loading} type="submit">
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Por favor, espera
                            </>
                        ) : (
                            "Continuar"
                        )}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}

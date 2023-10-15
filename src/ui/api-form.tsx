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

export default function ApiForm() {
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const submit = async (ev: SubmitEvent) => {
        setLoading(true);
        ev.preventDefault();
        const response = await submitForm(ev);
        setLoading(false);
        if (response.status == "ok") {
            toast({
                title: "Solicitud enviada",
                description:
                    "Tu solicitud ha sido enviada con éxito. A tu correo llegará una respuesta en las próximas 24 horas.",
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
        <Card className="max-w-lg">
            <form action="/api/requestAPI" onSubmit={submit} method="POST">
                <CardHeader>
                    <CardTitle>Credenciales API</CardTitle>
                    <CardDescription>
                        Queremos saber para qué vas a usar nuestra API
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <RadioGroup
                        defaultValue="card"
                        className="grid grid-cols-3 gap-4"
                        required
                    >
                        <div>
                            <RadioGroupItem
                                value="card"
                                id="card"
                                className="peer sr-only"
                            />
                            <Label
                                htmlFor="card"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                                <User2 className="mb-3 h-6 w-6" />
                                Personal
                            </Label>
                        </div>
                        <div>
                            <RadioGroupItem
                                value="paypal"
                                id="paypal"
                                className="peer sr-only"
                            />
                            <Label
                                htmlFor="paypal"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                                <GraduationCap className="mb-3 h-6 w-6" />
                                Acádemico
                            </Label>
                        </div>
                        <div>
                            <RadioGroupItem
                                value="apple"
                                id="apple"
                                className="peer sr-only"
                            />
                            <Label
                                htmlFor="apple"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                                <DollarSign className="mb-3 h-6 w-6" />
                                Comercial
                            </Label>
                        </div>
                    </RadioGroup>
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
                        <Label htmlFor="usecase">
                            Cuentános para que vas a usar nuestra API
                        </Label>
                        <Textarea
                            id="usecase"
                            placeholder="Comienza a escribir..."
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
